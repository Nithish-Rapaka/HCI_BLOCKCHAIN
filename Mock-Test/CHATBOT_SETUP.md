# AI Chatbot Integration Guide

## Overview

Your Quiz application now includes an AI-powered chatbot feature that helps students understand questions in detail. The chatbot can explain questions step-by-step using either **Google Gemini** or **Groq AI** APIs.

## Features

### 1. **Quiz Page (QuizPage.jsx)**

- **Floating Chat Button**: Appears in the bottom-right corner of the screen
- **Auto-populated Question**: The chatbot automatically knows which question you're asking about
- **API Selection**: Choose between Gemini and Groq in the chat interface
- **Detailed Explanations**: Get step-by-step, detailed responses for complex problems

### 2. **Multi-Answer Quiz Page (MultiAnswerPage.jsx)**

- **Per-Question "Ask AI" Button**: Each question has an inline "Ask AI" button
- **Focused Discussion**: Chat modal opens with that specific question
- **Same Dual-API Support**: Choose Gemini or Groq for your explanation

### 3. **AI Provider Options**

#### Google Gemini

- Fast, accurate responses
- Good for detailed explanations
- Handles complex concepts well

#### Groq

- Alternative provider for redundancy
- Fast response times
- Good for step-by-step breakdowns

## Setup Instructions

### 1. Get API Keys

**Google Gemini API:**

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key

**Groq API:**

1. Go to [Groq Console](https://console.groq.com)
2. Create an account or sign in
3. Go to API Keys section
4. Create a new API key
5. Copy your API key

### 2. Configure Environment Variables

1. Open the `.env` file in your project root
2. Add your API keys:

```env
VITE_GEMINI_API=your_gemini_api_key_here
VITE_GROQ_API=your_groq_api_key_here
```

**Important**: Never commit the `.env` file with your actual API keys. Use `.env.example` as a template.

### 3. Install Dependencies (if needed)

The chatbot uses only built-in fetch API - no additional npm packages required!

## How to Use

### In Quiz Page

1. **Take the Quiz**: Answer questions as normal
2. **Click the Chat Button**: Look for the purple/blue 💬 button in the bottom-right corner
3. **Choose AI Provider**: Select "Gemini" or "Groq" at the top of the chat
4. **Get Explanation**: Click "Get Explanation" to get a detailed breakdown
5. **Read Response**: The AI will explain:
   - What the question is asking
   - Step-by-step solutions
   - Key concepts
   - Examples

### In Multi-Answer Quiz

1. **View Questions**: All multi-answer questions are displayed
2. **Find "Ask AI" Button**: Located next to each question title
3. **Click "Ask AI"**: Opens a chat modal for that specific question
4. **Follow Same Steps**: Choose provider, click "Get Explanation"

## Response Format

The AI provides responses structured as:

```
1. Summary - What is the question asking?
2. Step-by-Step Explanation - Detailed breakdown of the concept
3. Key Points - Important facts to remember
4. Examples - Real-world or problem-specific examples
```

## Troubleshooting

### "API key not found" Error

- Check that `.env` file exists in the project root
- Verify keys are prefixed with `VITE_` in the `.env` file
- Restart your development server after adding `.env`

### "Request Failed" Error

- Check your internet connection
- Verify API keys are correct and active
- Check that the API service isn't down (check status pages)
- Ensure you haven't exceeded API rate limits

### No Response Generated

- Try the alternative API provider
- Check browser console for detailed error messages
- Verify question text is being passed to the chatbot

## File Structure

```
src/
├── components/
│   ├── Chatbot.jsx                 # Main chatbot UI component
│   ├── QuestionCard.jsx
│   ├── NavBar.jsx
│   └── Footer.jsx
├── services/
│   └── chatbotService.js           # API call handlers (Gemini & Groq)
├── pages/
│   ├── QuizPage.jsx                # Integrated with floating chatbot
│   ├── MultiAnswerPage.jsx         # Integrated with inline buttons
│   ├── Home.jsx
│   ├── SubjectPage.jsx
│   └── BlockchainNotesPage.jsx
└── data/
    └── data.js                      # Quiz questions
```

## Code Integration Details

### 1. **Chatbot Service** (`chatbotService.js`)

- Handles API calls to both Gemini and Groq
- Formats questions into educational prompts
- Manages error handling

### 2. **Chatbot Component** (`Chatbot.jsx`)

- Renders floating button (QuizPage) or modal interface
- Manages chat state and messages
- Handles API provider switching
- Shows loading states and errors

### 3. **Page Integration**

- **QuizPage**: Passes current question to Chatbot component
- **MultiAnswerPage**: Manages selected question for chatbot

## Customization

### Modify Prompt Style

Edit the prompt in `chatbotService.js`:

```javascript
const prompt = `[Your custom prompt here]`;
```

### Change Response Formatting

Update the extraction logic in API response handlers:

- For Gemini: Modify the `data.candidates[0].content.parts[0].text` path
- For Groq: Modify the `data.choices[0].message.content` path

### Adjust UI Styling

The Chatbot component uses Tailwind CSS classes. Modify the className strings to customize colors, sizes, and animations.

## API Rate Limits

Be aware of rate limits for each provider:

**Google Gemini** (Free Tier):

- 60 requests per minute

**Groq** (Free Tier):

- 30 requests per minute (check latest limits)

Consider caching responses or implementing request throttling for production use.

## Security Notes

1. **Never commit API keys** to git repositories
2. **Use environment variables** for all sensitive data
3. **Consider adding backend** for production to hide API keys
4. **Monitor API usage** to prevent unexpected charges

## Future Enhancements

Potential improvements:

- Save conversation history
- Add support for more AI providers (Claude, OpenAI, etc.)
- Implement conversation context (multi-turn)
- Add response caching
- Support for follow-up questions
- Export explanations as PDF

## Support

For issues or questions:

1. Check browser console (F12 → Console tab)
2. Verify API keys and environment setup
3. Test each API separately to isolate problems
4. Check API provider status pages

---

**Enjoy learning with AI! 🚀**
