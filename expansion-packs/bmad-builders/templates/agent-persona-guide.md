# Agent Persona Development Guide

## Creating Compelling Agent Personas

This guide helps you develop rich, consistent, and effective personas for BMAD agents.

## Core Components of a Persona

### 1. Role Definition
The agent's primary function and expertise area.

**Questions to answer:**
- What is this agent's primary job?
- What expertise do they bring?
- What problems do they solve?
- Who do they serve?

**Example:**
```yaml
role: Senior Data Analyst & Insights Strategist
```

### 2. Communication Style
How the agent interacts and communicates.

**Style Attributes:**
- **Formality Level**: Formal | Professional | Casual | Friendly
- **Teaching Approach**: Directive | Collaborative | Socratic | Supportive
- **Interaction Pattern**: Proactive | Responsive | Adaptive
- **Emotional Tone**: Analytical | Enthusiastic | Calm | Energetic

**Example:**
```yaml
style: Professional yet approachable, analytical but accessible, patient teacher
```

### 3. Core Identity
The unique value proposition and character.

**Identity Elements:**
- Unique expertise or perspective
- Distinguishing characteristics
- Value they provide
- What makes them memorable

**Example:**
```yaml
identity: The data detective who finds stories hidden in numbers and makes complexity simple
```

### 4. Focus Areas
Primary areas of concentration and responsibility.

**Focus Categories:**
- Technical domains
- Business areas
- Quality aspects
- User outcomes

**Example:**
```yaml
focus: Statistical analysis, pattern recognition, actionable insights, data storytelling
```

### 5. Core Principles
Fundamental beliefs and approaches that guide behavior.

**Principle Types:**
- Methodology principles
- Quality standards
- Ethical guidelines
- Professional values

**Example:**
```yaml
core_principles:
  - Data integrity is non-negotiable
  - Insights must be actionable
  - Complexity should be simplified, not hidden
  - Correlation does not imply causation
```

## Persona Archetypes

### The Expert
**Characteristics:**
- Deep domain knowledge
- Authoritative voice
- Educational approach
- High standards

**Best for:** Specialized domains requiring expertise

**Example Voice:** "Based on my analysis of 10,000 similar cases..."

### The Coach
**Characteristics:**
- Supportive guidance
- Growth-focused
- Encouraging tone
- Patient teaching

**Best for:** Learning and development scenarios

**Example Voice:** "Let's work through this together..."

### The Analyst
**Characteristics:**
- Data-driven
- Objective viewpoint
- Systematic approach
- Evidence-based

**Best for:** Research and analysis tasks

**Example Voice:** "The data indicates three key patterns..."

### The Creator
**Characteristics:**
- Imaginative thinking
- Innovative solutions
- Expressive communication
- Enthusiasm

**Best for:** Creative and design work

**Example Voice:** "What if we tried something completely different..."

### The Manager
**Characteristics:**
- Organized approach
- Results-focused
- Clear delegation
- Progress tracking

**Best for:** Coordination and project management

**Example Voice:** "Our next milestone requires..."

## Developing Personality Traits

### Primary Traits (Choose 3-5)
- **Analytical**: Systematic, thorough, detail-oriented
- **Creative**: Innovative, imaginative, original
- **Supportive**: Helpful, patient, encouraging
- **Decisive**: Clear, confident, action-oriented
- **Collaborative**: Team-focused, inclusive, cooperative
- **Meticulous**: Precise, careful, quality-focused
- **Pragmatic**: Practical, realistic, solution-oriented
- **Visionary**: Forward-thinking, strategic, big-picture

### Communication Patterns

**Greeting Styles:**
- Formal: "Good day. I'm ready to assist with..."
- Friendly: "Hi there! Let's tackle..."
- Professional: "Hello. Let's begin by..."
- Enthusiastic: "Excited to help you with..."

**Question Patterns:**
- Clarifying: "To ensure I understand correctly..."
- Exploratory: "What if we considered..."
- Confirmatory: "Shall we proceed with..."
- Educational: "Did you know that..."

**Feedback Delivery:**
- Direct: "The analysis shows..."
- Supportive: "You're on the right track, and..."
- Constructive: "This works well, though we might improve..."
- Encouraging: "Great progress! Next, let's..."

## Expertise Specification

### Technical Expertise
List specific technical skills and knowledge areas:
- Programming languages
- Tools and frameworks
- Methodologies
- Industry standards

### Domain Knowledge
Specify area-specific understanding:
- Industry experience
- Regulatory knowledge
- Best practices
- Common patterns

### Soft Skills
Include interpersonal capabilities:
- Communication styles
- Problem-solving approaches
- Collaboration methods
- Leadership qualities

## Consistency Guidelines

### Maintaining Voice
- Use consistent vocabulary
- Maintain formality level
- Keep emotional tone steady
- Use signature phrases sparingly

### Behavioral Consistency
- React similarly to similar situations
- Maintain principle adherence
- Keep expertise boundaries clear
- Use consistent problem-solving approaches

## Persona Testing Questions

Before finalizing, ask:

1. **Distinctiveness**: Could users distinguish this agent from others?
2. **Authenticity**: Does the persona feel genuine?
3. **Consistency**: Do all elements align?
4. **Memorability**: Will users remember this agent?
5. **Appropriateness**: Does it fit the domain?
6. **Completeness**: Are all aspects defined?
7. **Usability**: Is it clear when to use this agent?

## Common Pitfalls to Avoid

### Too Generic
❌ "A helpful assistant that does tasks"
✅ "A meticulous code reviewer who catches bugs others miss"

### Inconsistent Tone
❌ Mixing formal and casual randomly
✅ Consistently professional with moments of warmth

### Unclear Purpose
❌ "Handles various things"
✅ "Specializes in data analysis and insight generation"

### Overlap with Others
❌ Multiple agents with same capabilities
✅ Clear differentiation and unique value

## Persona Template

```yaml
persona:
  role: [Primary role and expertise]
  style: [Communication style - 3-5 traits]
  identity: [Unique value proposition in one sentence]
  focus: [Key areas of focus and responsibility]

  core_principles:
    - [Fundamental principle 1]
    - [Fundamental principle 2]
    - [Fundamental principle 3]

  expertise:
    - [Specific expertise area 1]
    - [Specific expertise area 2]
    - [Specific expertise area 3]

  approach: |
    [How they approach problems and work]

  personality: |
    [Detailed personality description]

  communication:
    greeting: [How they greet users]
    questions: [How they ask questions]
    feedback: [How they provide feedback]
    sign-off: [How they end interactions]
```

## Final Checklist

- [ ] Role is clear and specific
- [ ] Style is consistent and appropriate
- [ ] Identity is unique and memorable
- [ ] Focus areas are well-defined
- [ ] Principles guide behavior
- [ ] Expertise matches capabilities
- [ ] Voice is distinctive
- [ ] Personality is coherent
- [ ] Communication patterns are natural
- [ ] No overlap with existing agents