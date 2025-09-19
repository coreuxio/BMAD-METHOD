# Map Agent Dependencies Task

## Task Metadata
```yaml
name: map-agent-dependencies
description: Map and create all dependencies needed by an agent
elicit: true
category: agent-creation
complexity: medium
```

## Purpose
Identify, map, and organize all tasks, templates, checklists, and data files that an agent needs to function effectively.

## Process

### Step 1: Analyze Command Requirements
**REVIEW each command and ASK:**
"For the command '[command-name]', what resources does it need?
- Does it create documents? (needs template)
- Does it follow a process? (needs task)
- Does it validate quality? (needs checklist)
- Does it reference knowledge? (needs data)"

**CREATE dependency map:**
```
Command → Dependencies
create-report → task: create-doc.md, template: report-tmpl.yaml
analyze-code → task: code-analysis.md, checklist: code-quality.md
```

### Step 2: Identify Tasks Needed
**For each task requirement:**
- Name the task (verb-noun.md format)
- Define its purpose
- Specify if interactive (elicit: true)
- Categorize complexity

**Common task patterns:**
```yaml
Tasks to create:
- create-doc.md (for document generation)
- execute-checklist.md (for quality checks)
- analyze-data.md (for analysis commands)
- generate-output.md (for exports)
- validate-input.md (for validation)
```

### Step 3: Design Templates
**For each template need:**
- Name the template (purpose-tmpl.yaml)
- Define structure type (YAML/Markdown)
- List required sections
- Specify variables/placeholders

**Template categories:**
```yaml
Document Templates:
- report-tmpl.yaml
- proposal-tmpl.yaml
- analysis-tmpl.yaml

Configuration Templates:
- config-tmpl.yaml
- settings-tmpl.yaml

Output Templates:
- summary-tmpl.md
- results-tmpl.yaml
```

### Step 4: Plan Checklists
**For quality assurance needs:**
- Name the checklist (quality-aspect.md)
- Define validation criteria
- Specify when to use
- Set pass/fail thresholds

**Checklist types:**
```yaml
Quality Checklists:
- input-validation.md
- output-quality.md
- process-completion.md
- review-checklist.md
```

### Step 5: Identify Knowledge Files
**For domain knowledge needs:**
- Reference guides
- Best practices
- Pattern libraries
- Domain glossaries
- Configuration defaults

**Data file categories:**
```yaml
Knowledge Base:
- domain-guide.md
- best-practices.md
- patterns.md
- glossary.md
- examples.md
```

### Step 6: Check Existing Resources
**SEARCH for existing BMAD resources:**
- Check bmad-core/tasks/ for reusable tasks
- Check bmad-core/templates/ for existing templates
- Check bmad-core/checklists/ for standard checklists
- Check bmad-core/data/ for reference materials

**REUSE when possible:**
```yaml
Existing Resources:
- create-doc.md (already exists)
- execute-checklist.md (already exists)
- prd-tmpl.yaml (can adapt)
```

### Step 7: Define New Resources
**For each new resource needed:**

**Tasks:**
```yaml
- Name: [task-name.md]
  Purpose: [What it does]
  Type: [Simple|Complex|Interactive]
  Priority: [High|Medium|Low]
```

**Templates:**
```yaml
- Name: [template-name.yaml]
  Format: [YAML|Markdown]
  Sections: [List main sections]
  Variables: [Dynamic content needed]
```

**Checklists:**
```yaml
- Name: [checklist-name.md]
  Focus: [What it validates]
  Criteria: [Number of checks]
  Scoring: [Pass/fail or points]
```

### Step 8: Organize Dependencies
**GROUP by type:**
```yaml
dependencies:
  tasks:
    - create-doc.md
    - analyze-input.md
    - generate-report.md
    - execute-checklist.md

  templates:
    - report-tmpl.yaml
    - analysis-tmpl.yaml
    - output-tmpl.md

  checklists:
    - quality-checklist.md
    - validation-checklist.md

  data:
    - domain-knowledge.md
    - best-practices.md
    - patterns.md
```

### Step 9: Validate Completeness
**CHECK:**
- [ ] Every command has required dependencies
- [ ] No orphaned dependencies
- [ ] No duplicate resources
- [ ] Naming follows conventions
- [ ] Existing resources identified
- [ ] New resources documented
- [ ] Dependencies are minimal but complete

### Step 10: Generate Dependency Block
**OUTPUT:**
```yaml
dependencies:
  tasks:
    # Core tasks
    - [primary-task-1.md]
    - [primary-task-2.md]
    # Utility tasks
    - create-doc.md
    - execute-checklist.md

  templates:
    # Document templates
    - [template-1.yaml]
    - [template-2.yaml]

  checklists:
    # Quality checks
    - [checklist-1.md]
    - [checklist-2.md]

  data:
    # Knowledge base
    - [knowledge-1.md]
    - [reference-1.md]
```

## Success Criteria
- All commands have necessary dependencies
- No missing resources at runtime
- Efficient reuse of existing resources
- Clear organization and naming
- Minimal but complete set
- Dependencies are discoverable

## Dependency Patterns

### Document Creator Pattern
```yaml
tasks:
  - create-doc.md
templates:
  - document-tmpl.yaml
checklists:
  - document-quality.md
```

### Analyzer Pattern
```yaml
tasks:
  - analyze-data.md
  - generate-insights.md
templates:
  - analysis-tmpl.yaml
  - report-tmpl.yaml
data:
  - analysis-patterns.md
```

### Validator Pattern
```yaml
tasks:
  - validate-input.md
  - execute-checklist.md
checklists:
  - validation-rules.md
  - quality-criteria.md
```

## Tips
- Start with minimum viable dependencies
- Reuse existing resources when possible
- Keep dependencies loosely coupled
- Document resource purpose clearly
- Version dependencies if needed
- Test dependency loading