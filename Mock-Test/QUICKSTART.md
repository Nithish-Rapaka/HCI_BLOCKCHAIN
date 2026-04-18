# 🚀 AI Chatbot - Quick Start Guide

## 5-Minute Setup

### Step 1: Get Your API Keys (2 minutes)

**Google Gemini API:**

1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key

**Groq API:**

1. Visit: https://console.groq.com
2. Sign up or sign in
3. Go to API Keys section
4. Create a new API key
5. Copy the key

### Step 2: Configure Environment (1 minute)

1. Open the `.env` file in your project root
2. Add your API keys:

```env
VITE_GEMINI_API=your_gemini_key_here
VITE_GROQ_API=your_groq_key_here
```

3. Save the file

### Step 3: Restart Your Dev Server (2 minutes)

```bash
npm run dev
```

> **Important**: You MUST restart the dev server after adding the `.env` file!

### Step 4: Test It! (Done!)

1. Go to any quiz page
2. Look for the **💬 Chat Button** in the bottom-right corner
3. Click it!
4. Choose an AI provider (Gemini or Groq)
5. Click "Get Explanation"
6. Enjoy your AI-powered learning! 🎉

---

## Where to Find the Chatbot

### QuizPage

- **Location**: Bottom-right corner (floating button)
- **Auto-populated**: Yes, with current question
- **How to use**: Click button → Select provider → Get Explanation

### MultiAnswerPage

- **Location**: Next to each question (💬 Ask AI button)
- **Auto-populated**: Yes, with that specific question
- **How to use**: Click button → Select provider → Get Explanation

---

## Features Explained

### 🤖 Two AI Providers

**Google Gemini**

- ✅ Excellent for detailed explanations
- ✅ Great for complex concepts
- ✅ Free tier: 60 requests/minute

**Groq**

- ✅ Fast response times
- ✅ Good for step-by-step solutions
- ✅ Free tier: 30 requests/minute

### 📚 Response Format

Your AI will provide:

1. **Summary** - What the question asks
2. **Step-by-Step** - Detailed explanation
3. **Key Points** - Important facts
4. **Examples** - Real-world applications

### 💬 Chat Features

- ✅ See your question
- ✅ See AI's detailed response
- ✅ Switch providers mid-conversation
- ✅ Clear error messages
- ✅ Loading indicators

---

## Common Issues & Quick Fixes

### "API key not found"

```bash
# Solution: Restart dev server
npm run dev
```

### Chatbot button not showing

- Make sure you're on a quiz page
- Refresh the page (Ctrl+R or Cmd+R)

### "Request Failed" error

- Check your internet connection
- Verify API keys are correct
- Try the other provider (Gemini vs Groq)

### Slow responses

- This is normal - AI needs time to think
- Your internet speed affects response time
- Try the Groq provider (often faster)

---

## Pro Tips

💡 **Tip 1**: Use Groq for quick answers, Gemini for deep dives

💡 **Tip 2**: You can ask about the same question multiple times with different providers

💡 **Tip 3**: Read the explanation after submitting your quiz to reinforce learning

💡 **Tip 4**: The chatbot works offline with .env file but needs internet for API calls

💡 **Tip 5**: Each provider costs money if you exceed free tier limits - monitor usage

---

## File Locations

```
.env ← Add API keys here!
.env.example ← Reference template
CHATBOT_SETUP.md ← Detailed setup guide
CHATBOT_IMPLEMENTATION.md ← Technical details

src/
├── components/Chatbot.jsx ← Chatbot UI
├── services/chatbotService.js ← API calls
└── pages/
    ├── QuizPage.jsx ← Has floating button
    └── MultiAnswerPage.jsx ← Has "Ask AI" buttons
```

---

## Troubleshooting Checklist

- [ ] `.env` file exists in project root
- [ ] `.env` has VITE\_ prefixes (not plain GEMINI_API)
- [ ] API keys are valid and active
- [ ] Dev server restarted after `.env` changes
- [ ] Using HTTPS URLs in API calls
- [ ] Browser allows third-party requests
- [ ] Not exceeding API rate limits

---

## Next Steps

1. **First Time**: Follow the 5-minute setup above
2. **Test It**: Go to a quiz and click the chatbot
3. **Give Feedback**: Let us know what works/what doesn't!
4. **Explore**: Try both Gemini and Groq
5. **Learn**: Use it to understand difficult concepts

---

## Need More Help?

📖 **Full Setup Guide**: Read `CHATBOT_SETUP.md`
🛠️ **Technical Details**: Check `CHATBOT_IMPLEMENTATION.md`
🐛 **Specific Issues**: See troubleshooting section in CHATBOT_SETUP.md

---

## Quick Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for linting errors
npm run lint
```

---

**Status**: ✅ Ready to Use
**Version**: 1.0.0
**Last Updated**: April 2026

**Happy Learning! 🎓**
