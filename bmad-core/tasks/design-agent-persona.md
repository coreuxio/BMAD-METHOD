# Design Agent Persona Task

## Task Metadata
```yaml
name: design-agent-persona
description: Design a compelling and effective agent persona
elicit: true
category: agent-creation
complexity: medium
```

## Purpose
Create a well-defined, consistent persona that gives the agent a unique identity and guides its interactions.

## Process

### Step 1: Define Core Identity
**ASK:** "Let's define the agent's core identity:
1. What is their primary expertise? (e.g., 'data analysis', 'creative writing')
2. What makes them unique in this role?
3. What is their backstory or experience?"

**BUILD:**
- Role statement combining expertise and uniqueness
- Identity narrative that explains their value
- Background that supports their authority

### Step 2: Communication Style
**ASK:** "How should this agent communicate?
1. Personality traits (3-5 adjectives like 'analytical, thorough, friendly')
2. Formality level (formal/professional/casual/friendly)
3. Teaching style (directive/collaborative/socratic/supportive)"

**CREATE:**
```yaml
persona:
  style: [Combine traits into coherent style]
  voice: [Specific communication patterns]
```

### Step 3: Core Principles
**ASK:** "What principles guide this agent's work?
Think about:
- Quality standards they uphold
- Methodologies they follow
- Values they embody"

**GENERATE:** 3-5 core principles that:
- Guide decision-making
- Set quality standards
- Define approach to problems
- Reflect domain best practices

### Step 4: Expertise Areas
**ASK:** "What specific knowledge and skills does this agent possess?
List 5-10 specific areas of expertise."

**CATEGORIZE:**
- Technical skills
- Domain knowledge
- Soft skills
- Tool proficiency
- Industry experience

### Step 5: Behavioral Traits
**DEFINE:**
- How they approach problems
- How they handle errors
- How they teach/explain
- How they collaborate
- How they prioritize

### Step 6: Interaction Patterns
**SPECIFY:**
- Greeting style
- Question-asking approach
- Feedback delivery
- Error handling
- Sign-off style

### Step 7: Persona Validation
**CHECK:**
- [ ] Persona is distinct from existing agents
- [ ] Style matches domain expectations
- [ ] Principles align with purpose
- [ ] Voice is consistent throughout
- [ ] Expertise supports capabilities

### Step 8: Generate Persona Block
**OUTPUT:**
```yaml
persona:
  role: [Primary role and expertise]
  style: [Communication style traits]
  identity: [Unique value proposition]
  focus: [Key areas of focus]
  core_principles:
    - [Principle 1]
    - [Principle 2]
    - [Principle 3]
  expertise:
    - [Skill/knowledge 1]
    - [Skill/knowledge 2]
    - [Skill/knowledge 3]
  approach: |
    [How they work and think]
  personality: |
    [Detailed personality description]
```

## Success Criteria
- Persona feels authentic and coherent
- Clear differentiation from other agents
- Appropriate for target domain
- Consistent voice throughout
- Memorable and engaging

## Examples

### Analytical Persona
```yaml
style: Analytical, precise, methodical, patient
identity: Data-driven problem solver who finds insights in complexity
```

### Creative Persona
```yaml
style: Imaginative, enthusiastic, collaborative, inspiring
identity: Creative catalyst who transforms ideas into reality
```

### Expert Persona
```yaml
style: Authoritative, thorough, educational, supportive
identity: Domain expert who shares deep knowledge accessibly
```

## Tips
- Avoid generic descriptions
- Include specific domain language
- Make principles actionable
- Ensure consistency across all aspects
- Test persona with sample interactions