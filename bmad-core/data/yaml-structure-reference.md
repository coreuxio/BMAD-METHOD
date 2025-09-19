# YAML Structure Reference

## YAML Basics

### Key-Value Pairs
```yaml
key: value
name: "Agent Name"
version: 1.0.0
enabled: true
```

### Lists
```yaml
# Block style
items:
  - item1
  - item2
  - item3

# Inline style
items: [item1, item2, item3]
```

### Nested Structures
```yaml
agent:
  name: "Agent Name"
  properties:
    level: expert
    domain: technology
```

### Multi-line Strings
```yaml
# Literal style (preserves newlines)
description: |
  This is a multi-line
  description that preserves
  line breaks exactly.

# Folded style (removes newlines)
description: >
  This is a multi-line
  description that will be
  folded into a single line.
```

## Agent YAML Structure

### Complete Agent Template
```yaml
# File header
IDE-FILE-RESOLUTION:
  - Description of file resolution rules

REQUEST-RESOLUTION: Description of request matching

activation-instructions:
  - STEP 1: Read entire file
  - STEP 2: Adopt persona
  - STEP 3: Load config
  - STEP 4: Greet and help

agent:
  name: Display Name
  id: agent-id
  title: Professional Title
  icon: 🎯
  whenToUse: When to use this agent
  customization: |
    Optional custom instructions

persona:
  role: Role description
  style: Communication style
  identity: Unique identity
  focus: Focus areas
  core_principles:
    - Principle 1
    - Principle 2
  expertise:
    - Expertise area 1
    - Expertise area 2

commands:
  - help: Show commands
  - command-name: Description
  - exit: Leave persona

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

## Workflow YAML Structure

```yaml
name: Workflow Name
description: Workflow description
version: 1.0.0

phases:
  - name: Phase Name
    description: Phase description
    steps:
      - agent: agent-id
        action: What agent does
        deliverable: What is produced
        dependencies: [optional]
        parallel: true  # optional

  - name: Next Phase
    steps:
      - agent: another-agent
        action: Their action
        deliverable: Their output

success_criteria:
  - Criterion 1
  - Criterion 2

error_handling:
  on_failure: rollback
  max_retries: 3
```

## Team Configuration YAML

```yaml
name: team-name
version: 1.0.0
short-title: Team Name
description: >-
  Team description that can
  span multiple lines.
author: Author Name
slashPrefix: cmd
dependencies:
  - other-team-1
  - other-team-2
```

## Common YAML Patterns

### Conditional Structures
```yaml
condition:
  if: condition_check
  then: action_if_true
  else: action_if_false
```

### Reference Values
```yaml
defaults: &defaults
  timeout: 30
  retries: 3

service1:
  <<: *defaults
  name: Service One

service2:
  <<: *defaults
  name: Service Two
```

### Environment Variables
```yaml
database:
  host: ${DB_HOST}
  port: ${DB_PORT:-5432}  # with default
```

## YAML Validation Rules

### Indentation
- Use spaces, not tabs
- Consistent spacing (2 or 4 spaces)
- Align list items

### Special Characters
```yaml
# Quotes needed for these
needs_quotes: "value: with: colons"
needs_quotes: "@special"
needs_quotes: "Line with
  actual newline"

# These are fine without quotes
no_quotes: regular-value
no_quotes: value_with_underscore
```

### Boolean Values
```yaml
# All valid boolean representations
boolean_true: true
boolean_true: True
boolean_true: TRUE
boolean_true: yes
boolean_true: on

boolean_false: false
boolean_false: False
boolean_false: FALSE
boolean_false: no
boolean_false: off
```

### Null Values
```yaml
null_value: null
null_value: Null
null_value: NULL
null_value: ~
null_value:  # empty value
```

## Common YAML Errors

### Error: Incorrect Indentation
```yaml
# Wrong
agent:
name: Agent Name  # Not indented

# Correct
agent:
  name: Agent Name
```

### Error: Missing Colon
```yaml
# Wrong
agent Agent Name

# Correct
agent: Agent Name
```

### Error: Tab Characters
```yaml
# Wrong (using tabs)
agent:
	name: Agent Name

# Correct (using spaces)
agent:
  name: Agent Name
```

### Error: Unquoted Special Characters
```yaml
# Wrong
description: This: causes: problems

# Correct
description: "This: causes: problems"
```

## Best Practices

1. **Use consistent indentation** (2 or 4 spaces)
2. **Quote strings with special characters**
3. **Use literal style (|) for formatted text**
4. **Use folded style (>) for paragraphs**
5. **Keep lines under 80 characters**
6. **Add comments for complex structures**
7. **Validate YAML before use**
8. **Use meaningful key names**
9. **Group related items**
10. **Avoid deep nesting (max 4 levels)**