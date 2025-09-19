# Workflow Patterns

## Common Workflow Structures

### Linear Workflow
```
Phase 1 → Phase 2 → Phase 3 → Complete
```
- Sequential execution
- Clear dependencies
- Simple to understand
- Easy to track progress

### Parallel Workflow
```
     Start
    /  |  \
  P1  P2  P3
    \  |  /
    Combine
       |
    Complete
```
- Concurrent execution
- Faster completion
- Resource intensive
- Requires coordination

### Iterative Workflow
```
Plan → Execute → Review → [Repeat or Done]
```
- Continuous improvement
- Feedback loops
- Flexible duration
- Quality focused

### Branching Workflow
```
Start → Decision → Path A → End
               ↘ Path B → End
```
- Conditional logic
- Multiple outcomes
- Adaptive process
- Complex routing

## Phase Patterns

### Discovery Phase
**Purpose:** Understand requirements
**Typical Steps:**
1. Gather information
2. Analyze needs
3. Define scope
4. Document findings

### Design Phase
**Purpose:** Create solution approach
**Typical Steps:**
1. Generate options
2. Evaluate alternatives
3. Select approach
4. Detail design

### Implementation Phase
**Purpose:** Build solution
**Typical Steps:**
1. Prepare resources
2. Execute build
3. Test components
4. Integrate parts

### Validation Phase
**Purpose:** Ensure quality
**Typical Steps:**
1. Run tests
2. Review results
3. Fix issues
4. Approve release

## Agent Collaboration Patterns

### Producer-Consumer
```
Agent A (produces) → Deliverable → Agent B (consumes)
```

### Peer Review
```
Agent A (creates) ↔ Agent B (reviews)
```

### Coordinator Pattern
```
Coordinator assigns → Agents execute → Coordinator combines
```

### Specialist Consultation
```
Primary Agent → Consult Expert → Continue with advice
```

## Deliverable Patterns

### Progressive Refinement
```
Draft → Review → Revision → Final
```

### Composite Assembly
```
Part A + Part B + Part C = Complete Deliverable
```

### Quality Gates
```
Work → Gate 1 ✓ → Work → Gate 2 ✓ → Release
```

## Error Handling Patterns

### Retry Pattern
```
Try → Fail → Retry (max 3) → Success or Escalate
```

### Fallback Pattern
```
Primary Path → Fail → Fallback Path → Continue
```

### Circuit Breaker
```
Normal → Failures++ → Break → Wait → Test → Resume
```

## Optimization Strategies

### Parallelization
- Identify independent tasks
- Run simultaneously
- Reduce total time
- Monitor resource usage

### Caching
- Store intermediate results
- Reuse common outputs
- Reduce redundant work
- Speed up iterations

### Early Validation
- Check constraints early
- Fail fast
- Save processing time
- Reduce waste

### Progressive Disclosure
- Start simple
- Add complexity as needed
- Reduce cognitive load
- Improve adoption

## Workflow Metrics

### Performance Metrics
- Completion time
- Throughput
- Resource utilization
- Bottleneck identification

### Quality Metrics
- Error rates
- Rework frequency
- Gate pass rates
- Output quality

### Efficiency Metrics
- Steps per outcome
- Agent utilization
- Wait times
- Handoff delays