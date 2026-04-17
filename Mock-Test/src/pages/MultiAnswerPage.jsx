import { useNavigate } from "react-router-dom";
import { blockchainMultiAnswer } from "../data/data.js";
import { useState } from "react";
import { useTheme } from "../App";

export default function MultiAnswerPage() {
  const nav = useNavigate();
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState({});

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isQuestionSubmitted = (questionIndex) =>
    Boolean(submittedQuestions[questionIndex]);

  const handleSubmitQuestion = (questionIndex) => {
    setSubmittedQuestions((prev) => ({ ...prev, [questionIndex]: true }));
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedAnswers((prev) => {
      const current = prev[questionIndex] || [];
      if (current.includes(optionIndex)) {
        return {
          ...prev,
          [questionIndex]: current.filter((i) => i !== optionIndex),
        };
      } else {
        return {
          ...prev,
          [questionIndex]: [...current, optionIndex],
        };
      }
    });
  };

  const isAnswerCorrect = (questionIndex) => {
    const question = blockchainMultiAnswer[questionIndex];
    const selected = (selectedAnswers[questionIndex] || []).slice().sort();
    const correct = [...question.correctAnswers].sort();

    if (selected.length !== correct.length) return false;
    return selected.every((val, idx) => val === correct[idx]);
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "dark"
          ? "bg-linear-to-br from-purple-950 via-purple-900 to-slate-950"
          : "bg-slate-100"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">
            ⭐ Multi-Answer Quiz Practice
          </h1>
          <p
            className={`${theme === "dark" ? "text-blue-200" : "text-slate-700"}`}
          >
            Blockchain questions with multiple correct answers. Select all that
            apply, then submit to reveal correct and incorrect options.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-block bg-linear-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-lg px-4 py-2">
              <span
                className={`font-semibold ${theme === "dark" ? "text-blue-100" : "text-slate-800"}`}
              >
                {blockchainMultiAnswer.length} Questions • Practice mode
              </span>
            </div>
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="space-y-4">
          {blockchainMultiAnswer.map((question, qIndex) => {
            const isExpanded = expandedIndex === qIndex;
            const isCorrect = isAnswerCorrect(qIndex);
            const hasAnswered = selectedAnswers[qIndex]?.length > 0;

            return (
              <div
                key={qIndex}
                className={`backdrop-blur-sm rounded-xl shadow-xl transition-all duration-200 overflow-hidden border ${
                  theme === "dark"
                    ? "bg-purple-800/50 border-purple-700"
                    : "bg-white/90 border-slate-300"
                }`}
              >
                {/* QUESTION HEADER */}
                <div
                  onClick={() => toggleExpand(qIndex)}
                  className="p-6 cursor-pointer hover:bg-purple-700/50 transition-all duration-200 flex justify-between items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg px-3 py-1 text-sm">
                        Q{qIndex + 1}
                      </span>
                      <span className="text-blue-300 text-sm">
                        Week {question.week}
                      </span>
                      {hasAnswered && isCorrect && (
                        <span className="bg-green-600/30 text-green-300 text-xs font-semibold px-2 py-1 rounded">
                          ✅ Correct
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {question.q}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {hasAnswered
                        ? `${selectedAnswers[qIndex].length} option(s) selected`
                        : "Select all correct answers"}
                    </p>
                  </div>
                  <div className="text-2xl text-blue-300">
                    {isExpanded ? "▼" : "▶"}
                  </div>
                </div>

                {/* EXPANDED CONTENT */}
                {isExpanded && (
                  <div className="border-t border-purple-700 p-6 bg-purple-800/30">
                    {/* OPTIONS */}
                    <div className="mb-6">
                      <p className="text-blue-100 font-semibold mb-3 text-sm">
                        Select multiple answers:
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => {
                          const isSelected = (
                            selectedAnswers[qIndex] || []
                          ).includes(oIndex);
                          const isCorrectOption =
                            question.correctAnswers.includes(oIndex);
                          const isSubmitted = isQuestionSubmitted(qIndex);
                          const optionClass = isSubmitted
                            ? isSelected
                              ? isCorrectOption
                                ? "bg-green-600/30 border-green-500 text-green-100"
                                : "bg-red-600/30 border-red-500 text-red-100"
                              : isCorrectOption
                                ? "bg-green-500/10 border-green-400 text-green-100"
                                : "bg-purple-700/50 border-purple-600 hover:border-purple-500"
                            : isSelected
                              ? "bg-cyan-600/30 border-cyan-500"
                              : "bg-purple-700/50 border-purple-600 hover:border-purple-500";

                          return (
                            <div
                              key={oIndex}
                              onClick={() =>
                                !isSubmitted &&
                                handleOptionClick(qIndex, oIndex)
                              }
                              className={`p-4 rounded-lg cursor-pointer border-2 flex items-center gap-3 transition-all duration-200 ${optionClass}`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                readOnly
                                disabled={isSubmitted}
                                className="w-5 h-5 accent-cyan-500 cursor-pointer"
                              />
                              <span className="text-blue-100">{option}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={() => handleSubmitQuestion(qIndex)}
                        disabled={isQuestionSubmitted(qIndex)}
                        className={`rounded-xl px-5 py-3 font-semibold transition-all duration-200 ${
                          isQuestionSubmitted(qIndex)
                            ? "bg-slate-600/50 text-slate-300 cursor-not-allowed"
                            : "bg-cyan-600 text-white hover:bg-cyan-700"
                        }`}
                      >
                        {isQuestionSubmitted(qIndex)
                          ? "Answer Submitted"
                          : "Submit Answer"}
                      </button>
                      {isQuestionSubmitted(qIndex) && (
                        <span
                          className={`text-sm font-semibold ${
                            isCorrect ? "text-emerald-300" : "text-rose-300"
                          }`}
                        >
                          {isCorrect
                            ? "Correct answer!"
                            : "Some selections are incorrect."}
                        </span>
                      )}
                    </div>

                    {/* EXPLANATIONS */}
                    <div className="bg-linear-to-r from-blue-700/50 to-blue-600/50 rounded-lg p-4 border border-blue-600">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span className="text-lg">📚</span> Explanations for
                        Correct Answers
                      </h4>
                      <div className="space-y-3">
                        {question.options.map((option, oIndex) => {
                          const isCorrectOption =
                            question.correctAnswers.includes(oIndex);

                          return isCorrectOption ? (
                            <div
                              key={oIndex}
                              className="bg-green-600/20 border border-green-600/50 rounded-lg p-3"
                            >
                              <div className="flex gap-3">
                                <span className="text-green-400 font-bold shrink-0">
                                  ✓ Option {String.fromCharCode(65 + oIndex)}:
                                </span>
                                <p className="text-slate-200 text-sm">
                                  {question.explanations[oIndex]}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })}

                        {/* WRONG OPTIONS EXPLANATIONS */}
                        <div className="border-t border-slate-600 pt-3 mt-3">
                          <p className="text-slate-300 font-semibold text-sm mb-2">
                            Why other options are incorrect:
                          </p>
                          <div className="space-y-2">
                            {question.options.map((option, oIndex) => {
                              const isWrongOption =
                                !question.correctAnswers.includes(oIndex);

                              return isWrongOption ? (
                                <div
                                  key={oIndex}
                                  className="bg-red-600/10 border border-red-600/30 rounded-lg p-2"
                                >
                                  <div className="flex gap-3">
                                    <span className="text-red-400 font-bold shrink-0 text-sm">
                                      ✗ Option{" "}
                                      {String.fromCharCode(65 + oIndex)}:
                                    </span>
                                    <p className="text-slate-300 text-sm">
                                      {question.explanations[oIndex]}
                                    </p>
                                  </div>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-purple-900/40 border border-purple-700/50 rounded-3xl p-6 shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready for more blockchain practice?
            </h2>
            <p className="text-purple-200 mb-6">
              After reviewing explanations, continue with the full blockchain
              quiz to reinforce your understanding.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => nav("/subject/blockchain")}
              className="w-full md:w-auto bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            >
              🔗 Practice Blockchain Quiz
            </button>
            <button
              onClick={() => nav("/")}
              className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            >
              🏠 Back to Home
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => nav("/")}
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
          >
            🏠 Back to Home
          </button>
          <button
            onClick={() => nav("/subject/blockchain")}
            className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
          >
            🔗 Blockchain Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
