# AI Agent System Documentation

## Overview

The RenderOSArms AI Agent System provides intelligent, conversational access to the model repository through multiple specialized agent personas. Each agent is optimized for specific tasks and user needs.

## Agent Personas

### 1. Model Guide Agent
**Persona**: Friendly, knowledgeable assistant
**Role**: Help users find and understand models
**Capabilities**:
- Model recommendations based on user needs
- Detailed explanations of specifications
- Comparison between models
- Assembly guidance

**Example Interactions**:
```
User: "I'm looking for a compact 9mm pistol for concealed carry"
Agent: "Based on your requirements, I'd recommend looking at the FMDA G19 or G26 
models. The G26 is more compact but holds fewer rounds. Would you like me to 
compare their dimensions and capacity?"
```

### 2. Technical Advisor Agent
**Persona**: Expert engineer, precise and detailed
**Role**: Provide technical specifications and analysis
**Capabilities**:
- Material recommendations
- Structural analysis
- Print settings optimization
- Troubleshooting print failures

**Example Interactions**:
```
User: "What infill percentage should I use for the lower receiver?"
Agent: "For the lower receiver, I recommend 100% infill with PLA+ or nylon. 
The critical stress points are around the buffer tube threads and grip mount. 
I can provide a detailed stress analysis if needed."
```

### 3. Safety Compliance Agent
**Persona**: Cautious, regulatory-focused
**Role**: Ensure safe and legal use
**Capabilities**:
- Legal compliance checking
- Safety warnings
- Regulatory guidance
- Risk assessment

**Example Interactions**:
```
User: "Can I build this model?"
Agent: "Before proceeding, please verify: 1) You're legally allowed to possess 
this firearm type in your jurisdiction, 2) You have necessary licenses/permits, 
3) You understand safe handling procedures. Would you like information about 
regulations in your area?"
```

### 4. Community Liaison Agent
**Persona**: Friendly, socially-aware facilitator
**Role**: Connect users with community
**Capabilities**:
- Community introductions
- Feedback collection
- Feature requests
- Collaboration facilitation

**Example Interactions**:
```
User: "I have an improvement idea for this model"
Agent: "That's great! The community welcomes improvements. Would you like to: 
1) Submit a detailed proposal, 2) Discuss it in the forums, 3) Create a 
pull request with your modifications? I can guide you through any of these."
```

### 5. Educational Agent
**Persona**: Patient teacher, encouraging
**Role**: Educate users about firearms and 3D printing
**Capabilities**:
- Explain terminology
- Teach mechanical principles
- Guide learning paths
- Recommend resources

**Example Interactions**:
```
User: "What's a direct impingement system?"
Agent: "Direct impingement is a gas operating system used in AR-15 style rifles. 
Gas from the fired cartridge travels through a tube directly to the bolt carrier, 
pushing it backward. Let me show you a diagram and animation..."
```

## Agent Handoff Protocol

### When to Hand Off

Agents should transfer users to another agent when:
1. Query outside their expertise
2. User needs change
3. More specialized knowledge required
4. Safety concerns arise

### Handoff Process

```javascript
{
  "handoff": {
    "from_agent": "model_guide",
    "to_agent": "safety_compliance",
    "reason": "Legal compliance question",
    "context": {
      "user_location": "California, USA",
      "model_interest": "AR-15 Lower",
      "conversation_history": [...]
    }
  }
}
```

### Smooth Transitions

**Good Handoff**:
```
Model Guide: "That's an important legal question. Let me connect you with our 
Safety Compliance specialist who can provide accurate regulatory information 
for your area."

Safety Compliance: "Hello! I understand you're interested in building an AR-15 
lower in California. Let me explain the specific regulations that apply..."
```

## Prompt Templates

### Model Recommendation Template

```
Context: User is looking for {model_type} with {requirements}
User Level: {beginner|intermediate|advanced}
Location: {jurisdiction}

Task: Recommend top 3 models that match requirements
Consider:
- Technical complexity
- Part availability
- Documentation quality
- User skill level
- Legal restrictions

Format:
1. Model name and version
2. Why it's recommended
3. Pros and cons
4. Next steps
```

### Technical Analysis Template

```
Model: {model_path}
Question: {technical_question}
Context: {relevant_specifications}

Task: Provide detailed technical answer
Include:
- Specifications
- Calculations (if applicable)
- Material recommendations
- Potential issues
- Best practices

Format:
- Clear explanation
- Supporting data
- Visual aids (if helpful)
- References
```

### Safety Assessment Template

```
Model: {model_path}
User Location: {jurisdiction}
Intent: {intended_use}

Task: Assess safety and legal compliance
Check:
- Local regulations
- Federal laws
- Safety considerations
- Required permits
- Age restrictions

Format:
- Legal status
- Safety warnings
- Required documentation
- Recommended precautions
- Resources for compliance
```

## Context Management

### User Context

```javascript
{
  "user_id": "unique_id",
  "session_id": "session_id",
  "preferences": {
    "experience_level": "intermediate",
    "interests": ["pistols", "9mm"],
    "location": "Texas, USA",
    "has_printer": true,
    "printer_specs": {
      "build_volume": "220x220x250",
      "materials": ["PLA", "PETG"]
    }
  },
  "history": [
    {
      "timestamp": "2025-10-17T10:30:00Z",
      "agent": "model_guide",
      "query": "Looking for Glock models",
      "result": "Recommended G17 and G19"
    }
  ]
}
```

### Conversation Context

```javascript
{
  "conversation_id": "conv_123",
  "current_agent": "technical_advisor",
  "topic": "print_settings",
  "related_models": ["FMDA_G17"],
  "user_questions": [
    "What infill should I use?",
    "Best layer height?"
  ],
  "agent_responses": [
    "For structural parts, use 100% infill",
    "0.2mm layer height recommended"
  ],
  "pending_actions": [
    "Show stress analysis",
    "Provide print profile"
  ]
}
```

## Natural Language Processing

### Intent Recognition

**Model Search Intents**:
- "show me", "find", "looking for", "need"
- "best", "recommend", "suggest"
- "compare", "difference between"

**Technical Intents**:
- "how to", "instructions", "steps"
- "what", "why", "explain"
- "settings", "specifications"

**Safety Intents**:
- "legal", "allowed", "can I"
- "safe", "dangerous", "risks"
- "regulations", "laws"

### Entity Extraction

```javascript
{
  "query": "I'm looking for a compact 9mm Glock",
  "entities": {
    "model_type": "pistol",
    "manufacturer": "Glock",
    "caliber": "9mm",
    "size": "compact",
    "intent": "model_search"
  }
}
```

## Response Generation

### Response Components

1. **Acknowledgment** - Confirm understanding
2. **Information** - Provide requested data
3. **Explanation** - Add context and reasoning
4. **Action Items** - Next steps or options
5. **Follow-up** - Encourage continued interaction

### Example Response

```
[Acknowledgment]
I understand you're interested in 9mm Glock models.

[Information]
The G17 and G19 are excellent choices. The G17 is full-size with a 17-round 
capacity, while the G19 is compact with 15 rounds.

[Explanation]
Both models use the same DIY rail system and are well-documented for beginners. 
The G19's smaller size makes it more versatile for concealed carry.

[Action Items]
Would you like to:
1. View detailed specifications
2. See assembly instructions
3. Check print settings
4. Compare with other models

[Follow-up]
I'm here if you have any questions about the build process!
```

## Training Data

### Sample Conversations

Located in `/docs/ai/training_data/`:
- `model_queries.json` - Model search examples
- `technical_qa.json` - Technical questions
- `safety_compliance.json` - Legal and safety queries
- `troubleshooting.json` - Problem-solving examples

### Continuous Learning

Agents learn from:
- User feedback ratings
- Successful query resolutions
- Common question patterns
- Failed queries for improvement

## Integration

### Frontend Integration

```javascript
// Example: AI Chat Interface
const chat = new AIAssistant({
  apiEndpoint: '/api/ai/query',
  defaultAgent: 'model_guide',
  userContext: getUserContext()
});

// Send query
const response = await chat.query('Show me AR-15 lowers');

// Handle response
displayResponse(response.message);
displaySuggestions(response.follow_up_questions);
```

### Backend Integration

```javascript
// Example: Agent Router
class AgentRouter {
  route(query, context) {
    const intent = this.detectIntent(query);
    
    if (intent.includes('legal') || intent.includes('safety')) {
      return this.agents.safety_compliance;
    }
    
    if (intent.includes('technical') || intent.includes('specifications')) {
      return this.agents.technical_advisor;
    }
    
    return this.agents.model_guide; // Default
  }
}
```

## Quality Metrics

### Performance Indicators

- Query resolution rate
- User satisfaction scores
- Average response time
- Handoff efficiency
- Context retention

### Success Criteria

- 90%+ query resolution rate
- 4.5+ average satisfaction score
- < 2s response time
- < 10% unnecessary handoffs
- 85%+ context retention

## Privacy & Ethics

### Data Handling

- No personal information logged without consent
- Conversation data anonymized
- Option to delete conversation history
- Transparent data usage

### Ethical Guidelines

- Never encourage illegal activities
- Prioritize safety information
- Provide balanced perspectives
- Respect user autonomy
- Maintain neutrality

## Future Enhancements

1. **Voice Interface** - Speech recognition and synthesis
2. **Visual AI** - Image analysis for model identification
3. **Predictive Assistance** - Anticipate user needs
4. **Multi-language** - Support for multiple languages
5. **AR Integration** - Augmented reality model viewing
6. **Personalization** - Learn individual user preferences

---

For implementation details, see `/docs/ai/implementation.md`
