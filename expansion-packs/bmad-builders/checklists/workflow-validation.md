# Workflow Validation Checklist

## Purpose
Validate that workflows are complete, logical, and executable.

## Workflow Structure 🏗️

### Basic Configuration
- [ ] Workflow has unique name
- [ ] Description clearly explains purpose
- [ ] Version number assigned
- [ ] YAML syntax is valid
- [ ] Proper indentation throughout

### File Organization
- [ ] Stored in correct directory (/workflows/)
- [ ] Filename matches workflow name
- [ ] Uses .yaml extension
- [ ] Follows naming convention (process-type.yaml)

## Phases Definition 📊

### Phase Structure
- [ ] At least 2 phases defined
- [ ] Maximum 10 phases (manageable)
- [ ] Each phase has unique name
- [ ] Each phase has description
- [ ] Phases follow logical sequence

### Phase Naming
- [ ] Names are descriptive
- [ ] Names indicate purpose
- [ ] Consistent naming style
- [ ] No duplicate phase names

## Steps Configuration 👣

### Step Requirements
- [ ] Each phase has at least 1 step
- [ ] Maximum 5 steps per phase (focused)
- [ ] Each step specifies agent
- [ ] Each step defines action
- [ ] Each step lists deliverable

### Step Details
- [ ] Agent assignments valid (agents exist)
- [ ] Actions clearly described
- [ ] Deliverables specific and measurable
- [ ] No orphaned steps
- [ ] Dependencies between steps clear

## Agent Participation 🤝

### Agent Coverage
- [ ] All specified agents exist
- [ ] Agents have required capabilities
- [ ] No agent overloaded
- [ ] Workload balanced
- [ ] Critical agents identified

### Agent Sequencing
- [ ] Logical agent progression
- [ ] Handoffs make sense
- [ ] No unnecessary agent switches
- [ ] Expertise matched to tasks
- [ ] Collaboration points clear

## Flow Logic 🔄

### Workflow Progression
- [ ] Clear start point
- [ ] Defined end state
- [ ] Linear or branching flow clear
- [ ] No circular dependencies
- [ ] No dead ends

### Decision Points
- [ ] Branching logic defined (if any)
- [ ] Conditions specified
- [ ] Alternative paths documented
- [ ] Merge points identified
- [ ] Error paths considered

## Deliverables 📦

### Deliverable Specification
- [ ] All deliverables clearly named
- [ ] Format specified (document, code, report)
- [ ] Size/scope indicated
- [ ] Quality criteria defined
- [ ] Ownership clear

### Deliverable Flow
- [ ] Input/output chain logical
- [ ] Dependencies tracked
- [ ] No missing intermediates
- [ ] Final deliverable(s) identified
- [ ] Artifacts documented

## Time & Resources ⏱️

### Timing Considerations
- [ ] Realistic timeframes
- [ ] Critical path identified
- [ ] Parallel opportunities noted
- [ ] Bottlenecks addressed
- [ ] Buffer time included

### Resource Requirements
- [ ] Agent availability considered
- [ ] Tool requirements listed
- [ ] Data dependencies noted
- [ ] External resources identified
- [ ] Constraints documented

## Quality Gates 🚦

### Validation Points
- [ ] Review steps included
- [ ] Approval points defined
- [ ] Quality checks specified
- [ ] Success criteria clear
- [ ] Failure handling defined

### Checkpoints
- [ ] Progress markers set
- [ ] Milestone deliverables identified
- [ ] Go/no-go decisions marked
- [ ] Rollback points defined
- [ ] Escalation paths clear

## Integration 🔗

### Workflow Interfaces
- [ ] Input requirements specified
- [ ] Trigger conditions defined
- [ ] Output format documented
- [ ] Integration points marked
- [ ] Dependencies listed

### Cross-Workflow Coordination
- [ ] Related workflows identified
- [ ] Handoff points defined
- [ ] Shared resources noted
- [ ] Conflict resolution addressed
- [ ] Synchronization considered

## Error Handling ⚠️

### Failure Scenarios
- [ ] Common failures identified
- [ ] Error recovery defined
- [ ] Rollback procedures documented
- [ ] Escalation triggers set
- [ ] Contingency plans ready

### Exception Paths
- [ ] Alternative flows defined
- [ ] Skip conditions specified
- [ ] Retry logic documented
- [ ] Timeout handling included
- [ ] Manual intervention points

## Documentation 📚

### Workflow Documentation
- [ ] Purpose clearly stated
- [ ] Prerequisites listed
- [ ] Assumptions documented
- [ ] Constraints noted
- [ ] Success metrics defined

### Usage Guide
- [ ] When to use workflow
- [ ] How to initiate
- [ ] Required inputs
- [ ] Expected outputs
- [ ] Example scenarios

## Testing & Validation ✅

### Workflow Testing
- [ ] Happy path tested
- [ ] Error cases tested
- [ ] Edge cases considered
- [ ] Performance acceptable
- [ ] Results reproducible

### Integration Testing
- [ ] Agent handoffs work
- [ ] Deliverables generated
- [ ] Quality gates function
- [ ] End-to-end completion
- [ ] User acceptance done

## Optimization 🚀

### Efficiency Metrics
- [ ] No redundant steps
- [ ] Optimal agent selection
- [ ] Parallel execution maximized
- [ ] Bottlenecks minimized
- [ ] Resource usage efficient

### Continuous Improvement
- [ ] Metrics collection planned
- [ ] Feedback loops defined
- [ ] Optimization opportunities noted
- [ ] Version control setup
- [ ] Update process defined

---

**Score:** ___/90 checks passed

**Validation Status:**
- ⬜ Invalid (< 50 checks)
- ⬜ Draft (50-65 checks)
- ⬜ Review (66-80 checks)
- ⬜ Approved (81+ checks)

**Workflow Classification:**
- ⬜ Simple (2-3 phases, < 10 steps)
- ⬜ Standard (4-6 phases, 10-20 steps)
- ⬜ Complex (7+ phases, 20+ steps)

**Risk Assessment:**
- Low Risk: ⬜
- Medium Risk: ⬜
- High Risk: ⬜

**Approvals:**
- Workflow Designer: ________
- Technical Review: ________
- User Acceptance: ________

**Notes:**
_Specific observations, improvements needed, or special considerations_