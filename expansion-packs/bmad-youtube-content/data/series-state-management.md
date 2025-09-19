# Series State Management System

## Overview
The video series workflow implements a 4-state progression system that tracks series development from initial concept through completion. This system ensures proper progression gates and maintains organized development workflows.

## State Definitions

### 1. Draft
**Description**: Series created with basic concept, awaiting video list development
- **Entry Criteria**: Series folder created, basic concept defined
- **Required Files**:
  - `/series/{series-title}/data/series-plan.md`
  - `/series/{series-title}/ChangeLog.md`
  - Registry entry in `/series/registry.md`
- **Next States**: ready_for_research
- **Typical Duration**: 1-3 days
- **Key Activities**:
  - Series concept refinement
  - Initial video brainstorming
  - Theme and audience clarification

### 2. Ready for Research
**Description**: Video list approved by user, ready for detailed research planning
- **Entry Criteria**: User approval of video ideas list
- **Required Files**:
  - `approved-video-list.md`
  - Complete series registry entry
  - Initialized changelog with video planning notes
- **Next States**: in_development
- **Typical Duration**: 1-2 weeks
- **Key Activities**:
  - Video prioritization and sequencing
  - Knowledge dependency mapping
  - Execution plan development
  - Resource allocation planning

### 3. In Development
**Description**: Videos being actively researched, scripted, and produced
- **Entry Criteria**: Execution plan approved, first videos in production
- **Required Files**:
  - `execution-plan.md`
  - `knowledge-building-map.md`
  - Individual video folders in `/videos/` subdirectory
- **Next States**: completed, ready_for_research (for expansions)
- **Typical Duration**: Ongoing (months to years)
- **Key Activities**:
  - Individual video production
  - Knowledge building validation
  - Series consistency maintenance
  - Regular progress reviews

### 4. Completed
**Description**: All planned videos in series completed and published
- **Entry Criteria**: All videos in approved list completed
- **Required Files**:
  - All individual video final documents
  - Complete series review document
  - Final changelog with completion summary
- **Next States**: None (terminal state)
- **Post-Completion Options**:
  - Archive series
  - Plan sequel series
  - Extract learnings for future series

## State Transitions

### Draft → Ready for Research
**Trigger**: User approval of video ideas list
**Process**:
1. Video planner presents comprehensive video list
2. User reviews, provides feedback, approves final list
3. System updates registry with approved video count
4. Changelog updated with approval timestamp
5. State automatically transitions

### Ready for Research → In Development
**Trigger**: Execution plan completion and approval
**Process**:
1. Video planner creates execution plan with sequencing
2. Knowledge dependencies mapped and validated
3. Production timeline established
4. First video moves into production
5. State transitions with milestone tracking activated

### In Development → Completed
**Trigger**: All planned videos completed
**Process**:
1. Final video in series completed
2. Series review conducted
3. All knowledge building validated
4. Final changelog entry created
5. Series marked as completed in registry

### In Development → Ready for Research (Expansion)
**Trigger**: Decision to expand series with additional videos
**Process**:
1. New video ideas generated
2. Integration with existing knowledge map
3. User approval for expansion
4. State temporarily returns to ready_for_research
5. New execution plan created for additional videos

## Registry Integration

### Series Registry Fields
```markdown
| Series Title | Start Date | Videos Count | Planned Count | Current State | Last Updated |
|--------------|------------|--------------|---------------|----------------|--------------|
| [Title] | [Date] | [Completed] | [Total Planned] | [State] | [Date] |
```

### State Tracking in Registry
- **Draft**: Shows "0" completed videos, "TBD" planned count
- **Ready for Research**: Shows "0" completed, actual planned count
- **In Development**: Shows progress ratio (e.g., "3/12")
- **Completed**: Shows final count (e.g., "12/12")

## Changelog State Tracking

### State Change Entry Format
```markdown
## [Date] - System Update
### State Change
- Previous State: [previous_state]
- New State: [new_state]
- Trigger: [what caused the transition]
### Files Modified
- [List of files changed during transition]
### Next Steps
- [What happens next in this state]
```

## Quality Gates

### Draft → Ready for Research
- [ ] Minimum 10 video ideas generated
- [ ] User feedback incorporated
- [ ] Knowledge dependencies identified
- [ ] Series theme consistency validated

### Ready for Research → In Development
- [ ] Execution plan complete with timeline
- [ ] Knowledge building sequence optimized
- [ ] First video ready for production
- [ ] Resource allocation confirmed

### In Development → Completed
- [ ] All planned videos completed
- [ ] Knowledge building validated across series
- [ ] Series consistency maintained
- [ ] Final review completed

## Error Recovery

### Stuck in Draft
**Symptoms**: Unable to generate sufficient video ideas
**Solutions**:
- Refine series theme
- Expand target audience analysis
- Research competitor series
- Consult domain experts

### Blocked in Ready for Research
**Symptoms**: Execution plan cannot be finalized
**Solutions**:
- Simplify video sequence
- Reduce initial scope
- Focus on core knowledge path
- Prioritize high-impact videos

### Stalled in Development
**Symptoms**: Video production significantly behind schedule
**Solutions**:
- Reassess resource allocation
- Simplify video complexity
- Focus on essential content
- Consider series restructuring

## Best Practices

### State Management
- Always update registry when state changes
- Document transition reasons in changelog
- Validate quality gates before transitions
- Maintain clear audit trail

### Knowledge Building
- Continuously validate video dependencies
- Update knowledge map as series evolves
- Plan for future expansion during development
- Maintain series consistency throughout

### User Communication
- Regular state updates and progress reports
- Clear expectations for each state duration
- Transparent about blocking issues
- Collaborative decision-making on transitions

## Success Metrics

### Draft State Success
- High-quality video ideas (15+ concepts)
- Clear knowledge progression identified
- User enthusiasm and engagement
- Strong series foundation established

### Ready for Research Success
- Comprehensive execution plan
- Realistic timeline and milestones
- Optimized knowledge building sequence
- Clear production pathway

### In Development Success
- Consistent video quality
- Knowledge building effective
- Timeline adherence
- Series engagement metrics

### Completed State Success
- All planned videos delivered
- Knowledge objectives achieved
- Series coherence maintained
- Positive audience response