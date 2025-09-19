const fs = require('node:fs').promises;
const path = require('node:path');

class TeamInstaller {
  constructor(options = {}) {
    this.rootDir = options.rootDir || process.cwd();
    this.registryPath = path.join(this.rootDir, 'teams-registry.json');
    this.teamsDir = path.join(this.rootDir, 'teams');
    this.targetDir = options.targetDir || process.cwd();
  }

  async loadRegistry() {
    try {
      const content = await fs.readFile(this.registryPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      throw new Error(`Failed to load teams registry: ${error.message}`);
    }
  }

  async installTeam(teamId, targetPath) {
    console.log(`Installing team: ${teamId}`);

    const registry = await this.loadRegistry();
    const teamInfo = registry.teams[teamId];

    if (!teamInfo) {
      throw new Error(`Team '${teamId}' not found in registry`);
    }

    const sourcePath = path.join(this.rootDir, teamInfo.path);
    const destPath = targetPath || path.join(this.targetDir, '.bmad-teams', teamId);

    // Create destination directory
    await fs.mkdir(destPath, { recursive: true });

    // Copy team files
    await this.copyDirectory(sourcePath, destPath);

    // Create team manifest
    const manifest = {
      id: teamId,
      name: teamInfo.name,
      version: teamInfo.version,
      installedAt: new Date().toISOString(),
      path: destPath
    };

    await fs.writeFile(
      path.join(destPath, 'team.manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log(`✓ Team '${teamInfo.name}' installed successfully at ${destPath}`);
    return manifest;
  }

  async copyDirectory(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  async listInstalledTeams() {
    const teamsPath = path.join(this.targetDir, '.bmad-teams');

    try {
      const teams = await fs.readdir(teamsPath);
      const installed = [];

      for (const team of teams) {
        const manifestPath = path.join(teamsPath, team, 'team.manifest.json');
        try {
          const content = await fs.readFile(manifestPath, 'utf8');
          installed.push(JSON.parse(content));
        } catch {
          // Skip if no manifest
        }
      }

      return installed;
    } catch {
      return [];
    }
  }

  async removeTeam(teamId) {
    const teamPath = path.join(this.targetDir, '.bmad-teams', teamId);

    try {
      await fs.rm(teamPath, { recursive: true });
      console.log(`✓ Team '${teamId}' removed successfully`);
      return true;
    } catch (error) {
      console.error(`Failed to remove team '${teamId}': ${error.message}`);
      return false;
    }
  }
}

module.exports = TeamInstaller;