# Agent Best Practices

## Design Principles

### 1. Single Responsibility
Each agent should have one clear, primary purpose. Avoid creating "kitchen sink" agents that try to do everything.

### 2. Clear Differentiation
Agents in the same team should have distinct, non-overlapping roles with clear boundaries.

### 3. Consistent Persona
Maintain voice, style, and behavior consistency throughout all interactions.

### 4. Progressive Disclosure
Start with simple capabilities, reveal advanced features as needed.

## Implementation Guidelines

### File Organization
- Use lowercase-hyphenated naming
- Keep related resources together
- Follow BMAD directory structure
- Version control everything

### Command Design
- Use verb-noun pattern
- Keep commands short (1-3 words)
- Provide clear descriptions
- Include examples in help

### Dependency Management
- Minimize dependencies
- Reuse existing resources
- Document all requirements
- Test dependency loading

### Error Handling
- Provide helpful error messages
- Gracefully handle missing resources
- Offer alternative actions
- Log issues for debugging

## Quality Standards

### Testing
- Test all commands
- Validate persona consistency
- Check error scenarios
- Verify integrations

### Documentation
- Clear README files
- Command reference guides
- Usage examples
- Troubleshooting guides

### Performance
- Quick activation time
- Efficient resource loading
- Minimal memory footprint
- Fast command execution

## Common Patterns

### Collaboration
- Define clear handoffs
- Document shared resources
- Establish communication protocols
- Test integration points

### Workflow Integration
- Support standard workflows
- Enable custom workflows
- Document participation
- Define deliverables

## Anti-Patterns to Avoid

1. **Overlapping Responsibilities** - Multiple agents doing the same thing
2. **Weak Personas** - Generic, undefined personalities
3. **Command Overload** - Too many commands (>20)
4. **Hidden Dependencies** - Undocumented requirements
5. **Inconsistent Behavior** - Different responses to similar inputs