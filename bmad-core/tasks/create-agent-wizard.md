# Create Agent Wizard Task

## Task Metadata
```yaml
name: create-agent-wizard
description: Interactive wizard to create a complete BMAD agent
elicit: true
category: agent-creation
complexity: high
```

## Purpose
Guide users through creating a complete, well-structured BMAD agent with all necessary components.

## Process

### Step 1: Agent Basics
**ASK:** "Let's create a new agent! First, tell me:
1. What is the agent's primary purpose? (e.g., 'manage social media', 'analyze data')
2. What should we call this agent? (display name)
3. What emoji best represents this agent? 🎯"

**CAPTURE:**
- Purpose → determine domain and role
- Name → agent.name
- Emoji → agent.icon
- Generate agent.id from name (lowercase, hyphenated)

### Step 2: Persona Development
**ASK:** "Now let's develop the personality. Describe:
1. What expertise should this agent have?
2. How should it communicate? (formal, friendly, analytical, creative)
3. What are its core principles or values?"

**BUILD:**
- persona.role from expertise
- persona.style from communication preference
- persona.core_principles from values
- persona.identity combining purpose and expertise

### Step 3: Capabilities & Commands
**ASK:** "What specific actions should this agent perform? List the main tasks it should handle."

**GENERATE:**
For each capability mentioned:
- Create a command with clear description
- Identify if it needs a task, template, or both
- Add standard commands (help, doc-out, exit)
- Suggest additional relevant commands based on domain

### Step 4: Dependencies Mapping
**ANALYZE** the commands and capabilities to determine:
- Required tasks (create stubs if needed)
- Required templates (use existing or create new)
- Relevant checklists for quality assurance
- Knowledge base documents needed

**ASK:** "Should this agent:
1. Create documents? (Y/N)
2. Perform analysis? (Y/N)
3. Manage workflows? (Y/N)
4. Interact with other agents? (Y/N)"

Based on answers, add appropriate dependencies.

### Step 5: Team Integration
**ASK:** "Is this agent part of a team? If yes:
1. Which team? (or 'new' to create one)
2. Which agents does it collaborate with?
3. What workflows does it participate in?"

**CONFIGURE:**
- Team membership
- Collaboration patterns
- Workflow integration

### Step 6: Quality & Validation
**RUN CHECKS:**
- Validate YAML structure
- Check for command conflicts
- Verify dependency availability
- Ensure naming conventions
- Review completeness

**SHOW:** Preview of the complete agent definition

### Step 7: Customization
**ASK:** "Would you like to:
1. Add custom knowledge or rules?
2. Define special behaviors?
3. Add more commands?
4. Modify the persona?
Type number to modify, or 'done' to finish."

**APPLY** any requested modifications.

### Step 8: Generation
**CREATE:**
1. Generate complete agent.md file
2. Create stub files for any missing dependencies
3. Update team configuration if applicable
4. Generate README documentation

**OUTPUT:**
```
✅ Agent Created Successfully!

Agent: [Name] ([id])
Location: [filepath]
Commands: [count] commands defined
Dependencies: [X] tasks, [Y] templates, [Z] checklists

Next steps:
1. Review the generated agent at [filepath]
2. Implement any stub tasks/templates created
3. Test with: *agent [agent-id]
4. Add to team with: *add-agent-to-team

Need to modify? Run: *analyze-agent [agent-id]
```

## Templates Used
- agent-definition-tmpl.yaml (for complex agents)
- agent-simple-tmpl.yaml (for basic agents)

## Success Criteria
- Valid YAML structure
- Complete persona definition
- At least 3 meaningful commands
- All dependencies mapped
- Documentation generated

## Notes
- Always create backup before modifying existing agents
- Suggest best practices during creation
- Offer examples from similar agents
- Validate against BMAD standards