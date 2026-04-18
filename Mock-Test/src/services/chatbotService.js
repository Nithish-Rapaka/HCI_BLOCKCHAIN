// Chatbot Service to handle Groq API calls only

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const getChatbotResponse = async (question) => {
  try {
    return await getGroqResponse(question);
  } catch (error) {
    console.error("Error with Groq API:", error);
    throw error;
  }
};

// Groq API Response
const getGroqResponse = async (question) => {
  if (!GROQ_API_KEY) {
    throw new Error("Groq API key not found in environment variables");
  }

  const isMathProblem =
    /[0-9+\-*\/=()^√∑∏∫π×÷≈≠≤≥]|mod|log|sin|cos|tan|algebra|equation|calculate|solve|formula|derivative|integral/.test(
      question,
    );

  const prompt = isMathProblem
    ? `You are an expert educational AI assistant specializing in mathematics for a quiz application.

  A student asked about this mathematical question:
  "${question}"

  IMPORTANT: For mathematical problems, provide DETAILED step-by-step solutions with:

  ## Introduction
  - Briefly explain what the problem is asking
  - Identify what needs to be found

  ## Step-by-Step Solution
  For each step, SHOW:
  - The formula or concept being used
  - The actual calculation with numbers
  - The result

  Example format:
  Step 1: Calculate X
    Formula: X = a × b
    Calculation: X = 5 × 3 = 15

  Step 2: Calculate Y
    Formula: Y = X + c
    Calculation: Y = 15 + 2 = 17

  ## Verification
  - Show how to verify the answer

  ## Key Points
  - Important formulas and concepts used
  - Common mistakes to avoid

  ## Final Answer
  - Clearly state the final result

  Show ALL intermediate steps and calculations.`
    : `You are an educational AI assistant for a quiz application.

  A student asked about this question:
  "${question}"

  Please provide a detailed explanation with:
  1. Introduction - What is this question asking?
  2. Detailed Explanation - Step-by-step breakdown
  3. Key Points - Important concepts to remember
  4. Example - Real-world application (if applicable)

  Format clearly with sections and bullet points.`;

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 2048,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "Groq API request failed");
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No response generated";
};
