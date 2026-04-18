import { useState } from "react";
import { getChatbotResponse } from "../services/chatbotService";

export default function Chatbot({ question, onClose }) {
  const [isOpen, setIsOpen] = useState(onClose ? true : false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    if (!question || isLoading) return;

    setIsLoading(true);
    setError(null);
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: `Explain: ${question}`,
      },
    ]);

    try {
      const response = await getChatbotResponse(question);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: response,
        },
      ]);
    } catch (err) {
      setError(`${err.message}`);
      setMessages((prev) => [
        ...prev,
        {
          type: "error",
          content: `Failed to get response: ${err.message}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setError(null);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Floating Button - Professional Bottom-Right Position */}
      {!onClose && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-125 transition-all duration-300 flex items-center justify-center z-40 group border-2 border-white/20"
          title="Ask AI Tutor for help"
        >
          <span className="text-4xl">💬</span>
          <div className="absolute -top-14 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">
            Ask AI Tutor
          </div>
        </button>
      )}

      {/* Chat Modal - Professional Bottom-Right Position */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 p-4 md:p-6 h-screen w-screen md:h-auto md:w-auto md:bottom-8 md:right-8 flex items-end justify-end">
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl w-full md:w-[500px] h-full md:h-[700px] flex flex-col border border-purple-500/40"
            style={{ maxHeight: "calc(100vh - 40px)" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-t-3xl flex justify-between items-center shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="text-white font-bold text-lg">AI Tutor</h3>
                  <p className="text-blue-100 text-[11px] font-semibold">
                    Powered by AI
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2 text-xl transition-all duration-200 hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-4xl mb-3">🤖</p>
                    <p className="text-gray-400 text-base font-medium">
                      Ask me about this question
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      Click "Get Explanation" to start
                    </p>
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.type === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : msg.type === "error"
                            ? "bg-red-600 text-white rounded-bl-none"
                            : "bg-gray-700 text-gray-50 rounded-bl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-100 px-5 py-3 rounded-2xl rounded-bl-none animate-pulse font-semibold">
                    🤔 Thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-purple-500/30 bg-gray-800/70 rounded-b-3xl space-y-3">
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !question}
                className={`w-full py-3 px-6 rounded-xl font-bold text-base transition-all ${
                  isLoading || !question
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {isLoading ? "⏳ Getting Explanation..." : "✨ Get Explanation"}
              </button>
              <p className="text-xs text-gray-400 text-center font-semibold">
                Using Groq API
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147,51,234,0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147,51,234,0.8);
        }
      `}</style>
    </>
  );
}
