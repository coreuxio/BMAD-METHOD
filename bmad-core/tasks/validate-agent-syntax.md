# Validate Agent Syntax Task

## Task Metadata
```yaml
name: validate-agent-syntax
description: Validate YAML syntax and BMAD structure compliance
elicit: false
category: agent-validation
complexity: medium
```

## Purpose
Ensure agent definition files are syntactically correct and follow BMAD structural requirements.

## Process

### Step 1: YAML Syntax Validation
**CHECK basic YAML syntax:**
```yaml
Validation Points:
- [ ] Valid YAML structure (no syntax errors)
- [ ] Proper indentation (2 spaces)
- [ ] Correct use of quotes for special characters
- [ ] Multi-line strings use | or > correctly
- [ ] No tab characters (spaces only)
- [ ] Lists properly formatted with -
- [ ] Key-value pairs properly formatted
```

**Common YAML errors to check:**
- Missing colons after keys
- Incorrect indentation levels
- Unquoted special characters (:, @, *, &)
- Malformed lists
- Invalid multi-line strings

### Step 2: File Structure Validation
**VERIFY required sections:**
```yaml
Required Structure:
- [ ] Starts with <!-- Powered by BMAD™ Core -->
- [ ] Has # [agent-id] header
- [ ] Contains ACTIVATION-NOTICE section
- [ ] Contains CRITICAL: instruction
- [ ] Has ```yaml code block
- [ ] Code block properly closed with ```
```

### Step 3: Agent Configuration Validation
**CHECK agent block:**
```yaml
agent:
  - [ ] name: exists and is string
  - [ ] id: exists and is lowercase-hyphenated
  - [ ] title: exists and is string
  - [ ] icon: exists and is single emoji
  - [ ] whenToUse: exists and is descriptive
  - [ ] customization: optional but if present, is string
```

**Validation rules:**
- `id` must match filename (without .md)
- `id` must be lowercase with hyphens only
- `icon` must be exactly one emoji character
- `whenToUse` must be at least 10 characters

### Step 4: Activation Instructions Validation
**VERIFY activation-instructions:**
```yaml
Required Elements:
- [ ] STEP 1: Read entire file instruction
- [ ] STEP 2: Adopt persona instruction
- [ ] STEP 3: Load core-config instruction
- [ ] STEP 4: Greet and help instruction
- [ ] DO NOT: warning about loading other agents
- [ ] STAY IN CHARACTER directive
```

### Step 5: Persona Validation
**CHECK persona block:**
```yaml
persona:
  - [ ] role: exists and describes role
  - [ ] style: exists and lists traits
  - [ ] identity: exists and is unique
  - [ ] focus: exists and defines areas
  - [ ] core_principles: exists as list with 2+ items

Optional but recommended:
  - [ ] expertise: list of skills
  - [ ] approach: description of methodology
  - [ ] personality: detailed traits
```

### Step 6: Commands Validation
**VERIFY commands structure:**
```yaml
Command Requirements:
- [ ] commands: exists as list
- [ ] help: command exists
- [ ] exit: command exists
- [ ] Each command has description
- [ ] Command names are lowercase-hyphenated
- [ ] No duplicate command names
- [ ] Parameters use {param} format
```

**Command format check:**
```yaml
Valid formats:
- command-name: Description text
- command {param}: Description with parameter
- command {param1} {param2}: Multiple parameters
```

### Step 7: Dependencies Validation
**CHECK dependencies block:**
```yaml
dependencies:
  tasks: (optional)
    - [ ] List of .md files
    - [ ] Files follow naming convention

  templates: (optional)
    - [ ] List of .yaml or .md files
    - [ ] Follow naming patterns

  checklists: (optional)
    - [ ] List of .md files
    - [ ] Descriptive names

  data: (optional)
    - [ ] List of .md files
    - [ ] Knowledge base files
```

**Naming conventions:**
- Tasks: verb-noun.md (create-doc.md)
- Templates: purpose-tmpl.yaml (report-tmpl.yaml)
- Checklists: aspect-checklist.md (quality-checklist.md)
- Data: topic.md or topic-guide.md

### Step 8: Cross-Reference Validation
**VERIFY consistency:**
- [ ] Commands match their dependency requirements
- [ ] All referenced files in dependencies exist or are marked for creation
- [ ] No orphaned dependencies
- [ ] Slash prefix matches team/agent context

### Step 9: Special Sections Validation
**CHECK optional sections:**
```yaml
IDE-FILE-RESOLUTION:
  - [ ] If present, follows correct format
  - [ ] Path mappings are valid

REQUEST-RESOLUTION:
  - [ ] If present, describes matching rules
  - [ ] Examples provided if complex
```

### Step 10: Generate Validation Report
**OUTPUT:**
```
AGENT VALIDATION REPORT
======================
Agent: [agent-name] ([agent-id])
File: [filepath]

SYNTAX VALIDATION
✅ YAML Syntax: VALID
✅ File Structure: VALID
✅ Required Sections: COMPLETE

CONFIGURATION VALIDATION
✅ Agent Block: VALID
✅ Persona Block: VALID
✅ Commands: VALID (X commands)
✅ Dependencies: VALID (X tasks, Y templates, Z checklists)

WARNINGS
⚠️ [Any warnings about best practices]

ERRORS
❌ [Any critical errors that must be fixed]

RECOMMENDATIONS
- [Suggestions for improvement]

OVERALL STATUS: [PASS|FAIL]
Score: XX/100
```

## Error Messages

### Critical Errors
- "ERROR: Invalid YAML syntax at line X"
- "ERROR: Missing required section: [section]"
- "ERROR: Agent ID doesn't match filename"
- "ERROR: No help command defined"

### Warnings
- "WARNING: No core_principles defined"
- "WARNING: Less than 5 commands defined"
- "WARNING: No dependencies specified"
- "WARNING: Customization field empty"

### Info Messages
- "INFO: Consider adding expertise section"
- "INFO: Template naming could be improved"
- "INFO: Additional standard commands available"

## Success Criteria
- Zero critical errors
- All required fields present
- Valid YAML syntax throughout
- Consistent naming conventions
- Complete dependency mapping

## Validation Scoring
```
Syntax: 30 points
- Valid YAML: 15
- Proper structure: 15

Configuration: 40 points
- Agent block: 10
- Persona block: 15
- Commands: 10
- Dependencies: 5

Best Practices: 30 points
- Naming conventions: 10
- Completeness: 10
- Documentation: 10

Total: 100 points
Pass threshold: 80 points
```