# Team Readiness Checklist

## Purpose
Ensure a team is complete, well-structured, and ready for deployment.

## Team Configuration ⚙️

### Team Metadata
- [ ] Team has unique ID (lowercase-hyphenated)
- [ ] Team name is descriptive
- [ ] Version number assigned (semantic versioning)
- [ ] Category appropriately assigned
- [ ] Icon emoji selected
- [ ] Description clearly explains team purpose
- [ ] Author information included
- [ ] Slash prefix defined (unique, 2-4 chars)

### Team Files
- [ ] config.yaml present and valid
- [ ] team-bundle.yaml properly configured
- [ ] README.md documentation created
- [ ] All required directories exist (agents, workflows, etc.)

## Agent Composition 🤖

### Agent Coverage
- [ ] Minimum 2 agents defined
- [ ] Maximum 10 agents (manageable size)
- [ ] Each agent has unique role
- [ ] No significant capability gaps
- [ ] No major role overlaps
- [ ] Clear leader/coordinator identified (if needed)

### Agent Quality
- [ ] All agents validated individually
- [ ] Each agent has complete persona
- [ ] All agents have sufficient commands (5+)
- [ ] Dependencies mapped for each agent
- [ ] Inter-agent handoffs defined

### Agent Diversity
- [ ] Mix of role types (creator, analyzer, manager)
- [ ] Complementary skill sets
- [ ] Balanced workload distribution
- [ ] Clear expertise boundaries

## Workflows 🔄

### Workflow Coverage
- [ ] At least 1 primary workflow defined
- [ ] Workflows cover main team use cases
- [ ] Each agent participates in at least one workflow
- [ ] Start-to-finish processes complete

### Workflow Structure
- [ ] All workflows have clear phases
- [ ] Each phase has defined steps
- [ ] Agent assignments are specific
- [ ] Deliverables clearly specified
- [ ] Handoffs well-defined

### Workflow Validation
- [ ] No circular dependencies
- [ ] No orphaned steps
- [ ] Realistic timeframes
- [ ] Error handling considered
- [ ] Parallel vs sequential steps defined

## Resources 📚

### Templates
- [ ] Common templates shared across team
- [ ] Template formats consistent
- [ ] Variables/placeholders defined
- [ ] Reusable components identified

### Tasks
- [ ] Shared tasks identified
- [ ] No duplicate task definitions
- [ ] Tasks follow naming conventions
- [ ] Interactive tasks marked (elicit: true)

### Checklists
- [ ] Team-level quality checks defined
- [ ] Individual agent checklists present
- [ ] Validation criteria clear
- [ ] Scoring/pass criteria specified

### Knowledge Base
- [ ] Domain knowledge documented
- [ ] Best practices included
- [ ] Reference materials organized
- [ ] Glossary/terminology defined

## Integration 🔗

### Internal Cohesion
- [ ] Agents reference each other appropriately
- [ ] Shared vocabulary established
- [ ] Communication patterns defined
- [ ] Collaboration points identified

### External Interfaces
- [ ] Team interfaces documented
- [ ] Input requirements specified
- [ ] Output formats defined
- [ ] Integration points clear

### Dependencies
- [ ] External team dependencies identified
- [ ] Tool requirements documented
- [ ] Platform requirements specified
- [ ] Version compatibility noted

## Documentation 📖

### Team Documentation
- [ ] README explains team purpose
- [ ] Quick start guide included
- [ ] Use case examples provided
- [ ] Command reference complete

### Agent Documentation
- [ ] Each agent has description
- [ ] Activation instructions clear
- [ ] Command help available
- [ ] Example interactions provided

### Workflow Documentation
- [ ] Workflow diagrams created (if complex)
- [ ] Phase descriptions complete
- [ ] Success criteria defined
- [ ] Troubleshooting guide included

## Testing & Validation ✅

### Functional Testing
- [ ] Each agent activates successfully
- [ ] All commands execute properly
- [ ] Workflows complete end-to-end
- [ ] Handoffs work smoothly

### Integration Testing
- [ ] Agents collaborate effectively
- [ ] Workflows produce expected outputs
- [ ] Error cases handled gracefully
- [ ] Performance acceptable

### User Testing
- [ ] Team solves intended problems
- [ ] User experience is smooth
- [ ] Documentation is helpful
- [ ] Feedback incorporated

## Quality Metrics 📊

### Completeness
- [ ] All planned features implemented
- [ ] No missing capabilities
- [ ] Edge cases considered
- [ ] Future expansion possible

### Efficiency
- [ ] Minimal redundancy
- [ ] Optimal agent count
- [ ] Streamlined workflows
- [ ] Quick task completion

### Maintainability
- [ ] Clear code organization
- [ ] Consistent naming
- [ ] Modular design
- [ ] Easy to update

## Deployment Readiness 🚀

### Package Preparation
- [ ] Version number updated
- [ ] Change log updated
- [ ] Dependencies listed
- [ ] Installation instructions clear

### Registry Entry
- [ ] Team registered in teams-registry.json
- [ ] Install command specified
- [ ] Category appropriate
- [ ] Description accurate

### Distribution
- [ ] Build process tested
- [ ] Bundle generates correctly
- [ ] Flattened version created
- [ ] No broken references

## Final Review ✨

### Business Value
- [ ] Team serves clear purpose
- [ ] Adds unique value
- [ ] Target users identified
- [ ] Success metrics defined

### Technical Quality
- [ ] Follows BMAD standards
- [ ] Code quality high
- [ ] Performance optimized
- [ ] Security considered

### User Experience
- [ ] Intuitive to use
- [ ] Good error messages
- [ ] Helpful guidance
- [ ] Smooth workflows

---

**Score:** ___/75 checks passed

**Readiness Level:**
- ⬜ Draft (< 40 checks)
- ⬜ Alpha (40-55 checks)
- ⬜ Beta (56-70 checks)
- ⬜ Production (71+ checks)

**Sign-off:**
- Technical Review: ________
- User Testing: ________
- Approval: ________

**Notes:**
_Add specific observations or required improvements_