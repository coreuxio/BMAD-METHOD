# Agent Quality Checklist

## Purpose
Comprehensive checklist to ensure agents meet BMAD quality standards.

## Structure & Syntax ✅

### YAML Validity
- [ ] YAML structure is valid and parseable
- [ ] Proper indentation (2 spaces)
- [ ] No syntax errors
- [ ] Quotes used correctly for special characters
- [ ] Multi-line strings properly formatted with |

### File Structure
- [ ] Starts with `<!-- Powered by BMAD™ Core -->`
- [ ] Contains ACTIVATION-NOTICE section
- [ ] Has COMPLETE AGENT DEFINITION section
- [ ] YAML block properly enclosed in ```yaml tags
- [ ] IDE-FILE-RESOLUTION section present
- [ ] REQUEST-RESOLUTION section defined

## Agent Configuration ⚙️

### Required Fields
- [ ] agent.name defined
- [ ] agent.id defined (lowercase, hyphenated)
- [ ] agent.title defined
- [ ] agent.icon defined (single emoji)
- [ ] agent.whenToUse clearly describes use cases
- [ ] activation-instructions complete and clear

### Persona Definition
- [ ] persona.role clearly defined
- [ ] persona.style describes communication approach
- [ ] persona.identity expresses unique value
- [ ] persona.focus identifies key areas
- [ ] persona.core_principles has 3+ principles
- [ ] Persona is consistent and cohesive

## Commands 🎮

### Command Structure
- [ ] help command included
- [ ] exit command included
- [ ] At least 3 domain-specific commands
- [ ] Commands have clear descriptions
- [ ] Commands use * prefix convention
- [ ] No command name conflicts
- [ ] Commands map to real capabilities

### Command Types
- [ ] Document creation commands (if applicable)
- [ ] Analysis/research commands (if applicable)
- [ ] Workflow execution commands (if applicable)
- [ ] Utility commands (doc-out, yolo, etc.)

## Dependencies 📦

### Task Dependencies
- [ ] All referenced tasks exist or are marked for creation
- [ ] Tasks match command requirements
- [ ] Task names follow convention (verb-noun.md)
- [ ] No orphaned task references

### Template Dependencies
- [ ] Templates exist for document creation commands
- [ ] Template names follow convention
- [ ] Templates appropriate for agent domain
- [ ] No missing template references

### Checklist Dependencies
- [ ] At least one domain checklist included
- [ ] Checklists relevant to agent role
- [ ] execute-checklist command configured

### Data Dependencies
- [ ] Knowledge base documents identified
- [ ] Reference guides included if needed
- [ ] Best practices documented

## Quality & Usability 🌟

### Documentation
- [ ] Agent purpose is immediately clear
- [ ] Use cases well documented
- [ ] Commands are self-explanatory
- [ ] Collaboration patterns defined (if team agent)

### User Experience
- [ ] Activation greeting is welcoming
- [ ] Help command provides clear guidance
- [ ] Error handling considered
- [ ] Progressive disclosure of complexity

### Best Practices
- [ ] Follows BMAD naming conventions
- [ ] No duplicate functionality with existing agents
- [ ] Clear separation of concerns
- [ ] Modular and maintainable design

## Integration 🔗

### Team Integration (if applicable)
- [ ] Team membership defined
- [ ] Collaboration with other agents documented
- [ ] Workflow participation clear
- [ ] No role overlap with team members

### System Compatibility
- [ ] Compatible with current BMAD version
- [ ] Uses standard file paths
- [ ] Follows security best practices
- [ ] No hardcoded paths or credentials

## Testing 🧪

### Functional Testing
- [ ] Agent activates successfully
- [ ] All commands execute without errors
- [ ] Dependencies load correctly
- [ ] Help command displays all options

### Validation Testing
- [ ] Tested with sample user requests
- [ ] Edge cases considered
- [ ] Error messages are helpful
- [ ] Graceful degradation for missing dependencies

## Documentation 📚

### README Requirements
- [ ] README.md created for agent
- [ ] Installation instructions provided
- [ ] Usage examples included
- [ ] Command reference complete

### Maintenance Documentation
- [ ] Version number assigned
- [ ] Author information included
- [ ] Change log started
- [ ] Known issues documented

## Final Review ✨

### Overall Assessment
- [ ] Agent serves a clear, unique purpose
- [ ] Adds value to BMAD ecosystem
- [ ] Professional and polished
- [ ] Ready for production use

### Sign-off
- [ ] Technical review completed
- [ ] User testing performed
- [ ] Documentation reviewed
- [ ] Approved for release

---

**Score:** ___/50 checks passed

**Status:**
- ⬜ Draft
- ⬜ Review
- ⬜ Approved
- ⬜ Released

**Notes:**
_Add any specific observations or recommendations here_