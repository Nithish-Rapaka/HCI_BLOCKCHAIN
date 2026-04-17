import { useEffect, useState } from "react";
import { blockchainExplanations } from "../data/explanations.js";
import { useTheme } from "../App";

export default function QuestionCard({
  q,
  index,
  selected,
  setAnswers,
  submitted,
  week = 1,
}) {
  const { theme } = useTheme();
  const [showExplanation, setShowExplanation] = useState(false);

  // ✅ normalize (fix spacing/case issues)
  const normalize = (str) => str.replace(/\s+/g, " ").trim().toLowerCase();

  // ✅ HANDLE BOTH TYPES (array + string)
  const correctAnswers = Array.isArray(q.answer)
    ? q.answer.map((i) => q.options[i]) // convert index → text
    : q.answer.split(",").map((a) => a.trim());

  // ✅ detect multi-answer
  const isMulti = correctAnswers.length > 1;

  // ✅ Get explanation from question object or from explanations map
  const getExplanation = () => {
    if (q.explanation) return q.explanation;
    if (blockchainExplanations[week] && blockchainExplanations[week][index]) {
      return blockchainExplanations[week][index];
    }
    return null;
  };

  const explanation = getExplanation();

  const handleClick = (opt) => {
    if (submitted) return;

    if (isMulti) {
      setAnswers((prev) => {
        const current = prev[index] || [];

        if (current.includes(opt)) {
          return {
            ...prev,
            [index]: current.filter((o) => o !== opt),
          };
        } else {
          return {
            ...prev,
            [index]: [...current, opt],
          };
        }
      });
    } else {
      setAnswers((prev) => ({
        ...prev,
        [index]: [opt],
      }));
    }
  };

  useEffect(() => {
    // View counting is now handled in QuizPage.jsx to prevent double counting
  }, []);

  return (
    <div
      className={`backdrop-blur-sm p-6 rounded-xl shadow-xl border ${theme === "dark" ? "bg-purple-800/50 border-purple-700" : "bg-white/90 border-slate-300"}`}
    >
      <h2
        className={`font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {index + 1}. {q.q}
      </h2>

      {/* ✅ show label only for multi */}
      {isMulti && (
        <p
          className={`text-sm mb-4 ${theme === "dark" ? "text-blue-300" : "text-slate-600"}`}
        >
          Select multiple answers
        </p>
      )}

      <div className="space-y-4 mb-4">
        {q.options.map((opt, i) => {
          const isSelected = selected.some(
            (s) => normalize(s) === normalize(opt),
          );

          const isCorrect = correctAnswers.some(
            (ans) => normalize(ans) === normalize(opt),
          );

          let color =
            theme === "dark"
              ? "bg-purple-700/70 border-purple-600 hover:bg-purple-600/70"
              : "bg-slate-200 border-slate-300 hover:bg-slate-300";

          // ✅ FINAL COLOR LOGIC
          if (submitted) {
            if (isCorrect) {
              color = "bg-green-600/80 border-green-500 hover:bg-green-600/90"; // show ALL correct
            } else if (isSelected) {
              color = "bg-red-600/80 border-red-500 hover:bg-red-600/90"; // wrong selected
            }
          } else if (isSelected) {
            color =
              theme === "dark"
                ? "bg-cyan-600/80 border-cyan-500 hover:bg-cyan-600/90"
                : "bg-cyan-200 border-cyan-400 hover:bg-cyan-300";
          }

          return (
            <div
              key={i}
              onClick={() => handleClick(opt)}
              className={`p-4 rounded-xl cursor-pointer border-2 flex items-center gap-3 hover:scale-102 transition-all duration-200 ${color} ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              {/* ✅ checkbox ONLY for multi */}
              {isMulti && (
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="w-4 h-4 accent-cyan-500"
                />
              )}

              <span className="text-base">{opt}</span>
            </div>
          );
        })}
      </div>

      {/* ✅ EXPLANATION TOGGLE - SHOW AFTER SUBMISSION */}
      {submitted && explanation && (
        <div className="mt-4">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${theme === "dark" ? "bg-amber-600/50 hover:bg-amber-600/70 text-amber-100 border-amber-500/30" : "bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300"}`}
          >
            <span>{showExplanation ? "−" : "+"}</span>
            <span className="font-semibold">
              {showExplanation ? "Hide Explanation" : "Show Explanation"}
            </span>
          </button>

          {showExplanation && (
            <div
              className={`mt-3 p-4 rounded-lg border ${theme === "dark" ? "bg-amber-900/20 border-amber-700/40 text-amber-50" : "bg-amber-50 border-amber-200 text-amber-900"}`}
            >
              <p className="text-sm leading-relaxed">{explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
