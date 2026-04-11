import { useEffect } from "react";

export default function QuestionCard({
  q,
  index,
  selected,
  setAnswers,
  submitted,
}) {
  // ✅ normalize (fix spacing/case issues)
  const normalize = (str) => str.replace(/\s+/g, " ").trim().toLowerCase();

  // ✅ HANDLE BOTH TYPES (array + string)
  const correctAnswers = Array.isArray(q.answer)
    ? q.answer.map((i) => q.options[i]) // convert index → text
    : q.answer.split(",").map((a) => a.trim());

  // ✅ detect multi-answer
  const isMulti = correctAnswers.length > 1;

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
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-700">
      <h2 className="font-semibold mb-3 text-white">
        {index + 1}. {q.q}
      </h2>

      {/* ✅ show label only for multi */}
      {isMulti && (
        <p className="text-sm text-slate-400 mb-4">Select multiple answers</p>
      )}

      <div className="space-y-4">
        {q.options.map((opt, i) => {
          const isSelected = selected.some(
            (s) => normalize(s) === normalize(opt),
          );

          const isCorrect = correctAnswers.some(
            (ans) => normalize(ans) === normalize(opt),
          );

          let color = "bg-slate-700/70 border-slate-600 hover:bg-slate-600/70";

          // ✅ FINAL COLOR LOGIC
          if (submitted) {
            if (isCorrect) {
              color = "bg-green-600/80 border-green-500 hover:bg-green-600/90"; // show ALL correct
            } else if (isSelected) {
              color = "bg-red-600/80 border-red-500 hover:bg-red-600/90"; // wrong selected
            }
          } else if (isSelected) {
            color = "bg-blue-600/80 border-blue-500 hover:bg-blue-600/90";
          }

          return (
            <div
              key={i}
              onClick={() => handleClick(opt)}
              className={`p-4 rounded-xl cursor-pointer border-2 flex items-center gap-3 text-white hover:scale-102 transition-all duration-200 ${color}`}
            >
              {/* ✅ checkbox ONLY for multi */}
              {isMulti && (
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="w-4 h-4 accent-blue-500"
                />
              )}

              <span className="text-base">{opt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
