# BMAD System Architecture Reference

## System Overview

BMAD (Breakthrough Method of Agile AI-driven Development) is a modular framework for creating, managing, and orchestrating AI agents across any domain.

## Core Components

### 1. Agents (`/agents/`)
Individual AI personas with specific expertise and capabilities.

**Structure:**
```
agents/
├── [agent-name].md      # Agent definition file
└── README.md            # Agent documentation
```

**Agent File Format:**
- YAML configuration block
- Activation instructions
- Agent metadata
- Persona definition
- Commands list
- Dependencies mapping

### 2. Tasks (`/tasks/`)
Executable workflows that agents can perform.

**Types:**
- **Simple Tasks:** Single-step operations
- **Complex Tasks:** Multi-step workflows
- **Interactive Tasks:** Require user input (elicit: true)

**Structure:**
```yaml
name: task-name
description: What this task does
elicit: true/false
category: task-category
steps:
  - Step 1 description
  - Step 2 description
```

### 3. Templates (`/templates/`)
Reusable document structures and formats.

**Types:**
- Document templates (YAML/Markdown)
- Configuration templates
- Output format templates

**Usage:**
- Combined with tasks for document creation
- Filled with dynamic content
- Support variable substitution

### 4. Workflows (`/workflows/`)
Multi-agent collaboration sequences.

**Structure:**
```yaml
name: workflow-name
description: Workflow purpose
phases:
  - name: Phase Name
    steps:
      - agent: agent-id
        action: what they do
        deliverable: what they produce
```

### 5. Checklists (`/checklists/`)
Quality assurance and validation tools.

**Purpose:**
- Ensure completeness
- Validate quality
- Guide review processes
- Track requirements

### 6. Data (`/data/`)
Knowledge base and reference materials.

**Contents:**
- Best practices
- Reference guides
- Domain knowledge
- Configuration data
- Patterns and examples

## File Organization

### Standard Directory Structure
```
bmad-core/
├── agents/           # Agent definitions
├── agent-teams/      # Team configurations
├── tasks/           # Executable tasks
├── templates/       # Document templates
├── workflows/       # Multi-agent workflows
├── checklists/      # Quality checklists
├── data/           # Knowledge base
└── core-config.yaml # System configuration
```

### Naming Conventions

**Agents:**
- Lowercase with hyphens: `agent-name.md`
- Descriptive names: `content-writer.md`, `data-analyst.md`

**Tasks:**
- Verb-noun format: `create-document.md`, `analyze-data.md`
- Action-oriented: `validate-input.md`, `generate-report.md`

**Templates:**
- Purpose-suffix: `report-tmpl.yaml`, `analysis-tmpl.md`
- Clear identification: `weekly-report-tmpl.yaml`

**Workflows:**
- Process-type: `content-creation.yaml`, `code-review.yaml`
- Domain-specific: `blog-publishing.yaml`

## Agent YAML Structure

### Complete Agent Definition
```yaml
# Activation and Resolution
IDE-FILE-RESOLUTION: [file mapping rules]
REQUEST-RESOLUTION: [request matching rules]
activation-instructions: [startup sequence]

# Agent Configuration
agent:
  name: Display Name
  id: agent-id
  title: Professional Title
  icon: 📊
  whenToUse: Use case description
  customization: |
    Special instructions or knowledge

# Persona Definition
persona:
  role: Primary role
  style: Communication style
  identity: Unique identity
  focus: Key focus areas
  core_principles:
    - Principle 1
    - Principle 2
  expertise:
    - Skill 1
    - Skill 2

# Commands
commands:
  - help: Show commands
  - command-name: description
  - exit: Leave persona

# Dependencies
dependencies:
  tasks:
    - task-file.md
  templates:
    - template.yaml
  checklists:
    - checklist.md
  data:
    - knowledge.md
```

## Expansion Pack System

### Expansion Pack Structure
```
expansion-packs/
└── bmad-[name]/
    ├── config.yaml         # Pack metadata
    ├── agent-teams/        # Team configurations
    │   └── team.yaml      # Team bundle definition
    ├── agents/            # Pack-specific agents
    ├── workflows/         # Pack workflows
    ├── templates/         # Pack templates
    ├── tasks/             # Pack tasks
    ├── checklists/        # Pack checklists
    └── data/              # Pack knowledge base

```

### Expansion Packs
Expansion packs provide installable teams and specialized functionality:

```yaml
# expansion-packs/bmad-[name]/config.yaml
name: bmad-[name]
version: 1.0.0
short-title: Pack Name
description: Description of the expansion pack
author: Author Name
slashPrefix: prefix
```

Each expansion pack includes:
- `agents/` - Specialized agents
- `tasks/` - Task definitions
- `templates/` - Templates
- `checklists/` - Quality checklists
- `workflows/` - Workflow definitions
- `agent-teams/` - Team bundle configurations

## Configuration Files

### core-config.yaml
System-wide configuration:
```yaml
slashPrefix: BMad
prd:
  prdFile: docs/prd.md
  prdSharded: true
architecture:
  architectureFile: docs/architecture.md
devStoryLocation: docs/stories
```

### Team config.yaml
Team-specific configuration:
```yaml
name: team-name
version: 1.0.0
short-title: Team Title
description: Team description
author: Author Name
slashPrefix: prefix
dependencies: []
```

## Command Patterns

### Standard Commands
Every agent should include:
- `*help` - List available commands
- `*exit` - Leave agent persona
- `*doc-out` - Output current document

### Command Types
1. **Action Commands:** Execute tasks
2. **Creation Commands:** Generate content
3. **Analysis Commands:** Process information
4. **Utility Commands:** Helper functions
5. **Navigation Commands:** Switch contexts

## Integration Points

### Agent Activation
1. User invokes: `*agent [agent-id]`
2. System loads agent file
3. Agent reads core-config.yaml
4. Agent greets and shows help
5. Agent awaits commands

### Task Execution
1. Command triggers task
2. Task loads from dependencies
3. Task may load templates
4. Task executes steps
5. Output delivered to user

### Workflow Orchestration
1. Workflow initiated
2. Phases execute sequentially
3. Agents activated as needed
4. Deliverables passed between agents
5. Final output produced

## Best Practices

### Agent Design
1. Single responsibility principle
2. Clear, unique purpose
3. Well-defined persona
4. Focused command set
5. Complete dependencies

### Task Creation
1. Clear step-by-step instructions
2. Explicit input/output
3. Error handling
4. User interaction points
5. Success criteria

### Template Design
1. Consistent structure
2. Clear placeholders
3. Comprehensive sections
4. Reusable components
5. Version control

### System Maintenance
1. Regular validation
2. Dependency checking
3. Version updates
4. Documentation updates
5. Test coverage

## Version Compatibility

Current Version: 4.x
- YAML-based agents
- Team system support
- Modular architecture
- Expansion pack compatible

Migration from 3.x:
- Update agent format
- Migrate to YAML structure
- Update file paths
- Test thoroughly