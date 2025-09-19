# YouTube Video Script Creation Team - Design Document

## Executive Summary

This document outlines the design for a specialized BMAD team focused on creating comprehensive YouTube video scripts with proper research, documentation, and source attribution. The team follows a structured workflow from concept to final deliverables while maintaining flexibility for human creative input.

## Team Purpose & Goals

### Primary Objective
Create high-quality YouTube video scripts with:
- Clear message and narrative structure
- Well-researched facts with proper citations
- Flexible visual suggestions for editors
- Comprehensive supporting documentation
- SEO-optimized descriptions

### Key Principles
1. **Source Integrity**: All STEM/science/technology claims must have verifiable sources
2. **Editorial Flexibility**: Visual suggestions are optional guidance, not prescriptive
3. **Interactive Planning**: User collaboration throughout the creative process
4. **Document Completeness**: Each phase produces a standalone deliverable

## Team Composition

### Agent Roster

#### 1. Video Planner Agent (`video-planner`)
**Role**: Lead Conceptualizer & Message Architect
**Core Responsibilities**:
- Conduct interactive planning sessions with users
- Define core message and supporting narrative points
- Identify key facts needed to support the message
- Create comprehensive video plan document
- Establish tone, style, and target audience
- Define success metrics for the video

**Deliverables**:
- `video-plan.md`: Complete planning document with message, facts, approach

#### 2. Video Researcher Agent (`video-researcher`)
**Role**: Fact-Finder & Source Validator
**Core Responsibilities**:
- Conduct thorough web research on specified topics
- Verify credibility of sources
- Document all sources with proper citations
- Distinguish between factual claims and personal experiences
- Create research summary with key findings
- Flag any controversial or disputed information

**Deliverables**:
- `research-doc.md`: Comprehensive research with citations and summaries

#### 3. Scene Planner Agent (`scene-planner`)
**Role**: Visual Narrative Architect
**Core Responsibilities**:
- Break video concept into logical scene sequence
- Map information and facts to specific scenes
- Suggest visual elements and transitions
- Consider pacing and viewer engagement
- Create detailed scene-by-scene outline
- Include timing estimates for each scene

**Deliverables**:
- `scene-outline.md`: Detailed scene breakdown with information mapping

#### 4. Script Writer Agent (`script-writer`)
**Role**: Copy Writer & Narrative Flow Expert
**Core Responsibilities**:
- Write engaging script for each scene
- Include optional visual suggestions in brackets
- Maintain consistent tone throughout
- Integrate facts naturally with attribution
- Create smooth transitions between scenes
- Add notes for editors where flexibility exists

**Deliverables**:
- `video-script.md`: Complete script with visual notes and editor guidance

#### 5. Video Description Writer Agent (`video-description-writer`)
**Role**: YouTube Optimization Specialist
**Core Responsibilities**:
- Create compelling video description
- Format sources and references properly
- Add timestamp markers for sections
- Include relevant keywords for SEO
- Write engaging hook for description preview
- Add calls-to-action and channel information

**Deliverables**:
- `video-description.md`: Optimized YouTube description with all elements

## Workflow Design

### Main Workflow: `create-video.yaml`

```yaml
name: Create YouTube Video Script
description: End-to-end video script creation with research and documentation
version: 1.0.0

phases:
  - name: Concept Development
    description: Interactive planning to establish video vision
    duration: 30-60 minutes
    steps:
      - agent: video-planner
        action: Conduct interactive planning session with user
        deliverable: video-plan.md
        interaction: high
        requires_user_input: true

  - name: Research Phase
    description: Gather and verify all necessary information
    duration: 60-120 minutes
    steps:
      - agent: video-researcher
        action: Research facts and gather credible sources
        deliverable: research-doc.md
        dependencies: [video-plan.md]
        web_access_required: true

  - name: Scene Planning
    description: Structure the visual and narrative flow
    duration: 30-45 minutes
    steps:
      - agent: scene-planner
        action: Create detailed scene-by-scene breakdown
        deliverable: scene-outline.md
        dependencies: [video-plan.md, research-doc.md]

  - name: Script Writing
    description: Write complete script with all elements
    duration: 60-90 minutes
    steps:
      - agent: script-writer
        action: Write full script with visual notes
        deliverable: video-script.md
        dependencies: [scene-outline.md, research-doc.md]

  - name: Description Creation
    description: Generate YouTube-optimized description
    duration: 20-30 minutes
    steps:
      - agent: video-description-writer
        action: Create comprehensive video description
        deliverable: video-description.md
        dependencies: [video-script.md, research-doc.md]

success_criteria:
  - Complete script with clear narrative flow
  - All factual claims properly sourced
  - Flexible visual guidance provided
  - SEO-optimized description ready
  - All deliverables quality-checked
```

## Document Templates

### 1. Video Plan Template (`video-plan-tmpl.md`)
```markdown
# Video Plan: [Title]

## Core Message
[Primary message to communicate]

## Supporting Facts Needed
1. [Fact category 1]
2. [Fact category 2]
3. [Fact category 3]

## Target Audience
[Demographics and interests]

## Tone & Style
[Formal/Casual, Educational/Entertainment, etc.]

## Success Metrics
- [Metric 1]
- [Metric 2]

## Research Requirements
- [Topic area 1]
- [Topic area 2]

## Special Considerations
[Any specific requirements or constraints]
```

### 2. Research Document Template (`research-doc-tmpl.md`)
```markdown
# Research Document: [Video Title]

## Executive Summary
[Key findings overview]

## Researched Facts

### Fact 1: [Topic]
**Statement**: [Factual claim]
**Source**: [Citation with link]
**Credibility**: [High/Medium/Low + reasoning]
**Usage Notes**: [How this supports the message]

### Fact 2: [Topic]
[Continue pattern...]

## Additional Resources
- [Resource 1]
- [Resource 2]

## Research Gaps
[Any areas where information was insufficient]
```

### 3. Scene Outline Template (`scene-outline-tmpl.md`)
```markdown
# Scene Outline: [Video Title]

## Scene 1: [Scene Name] (Est: XX seconds)
**Purpose**: [What this scene accomplishes]
**Information to Present**:
- [Key point 1]
- [Key point 2]
**Visual Suggestions**: [Optional ideas for visuals]
**Transition**: [How to move to next scene]

## Scene 2: [Scene Name] (Est: XX seconds)
[Continue pattern...]

## Total Estimated Runtime: [X:XX]
```

### 4. Video Script Template (`video-script-tmpl.md`)
```markdown
# Video Script: [Title]

## Scene 1: [Scene Name]

**SCRIPT:**
[Spoken text for this scene, natural and engaging]

**[VISUAL NOTE: Optional suggestion for what could appear on screen]**

**[EDITOR NOTE: Any flexibility or alternatives]**

---

## Scene 2: [Scene Name]

**SCRIPT:**
[Continue with next scene...]

---

## Credits/Outro

**SCRIPT:**
[Closing message]

## Source Attributions in Script
- When mentioning [Fact 1]: "According to [Source]..."
- When mentioning [Fact 2]: "Research from [Source] shows..."
```

### 5. Video Description Template (`video-description-tmpl.md`)
```markdown
# YouTube Video Description: [Title]

## Description Text

[Hook - compelling first 125 characters]

[Extended description - 2-3 paragraphs explaining video content]

## Timestamps
00:00 - Introduction
00:XX - [Section 1]
XX:XX - [Section 2]
[Continue...]

## Sources & References
1. [Source 1 Title] - [URL]
2. [Source 2 Title] - [URL]
[Continue for all sources]

## Links & Resources
- [Relevant link 1]
- [Relevant link 2]

## Connect With Us
[Channel subscription CTA]
[Social media links]
[Patreon/membership if applicable]

## Tags
#[tag1] #[tag2] #[tag3] [relevant hashtags]
```

## Team Configuration Files

### Expansion Pack Config (`config.yaml`)
```yaml
name: bmad-youtube-content
version: 1.0.0
short-title: YouTube Content Team
description: >-
  Specialized team for creating comprehensive YouTube video scripts
  with research, documentation, and proper source attribution.
  Designed for educational and informational content creators.
author: BMAD Team Architect
slashPrefix: yt
dependencies:
  - bmad-core
configuration:
  primary_domain: content-creation
  secondary_domains:
    - research
    - scriptwriting
    - seo-optimization
  target_users:
    - youtube-creators
    - educational-channels
    - science-communicators
  key_capabilities:
    - interactive-planning
    - source-verification
    - script-writing
    - seo-optimization
```

### Team Bundle (`team-bundle.yaml`)
```yaml
# <!-- Powered by BMAD™ Core -->
bundle:
  name: YouTube Video Script Team
  icon: 🎬
  description: Complete video script creation with research and documentation

agents:
  - video-planner       # Concept development and planning
  - video-researcher    # Fact-finding and source validation
  - scene-planner       # Scene breakdown and structure
  - script-writer       # Script writing and narrative flow
  - video-description-writer # YouTube optimization

workflows:
  - create-video.yaml   # Main video creation workflow

shared_resources:
  templates:
    - video-plan-tmpl.md
    - research-doc-tmpl.md
    - scene-outline-tmpl.md
    - video-script-tmpl.md
    - video-description-tmpl.md

  tasks:
    - plan-video-concept.md
    - research-topics.md
    - outline-scenes.md
    - write-scene-script.md
    - create-description.md

  data:
    - youtube-best-practices.md
    - source-citation-guide.md
    - seo-optimization-tips.md
```

## Implementation Checklist

### Phase 1: Foundation
- [ ] Create expansion pack directory structure
- [ ] Set up config.yaml and team-bundle.yaml
- [ ] Create templates directory with all 5 templates

### Phase 2: Agent Development
- [ ] Implement video-planner agent with interactive capabilities
- [ ] Implement video-researcher agent with web access
- [ ] Implement scene-planner agent with structure focus
- [ ] Implement script-writer agent with narrative skills
- [ ] Implement video-description-writer with SEO knowledge

### Phase 3: Workflow & Tasks
- [ ] Create main create-video.yaml workflow
- [ ] Write plan-video-concept.md task (interactive)
- [ ] Write research-topics.md task
- [ ] Write outline-scenes.md task
- [ ] Write write-scene-script.md task
- [ ] Write create-description.md task

### Phase 4: Knowledge Base
- [ ] Create youtube-best-practices.md
- [ ] Create source-citation-guide.md
- [ ] Create seo-optimization-tips.md
- [ ] Add platform-specific guidelines

### Phase 5: Testing & Refinement
- [ ] Test individual agent functionality
- [ ] Test workflow handoffs
- [ ] Test document generation
- [ ] Validate source attribution system
- [ ] Ensure flexibility for editors

## Success Metrics

1. **Workflow Completion Rate**: Successfully complete all phases
2. **Source Quality**: 100% of STEM claims have valid sources
3. **Script Coherence**: Narrative flows naturally through scenes
4. **Flexibility Score**: Visual suggestions remain optional
5. **User Satisfaction**: Interactive planning meets creator needs
6. **SEO Effectiveness**: Descriptions include all key elements

## Future Enhancements

1. **Video Series Support**: Handle multi-part video series
2. **Style Variations**: Different templates for different video styles
3. **Analytics Integration**: Use YouTube Analytics API for optimization
4. **Thumbnail Suggestions**: Add thumbnail concept agent
5. **A/B Testing**: Multiple title/description variants
6. **Collaboration Mode**: Multi-user planning sessions
7. **Platform Expansion**: Adapt for TikTok, Instagram Reels, etc.

## Notes

- All agents should maintain awareness that visual suggestions are optional
- Personal experience sections don't require sources but should be clearly marked
- The system should be flexible enough to handle various video genres
- Consider adding version control for script iterations
- Future integration with video editing tools could be valuable

---

*This design document serves as the blueprint for implementing the YouTube Video Script Creation Team within the BMAD-METHOD framework.*