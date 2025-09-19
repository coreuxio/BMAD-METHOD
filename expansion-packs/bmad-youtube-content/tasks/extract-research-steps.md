# Extract Research Steps Task

## Purpose
Analyze video chapters, initial draft ideas, and content structure to systematically identify what requires research, fact-checking, or source verification. This task creates a comprehensive research roadmap from existing video content.

## Input Requirements
- Video folder with chapters.md file
- Initial draft content or concept notes
- Existing video plan or outline
- Any preliminary script or content ideas

## Process Steps

### 1. Content Analysis
- **Read all available content files** in the video folder
- **Identify factual claims** made in chapters or draft content
- **Catalog statements** that require verification
- **Note areas** where additional context is needed

### 2. Claim Classification
Categorize identified claims by type:

#### STEM/Science Claims
- Statistical data or research findings
- Scientific processes or mechanisms
- Technical specifications or measurements
- Medical or health-related information
- Environmental data or climate information

#### Historical/Current Events
- Historical facts, dates, or sequences
- Current event details or timelines
- Political information or policy details
- Economic data or market information

#### Expert Opinions/Quotes
- Statements attributed to experts
- Industry insights or professional opinions
- Academic perspectives or theories
- Authoritative viewpoints requiring attribution

#### Comparative Information
- Market comparisons or competitive analysis
- Performance benchmarks or standards
- Best practice examples or case studies
- Cost comparisons or pricing data

### 3. Research Priority Assessment
For each identified claim, assess:
- **Verification Urgency**: Critical facts vs. supporting details
- **Source Availability**: Easy to verify vs. requiring deep research
- **Audience Impact**: Core message support vs. background information
- **Risk Level**: High-stakes claims vs. low-risk statements

### 4. Research Step Extraction
Create specific, actionable research tasks:

#### Primary Research Tasks
- "Verify [specific claim] from [source type]"
- "Find primary source for [statement]"
- "Confirm current accuracy of [data/statistic]"
- "Locate expert quote source for [attribution]"

#### Secondary Research Tasks
- "Find additional context for [topic]"
- "Research alternative perspectives on [subject]"
- "Gather supporting examples for [concept]"
- "Investigate recent developments in [area]"

### 5. Source Strategy Planning
For each research task, suggest:
- **Optimal source types** (academic, government, industry, expert)
- **Search strategies** and keywords
- **Credibility requirements** based on claim importance
- **Backup source options** if primary sources unavailable
- **CRITICAL: Website URL documentation requirements** - Every source MUST include complete website link

## Output Format

### Research Task List
```markdown
## Priority Research Tasks

### Critical Verification (Must Complete)
1. **Task**: Verify [specific claim]
   - **Location**: chapters.md line X / draft section Y
   - **Claim**: "[exact statement requiring verification]"
   - **Source Type Needed**: Academic/Government/Expert/Industry
   - **Search Strategy**: [keywords and approach]
   - **Credibility Level**: High/Medium/Low
   - **Risk Assessment**: [why this matters for video credibility]
   - **MANDATORY: Website URL Required**: Full web address link must be documented for verification

### Supporting Research (Should Complete)
[Similar format for medium-priority tasks]

### Enhancement Research (Nice to Have)
[Similar format for low-priority tasks]
```

### Research Strategy Document
```markdown
## Research Strategy Summary

### Overall Approach
- **Total Claims Identified**: [number]
- **Critical Verification Tasks**: [number]
- **Estimated Research Time**: [hours]
- **Primary Source Requirements**: [count by type]

### Research Phases
1. **Phase 1**: Critical fact verification
2. **Phase 2**: Expert opinion sourcing
3. **Phase 3**: Supporting context research
4. **Phase 4**: Enhancement and depth research

### Resource Requirements
- **Academic Database Access**: Yes/No
- **Expert Interview Needs**: [list if applicable]
- **Specialized Knowledge Areas**: [list]
- **Time-Sensitive Information**: [list urgent research]
```

## Quality Standards

### Thoroughness Criteria
- [ ] All factual claims identified and categorized
- [ ] Research tasks are specific and actionable
- [ ] Priority levels assigned based on video impact
- [ ] Source strategies defined for each task
- [ ] Time estimates provided for research completion
- [ ] **CRITICAL: Website URL requirements specified for every research task**

### Clarity Requirements
- [ ] Each research task clearly states what needs verification
- [ ] Location references allow easy content tracking
- [ ] Success criteria defined (what constitutes verification)
- [ ] Backup plans identified for difficult-to-verify claims
- [ ] **MANDATORY: Website link documentation requirements clearly stated**

## Integration with Video Production

### File Updates Required
- **tasks.md**: Add research tasks to video production tracking
- **ChangeLog.md**: Document research extraction process
- **research-tasks/ folder**: Create individual task files for each research item

### Team Coordination
- **Video Researcher**: Receives prioritized research task list
- **Video Planner**: May need to adjust concept based on research feasibility
- **Script Writer**: Awaits research completion for fact integration

## Success Metrics
- **Completeness**: All verifiable claims identified
- **Actionability**: Each research task can be immediately executed
- **Efficiency**: Research effort focused on high-impact verification
- **Clarity**: No ambiguity about what needs to be researched

## Common Pitfalls to Avoid
- **Over-researching**: Don't create tasks for obviously true or trivial claims
- **Under-specifying**: Ensure tasks are specific enough to execute
- **Missing context**: Include why each claim matters to the video's message
- **Ignoring urgency**: Prioritize research that affects core message credibility

## Example Scenarios

### Scenario 1: Tech Review Video
**Input**: Draft mentions "AI models are 40% more efficient"
**Output**: Research task to verify specific efficiency claims, find primary source for statistic, confirm current accuracy of data

### Scenario 2: Educational Content
**Input**: Chapter explains photosynthesis process
**Output**: Verify scientific accuracy of process description, find authoritative educational source, confirm no recent scientific updates

### Scenario 3: Current Events Discussion
**Input**: References recent policy changes
**Output**: Confirm policy details and dates, find official government source, verify current implementation status

## Templates and Tools
- Use research-doc-tmpl.yaml for organizing findings
- Reference source-evaluation-tmpl.yaml for source assessment
- Apply credibility-assessment-checklist.md for source validation