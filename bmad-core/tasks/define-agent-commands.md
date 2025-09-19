# Define Agent Commands Task

## Task Metadata
```yaml
name: define-agent-commands
description: Design the command structure for an agent
elicit: true
category: agent-creation
complexity: medium
```

## Purpose
Create a comprehensive, intuitive command set that enables users to access all agent capabilities effectively.

## Process

### Step 1: Core Capabilities Analysis
**ASK:** "What are the main things this agent should be able to do?
List 5-10 core capabilities or actions."

**CATEGORIZE capabilities into:**
- Creation tasks (generate, create, build)
- Analysis tasks (analyze, review, evaluate)
- Modification tasks (update, refine, optimize)
- Utility tasks (help, configure, export)
- Navigation tasks (list, search, find)

### Step 2: Command Naming
**For each capability, CREATE command names that are:**
- Short and memorable (1-2 words)
- Action-oriented (verb or verb-noun)
- Consistent with BMAD patterns
- Intuitive for the domain

**FOLLOW naming patterns:**
- `create-[thing]` for generation
- `analyze-[thing]` for analysis
- `update-[thing]` for modification
- `list-[things]` for discovery
- `execute-[process]` for workflows

### Step 3: Command Descriptions
**For each command, WRITE:**
- Clear one-line description
- What it does (not how)
- Expected outcome
- Any parameters needed

**Format:**
```yaml
- command-name: Brief description of what command does
- command-with-param {param}: Description mentioning parameter usage
```

### Step 4: Standard Commands
**INCLUDE these standard commands:**
```yaml
commands:
  - help: Show numbered list of available commands
  - doc-out: Output current document to destination
  - exit: Leave this agent persona
```

**ADD if applicable:**
```yaml
  - yolo: Toggle Yolo Mode (skip confirmations)
  - execute-checklist {checklist}: Run specified checklist
  - research {topic}: Deep dive into specific topic
```

### Step 5: Command Dependencies
**For each command, IDENTIFY:**
- Does it need a task? → Create task name
- Does it need a template? → Specify template
- Does it need a checklist? → Define checklist
- Does it need data? → List knowledge files

**MAP commands to dependencies:**
```
Command: create-report
Needs:
  - Task: create-doc.md
  - Template: report-tmpl.yaml
  - Checklist: report-quality.md
```

### Step 6: Parameter Design
**For commands with parameters:**
- Define parameter name in {brackets}
- Specify if required or optional
- Provide default values
- Document parameter options

**Examples:**
```yaml
- analyze {file}: Analyze specified file (default: current)
- create-doc {type}: Create document (types: report|proposal|guide)
- export {format}: Export in format (json|yaml|markdown)
```

### Step 7: Command Grouping
**ORGANIZE commands logically:**
```yaml
# Creation Commands
- create-agent: Build new agent
- create-template: Design template
- generate-workflow: Create workflow

# Analysis Commands
- analyze-domain: Examine domain
- review-code: Review code quality
- validate-syntax: Check syntax

# Utility Commands
- help: Show commands
- doc-out: Output document
- exit: Leave persona
```

### Step 8: Command Validation
**CHECK:**
- [ ] No duplicate command names
- [ ] All commands have descriptions
- [ ] Parameters are clearly defined
- [ ] Dependencies are mapped
- [ ] Standard commands included
- [ ] Commands cover all capabilities
- [ ] Naming is consistent
- [ ] Total count is manageable (10-20)

### Step 9: Generate Command Block
**OUTPUT:**
```yaml
commands:
  # Core Functionality
  - [primary-command-1]: [Description]
  - [primary-command-2]: [Description]
  - [primary-command-3]: [Description]

  # Secondary Features
  - [secondary-command-1]: [Description]
  - [secondary-command-2]: [Description]

  # Utility Commands
  - help: Show numbered list of available commands
  - doc-out: Output document to destination
  - exit: Say goodbye and leave persona
```

## Success Criteria
- Commands are intuitive and discoverable
- Complete coverage of agent capabilities
- Clear, consistent naming patterns
- Appropriate parameter design
- No overlapping functionality
- Easy to remember and use

## Command Pattern Examples

### CRUD Pattern
```yaml
- create-[item]: Create new [item]
- read-[item]: View [item] details
- update-[item]: Modify [item]
- delete-[item]: Remove [item]
- list-[items]: Show all [items]
```

### Workflow Pattern
```yaml
- start-[process]: Begin [process]
- continue-[process]: Resume [process]
- review-[process]: Check [process] status
- complete-[process]: Finish [process]
```

### Analysis Pattern
```yaml
- analyze-[subject]: Examine [subject]
- compare-[items]: Compare [items]
- evaluate-[thing]: Assess [thing]
- report-[findings]: Generate report
```

## Tips
- Keep commands short (max 3 words)
- Use consistent verb patterns
- Avoid abbreviations
- Include both simple and advanced commands
- Test command names for clarity
- Consider command aliases for common variations