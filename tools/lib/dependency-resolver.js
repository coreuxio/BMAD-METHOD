const fs = require('node:fs').promises;
const path = require('node:path');
const yaml = require('js-yaml');
const { extractYamlFromAgent } = require('./yaml-utils');

class DependencyResolver {
  constructor(rootDir) {
    this.rootDir = rootDir;
    this.bmadCore = path.join(rootDir, 'bmad-core');
    this.common = path.join(rootDir, 'common');
    this.cache = new Map();
  }

  async resolveAgentDependencies(agentId) {
    const agentPath = path.join(this.bmadCore, 'agents', `${agentId}.md`);
    const agentContent = await fs.readFile(agentPath, 'utf8');

    // Extract YAML from markdown content with command cleaning
    const yamlContent = extractYamlFromAgent(agentContent, true);
    if (!yamlContent) {
      throw new Error(`No YAML configuration found in agent ${agentId}`);
    }

    const agentConfig = yaml.load(yamlContent);

    const dependencies = {
      agent: {
        id: agentId,
        path: agentPath,
        content: agentContent,
        config: agentConfig,
      },
      resources: [],
    };

    // Personas are now embedded in agent configs, no need to resolve separately

    // Resolve other dependencies
    const depTypes = ['tasks', 'templates', 'checklists', 'data', 'utils'];
    for (const depType of depTypes) {
      const deps = agentConfig.dependencies?.[depType] || [];
      for (const depId of deps) {
        const resource = await this.loadResource(depType, depId);
        if (resource) dependencies.resources.push(resource);
      }
    }

    return dependencies;
  }

  async resolveTeamDependencies(teamId) {
    let teamPath;
    let teamContent;
    let teamConfig;

    // Try new teams directory structure first
    if (teamId.startsWith('team-')) {
      const newTeamPath = path.join(this.rootDir, 'teams', teamId, 'config.yaml');
      try {
        teamContent = await fs.readFile(newTeamPath, 'utf8');
        teamPath = newTeamPath;
        teamConfig = yaml.load(teamContent);
      } catch {
        // Not in new structure, try old location
        teamPath = path.join(this.bmadCore, 'agent-teams', `${teamId}.yaml`);
        teamContent = await fs.readFile(teamPath, 'utf8');
        teamConfig = yaml.load(teamContent);
      }
    } else {
      // Try old location for backward compatibility
      teamPath = path.join(this.bmadCore, 'agent-teams', `${teamId}.yaml`);
      teamContent = await fs.readFile(teamPath, 'utf8');
      teamConfig = yaml.load(teamContent);
    }

    const dependencies = {
      team: {
        id: teamId,
        path: teamPath,
        content: teamContent,
        config: teamConfig,
      },
      agents: [],
      resources: new Map(), // Use Map to deduplicate resources
    };

    // Always add bmad-orchestrator agent first if it's a team
    const bmadAgent = await this.resolveAgentDependencies('bmad-orchestrator');
    dependencies.agents.push(bmadAgent.agent);
    for (const res of bmadAgent.resources) {
      dependencies.resources.set(res.path, res);
    }

    // Resolve all agents in the team
    let agentsToResolve = teamConfig.agents || [];

    // Handle wildcard "*" - include all agents except bmad-master
    if (agentsToResolve.includes('*')) {
      const allAgents = await this.listAgents();
      // Remove wildcard and add all agents except those already in the list and bmad-master
      agentsToResolve = agentsToResolve.filter((a) => a !== '*');
      for (const agent of allAgents) {
        if (!agentsToResolve.includes(agent) && agent !== 'bmad-master') {
          agentsToResolve.push(agent);
        }
      }
    }

    for (const agentId of agentsToResolve) {
      if (agentId === 'bmad-orchestrator' || agentId === 'bmad-master') continue; // Already added or excluded
      const agentDeps = await this.resolveAgentDependencies(agentId);
      dependencies.agents.push(agentDeps.agent);

      // Add resources with deduplication
      for (const res of agentDeps.resources) {
        dependencies.resources.set(res.path, res);
      }
    }

    // Resolve workflows
    for (const workflowId of teamConfig.workflows || []) {
      const resource = await this.loadResource('workflows', workflowId);
      if (resource) dependencies.resources.set(resource.path, resource);
    }

    // Convert Map back to array
    dependencies.resources = [...dependencies.resources.values()];

    return dependencies;
  }

  async loadResource(type, id) {
    const cacheKey = `${type}#${id}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      let content = null;
      let filePath = null;

      // First try bmad-core
      try {
        filePath = path.join(this.bmadCore, type, id);
        content = await fs.readFile(filePath, 'utf8');
      } catch {
        // If not found in bmad-core, try common folder
        try {
          filePath = path.join(this.common, type, id);
          content = await fs.readFile(filePath, 'utf8');
        } catch {
          // File not found in either location
        }
      }

      if (!content) {
        console.warn(`Resource not found: ${type}/${id}`);
        return null;
      }

      const resource = {
        type,
        id,
        path: filePath,
        content,
      };

      this.cache.set(cacheKey, resource);
      return resource;
    } catch (error) {
      console.error(`Error loading resource ${type}/${id}:`, error.message);
      return null;
    }
  }

  async listAgents() {
    try {
      const files = await fs.readdir(path.join(this.bmadCore, 'agents'));
      return files.filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', ''));
    } catch {
      return [];
    }
  }

  async listTeams() {
    const teams = [];

    // Check old location for backward compatibility
    try {
      const files = await fs.readdir(path.join(this.bmadCore, 'agent-teams'));
      const oldTeams = files.filter((f) => f.endsWith('.yaml')).map((f) => f.replace('.yaml', ''));
      teams.push(...oldTeams);
    } catch {
      // Directory might not exist
    }

    // Check new teams directory structure
    try {
      const teamsDir = path.join(this.rootDir, 'teams');
      const teamDirs = await fs.readdir(teamsDir);

      for (const dir of teamDirs) {
        if (dir.startsWith('team-')) {
          const teamPath = path.join(teamsDir, dir);
          const stat = await fs.stat(teamPath);
          if (stat.isDirectory()) {
            // Check if config.yaml exists
            try {
              await fs.access(path.join(teamPath, 'config.yaml'));
              teams.push(dir);
            } catch {
              // No config.yaml, skip
            }
          }
        }
      }
    } catch {
      // Teams directory might not exist
    }

    return teams;
  }
}

module.exports = DependencyResolver;
