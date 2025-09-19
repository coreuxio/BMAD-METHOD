# BMAD Agent Patterns

## Common Agent Archetypes

### 1. Analyst Pattern
**Purpose:** Research, data analysis, insights generation

**Characteristics:**
- Deep research capabilities
- Data-driven decision making
- Report generation
- Competitive analysis

**Typical Commands:**
- analyze, research, compare, evaluate, assess
- generate-report, create-analysis, summarize

**Example Agents:**
- Business Analyst
- Data Analyst
- Market Researcher
- Competitive Intelligence

### 2. Creator Pattern
**Purpose:** Content generation, design, creative output

**Characteristics:**
- Creative ideation
- Multiple output formats
- Iterative refinement
- Style adaptation

**Typical Commands:**
- create, generate, design, draft, compose
- refine, iterate, polish, enhance

**Example Agents:**
- Content Writer
- UI Designer
- Story Creator
- Brand Designer

### 3. Manager Pattern
**Purpose:** Coordination, planning, orchestration

**Characteristics:**
- Task delegation
- Timeline management
- Resource allocation
- Progress tracking

**Typical Commands:**
- plan, coordinate, schedule, allocate, track
- delegate, assign, monitor, report

**Example Agents:**
- Project Manager
- Scrum Master
- Campaign Manager
- Team Lead

### 4. Expert Pattern
**Purpose:** Specialized knowledge, consultation, guidance

**Characteristics:**
- Deep domain expertise
- Best practices knowledge
- Problem diagnosis
- Solution recommendation

**Typical Commands:**
- advise, recommend, diagnose, evaluate
- guide, teach, explain, validate

**Example Agents:**
- Technical Architect
- Legal Advisor
- Medical Consultant
- Security Expert

### 5. Operator Pattern
**Purpose:** Execution, implementation, hands-on work

**Characteristics:**
- Task execution
- Tool operation
- Process following
- Quality checking

**Typical Commands:**
- execute, implement, build, deploy, test
- run, operate, maintain, fix

**Example Agents:**
- Developer
- DevOps Engineer
- QA Tester
- System Administrator

## Persona Development Patterns

### Professional Personas

**Formal Professional:**
```yaml
style: Professional, precise, formal, thorough
identity: Subject matter expert with institutional knowledge
focus: Accuracy, compliance, standards adherence
```

**Friendly Expert:**
```yaml
style: Approachable, helpful, patient, encouraging
identity: Knowledgeable guide and mentor
focus: Education, support, empowerment
```

**Analytical Mind:**
```yaml
style: Logical, systematic, data-driven, objective
identity: Research specialist and insight generator
focus: Evidence, patterns, conclusions
```

### Creative Personas

**Creative Visionary:**
```yaml
style: Imaginative, innovative, expressive, inspiring
identity: Creative catalyst and idea generator
focus: Innovation, aesthetics, emotional impact
```

**Strategic Thinker:**
```yaml
style: Holistic, forward-thinking, systematic, pragmatic
identity: Big-picture strategist and planner
focus: Long-term vision, system optimization
```

## Command Design Patterns

### CRUD Pattern
For agents managing resources:
```yaml
commands:
  - create-[resource]: Create new [resource]
  - read-[resource]: View [resource] details
  - update-[resource]: Modify existing [resource]
  - delete-[resource]: Remove [resource]
  - list-[resources]: Show all [resources]
```

### Workflow Pattern
For process-oriented agents:
```yaml
commands:
  - start-[process]: Initialize [process]
  - [step-1]: Execute first step
  - [step-2]: Execute second step
  - review: Review current state
  - complete: Finalize [process]
```

### Analysis Pattern
For research agents:
```yaml
commands:
  - gather-data: Collect information
  - analyze: Process and analyze data
  - compare: Compare alternatives
  - report: Generate findings report
  - recommend: Provide recommendations
```

## Collaboration Patterns

### Sequential Handoff
```yaml
Agent A → completes task → Agent B → continues work → Agent C
```

### Parallel Coordination
```yaml
Agent A ┐
Agent B ├→ Combine outputs → Final result
Agent C ┘
```

### Hub and Spoke
```yaml
      Agent B
         ↑
Agent A ← Hub → Agent C
         ↓
      Agent D
```

### Review and Approval
```yaml
Creator → Reviewer → Approver → Implementation
```

## Anti-Patterns to Avoid

### 1. Kitchen Sink Agent
❌ Trying to do everything
✅ Focus on specific domain

### 2. Overlapping Responsibilities
❌ Multiple agents with same capabilities
✅ Clear separation of concerns

### 3. Weak Persona
❌ Generic, undefined personality
✅ Distinct, memorable character

### 4. Command Overload
❌ 20+ commands in one agent
✅ 5-10 focused commands

### 5. Missing Dependencies
❌ Commands without backing tasks/templates
✅ Complete dependency mapping

## Best Practices

1. **Start Simple:** Begin with core capabilities, expand later
2. **User-Centric:** Design from user needs backward
3. **Clear Purpose:** One sentence should explain the agent
4. **Consistent Voice:** Maintain persona throughout
5. **Modular Design:** Reusable tasks and templates
6. **Progressive Disclosure:** Basic → Advanced features
7. **Error Handling:** Graceful failures with helpful messages
8. **Documentation:** Examples and use cases
9. **Testing Scenarios:** Cover common and edge cases
10. **Version Control:** Track changes and improvements