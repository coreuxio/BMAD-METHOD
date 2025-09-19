# BMAD Naming Conventions

## File Naming

### Agents
- **Format:** `lowercase-hyphenated.md`
- **Examples:**
  - `content-writer.md`
  - `data-analyst.md`
  - `project-manager.md`
- **Rules:**
  - Use descriptive names
  - Indicate role clearly
  - Keep concise (2-3 words max)

### Tasks
- **Format:** `verb-noun.md`
- **Examples:**
  - `create-document.md`
  - `analyze-data.md`
  - `validate-input.md`
- **Rules:**
  - Start with action verb
  - Be specific about action
  - Use present tense

### Templates
- **Format:** `purpose-tmpl.yaml` or `purpose-tmpl.md`
- **Examples:**
  - `report-tmpl.yaml`
  - `analysis-tmpl.yaml`
  - `feedback-tmpl.md`
- **Rules:**
  - End with `-tmpl`
  - Indicate content type
  - Use appropriate extension

### Checklists
- **Format:** `aspect-checklist.md` or `quality-aspect.md`
- **Examples:**
  - `code-quality-checklist.md`
  - `release-checklist.md`
  - `review-checklist.md`
- **Rules:**
  - Include "checklist" or quality aspect
  - Be specific about focus
  - Use descriptive names

### Workflows
- **Format:** `process-type.yaml`
- **Examples:**
  - `content-creation.yaml`
  - `code-review.yaml`
  - `deployment-process.yaml`
- **Rules:**
  - Describe the process
  - Use noun phrases
  - Keep descriptive

### Data/Knowledge Files
- **Format:** `topic.md` or `topic-guide.md`
- **Examples:**
  - `best-practices.md`
  - `api-reference.md`
  - `style-guide.md`
- **Rules:**
  - Use clear topics
  - Add "-guide" for guides
  - Keep informative

## Command Naming

### Standard Commands
- `help` - Show available commands
- `exit` - Leave agent
- `doc-out` - Output document
- `yolo` - Skip confirmations

### Command Patterns
- **Creation:** `create-[thing]`
- **Analysis:** `analyze-[subject]`
- **Update:** `update-[item]`
- **List:** `list-[items]`
- **Validation:** `validate-[input]`

## Variable Naming

### YAML Keys
- **Format:** `snake_case` or `lowercase-hyphenated`
- **Examples:**
  - `agent_name` or `agent-name`
  - `task_list` or `task-list`
- **Consistency:** Pick one style per file

### Placeholders
- **Format:** `[PLACEHOLDER_NAME]`
- **Examples:**
  - `[Agent Name]`
  - `[User Input]`
  - `[Date]`

## Directory Structure

### Team Directories
- `team-[name]/`
- Examples:
  - `team-builders/`
  - `team-writing-studio/`
  - `team-core-development/`

### Expansion Pack Directories
- `bmad-[domain]/`
- Examples:
  - `bmad-creative-writing/`
  - `bmad-game-dev/`
  - `bmad-infrastructure/`

## ID Conventions

### Agent IDs
- **Format:** `lowercase-hyphenated`
- **Must match:** Filename (without .md)
- **Examples:**
  - ID: `content-writer`
  - File: `content-writer.md`

### Team IDs
- **Format:** `team-name` or `name`
- **Examples:**
  - `builders`
  - `writing-studio`
  - `core-development`

## Version Numbering

### Semantic Versioning
- **Format:** `MAJOR.MINOR.PATCH`
- **Examples:**
  - `1.0.0` - Initial release
  - `1.1.0` - New features
  - `1.0.1` - Bug fixes

## Special Prefixes

### Slash Commands
- **Format:** 2-4 characters
- **Examples:**
  - `dev` - Development team
  - `write` - Writing team
  - `build` - Builder team
- **Rules:**
  - Must be unique
  - Easy to type
  - Memorable

## Case Sensitivity

### General Rules
- Files: lowercase-hyphenated
- IDs: lowercase-hyphenated
- Display Names: Title Case
- Commands: lowercase-hyphenated
- YAML keys: snake_case or hyphenated

## Common Mistakes to Avoid

1. **Spaces in filenames** - Use hyphens instead
2. **Uppercase in IDs** - Keep lowercase
3. **Inconsistent separators** - Pick hyphens or underscores
4. **Generic names** - Be specific
5. **Too long names** - Keep concise