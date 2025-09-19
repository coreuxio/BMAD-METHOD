# Generate Agent Tests Task

## Task Metadata
```yaml
name: generate-agent-tests
description: Generate test scenarios for agent validation
elicit: false
category: testing
complexity: medium
```

## Purpose
Create comprehensive test scenarios to validate agent functionality.

## Process

### Step 1: Command Testing
**For each command, generate:**
- Valid input test
- Invalid input test
- Edge case test
- Expected output verification

### Step 2: Persona Testing
**Create scenarios to test:**
- Consistent voice
- Appropriate responses
- Principle adherence
- Expertise boundaries

### Step 3: Integration Testing
**Test scenarios for:**
- Agent activation
- Command execution
- Dependency loading
- Error handling

### Step 4: Generate Test Suite
**OUTPUT:**
```yaml
test_suite:
  activation_tests:
    - Test agent loads correctly
    - Test greeting is appropriate
    - Test help command works

  command_tests:
    - command: [command-name]
      input: [test-input]
      expected: [expected-output]

  error_tests:
    - scenario: Missing dependency
      expected: Graceful error message

  integration_tests:
    - Test handoffs to other agents
    - Test workflow participation
```

## Success Criteria
- All commands have tests
- Edge cases covered
- Error scenarios tested
- Integration validated