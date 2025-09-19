#!/usr/bin/env node

const fs = require('node:fs').promises;
const path = require('node:path');
const yaml = require('js-yaml');
const DependencyResolver = require('../lib/dependency-resolver');

class TeamBuilder {
  constructor(options = {}) {
    this.rootDir = options.rootDir || process.cwd();
    this.teamsDir = path.join(this.rootDir, 'teams');
    this.outputDir = options.outputDir || path.join(this.rootDir, 'dist', 'teams');
    this.registryPath = path.join(this.rootDir, 'teams-registry.json');
    this.resolver = new DependencyResolver(this.rootDir);
  }

  async loadRegistry() {
    try {
      const content = await fs.readFile(this.registryPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Failed to load teams registry:', error.message);
      return { teams: {} };
    }
  }

  async loadTeamConfig(teamPath) {
    const configPath = path.join(this.rootDir, teamPath, 'config.yaml');
    try {
      const content = await fs.readFile(configPath, 'utf8');
      return yaml.load(content);
    } catch (error) {
      console.error(`Failed to load team config at ${configPath}:`, error.message);
      return null;
    }
  }

  async loadTeamBundle(teamPath) {
    const bundlePath = path.join(this.rootDir, teamPath, 'team-bundle.yaml');
    try {
      const content = await fs.readFile(bundlePath, 'utf8');
      return yaml.load(content);
    } catch (error) {
      console.error(`Failed to load team bundle at ${bundlePath}:`, error.message);
      return null;
    }
  }

  async buildTeam(teamId) {
    console.log(`Building team: ${teamId}`);

    const registry = await this.loadRegistry();
    const teamInfo = registry.teams[teamId];

    if (!teamInfo) {
      throw new Error(`Team ${teamId} not found in registry`);
    }

    const teamPath = teamInfo.path;
    const config = await this.loadTeamConfig(teamPath);
    const bundle = await this.loadTeamBundle(teamPath);

    if (!config || !bundle) {
      throw new Error(`Failed to load team configuration for ${teamId}`);
    }

    // Create output directory for team
    const teamOutputDir = path.join(this.outputDir, teamId);
    await fs.mkdir(teamOutputDir, { recursive: true });

    // Bundle team components
    const teamBundle = {
      id: teamId,
      name: teamInfo.name,
      version: config.version,
      description: config.description,
      category: teamInfo.category,
      icon: teamInfo.icon,
      agents: [],
      workflows: [],
      templates: [],
      tasks: [],
      checklists: [],
      data: []
    };

    // Copy agents
    if (bundle.agents) {
      for (const agent of bundle.agents) {
        const agentPath = path.join(this.rootDir, teamPath, 'agents', `${agent}.md`);
        try {
          const content = await fs.readFile(agentPath, 'utf8');
          teamBundle.agents.push({
            name: agent,
            content: content
          });
          console.log(`  ✓ Added agent: ${agent}`);
        } catch (error) {
          console.warn(`  ⚠ Agent ${agent} not found`);
        }
      }
    }

    // Copy workflows
    if (bundle.workflows) {
      for (const workflow of bundle.workflows) {
        const workflowPath = path.join(this.rootDir, teamPath, 'workflows', workflow);
        try {
          const content = await fs.readFile(workflowPath, 'utf8');
          teamBundle.workflows.push({
            name: workflow,
            content: yaml.load(content)
          });
          console.log(`  ✓ Added workflow: ${workflow}`);
        } catch (error) {
          console.warn(`  ⚠ Workflow ${workflow} not found`);
        }
      }
    }

    // Write bundled team
    const outputPath = path.join(teamOutputDir, 'team-bundle.json');
    await fs.writeFile(outputPath, JSON.stringify(teamBundle, null, 2));
    console.log(`  ✓ Team bundle created: ${outputPath}`);

    // Create a flattened version for web use
    const flatPath = path.join(teamOutputDir, `${teamId}.txt`);
    await this.createFlattenedBundle(teamBundle, flatPath);
    console.log(`  ✓ Flattened bundle created: ${flatPath}`);

    return teamBundle;
  }

  async createFlattenedBundle(teamBundle, outputPath) {
    let content = `# ${teamBundle.name} Team Bundle\n\n`;
    content += `Version: ${teamBundle.version}\n`;
    content += `Category: ${teamBundle.category}\n`;
    content += `Description: ${teamBundle.description}\n\n`;

    // Add agents
    if (teamBundle.agents.length > 0) {
      content += '## Agents\n\n';
      for (const agent of teamBundle.agents) {
        content += `### ${agent.name}\n\n`;
        content += agent.content + '\n\n';
      }
    }

    // Add workflows
    if (teamBundle.workflows.length > 0) {
      content += '## Workflows\n\n';
      for (const workflow of teamBundle.workflows) {
        content += `### ${workflow.name}\n\n`;
        content += yaml.dump(workflow.content) + '\n\n';
      }
    }

    await fs.writeFile(outputPath, content);
  }

  async buildAllTeams() {
    const registry = await this.loadRegistry();
    const results = {};

    for (const teamId of Object.keys(registry.teams)) {
      try {
        results[teamId] = await this.buildTeam(teamId);
        console.log(`✓ Built team: ${teamId}`);
      } catch (error) {
        console.error(`✗ Failed to build team ${teamId}:`, error.message);
        results[teamId] = { error: error.message };
      }
    }

    return results;
  }

  async listTeams() {
    const registry = await this.loadRegistry();
    console.log('\nAvailable Teams:\n');

    for (const [id, team] of Object.entries(registry.teams)) {
      console.log(`${team.icon} ${team.name} (${id})`);
      console.log(`  Category: ${team.category}`);
      console.log(`  Version: ${team.version}`);
      console.log(`  Agents: ${team.agents.length}`);
      console.log(`  Install: ${team.installCommand}\n`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const builder = new TeamBuilder();

  const command = args[0] || 'build-all';

  (async () => {
    try {
      switch (command) {
        case 'build':
          const teamId = args[1];
          if (!teamId) {
            console.error('Please specify a team ID');
            process.exit(1);
          }
          await builder.buildTeam(teamId);
          break;

        case 'build-all':
          await builder.buildAllTeams();
          break;

        case 'list':
          await builder.listTeams();
          break;

        default:
          console.log('Usage: team-builder.js [build <team-id>|build-all|list]');
          process.exit(1);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  })();
}

module.exports = TeamBuilder;