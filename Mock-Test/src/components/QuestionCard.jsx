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
    let views = localStorage.getItem("views") || 0;
    views = parseInt(views) + 1;
    localStorage.setItem("views", views);
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">
        {index + 1}. {q.q}
      </h2>

      {/* ✅ show label only for multi */}
      {isMulti && (
        <p className="text-sm text-gray-500 mb-3">Select multiple answers</p>
      )}

      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isSelected = selected.some(
            (s) => normalize(s) === normalize(opt),
          );

          const isCorrect = correctAnswers.some(
            (ans) => normalize(ans) === normalize(opt),
          );

          let color = "bg-gray-50";

          // ✅ FINAL COLOR LOGIC
          if (submitted) {
            if (isCorrect) {
              color = "bg-green-200"; // show ALL correct
            } else if (isSelected) {
              color = "bg-red-200"; // wrong selected
            }
          } else if (isSelected) {
            color = "bg-blue-200";
          }

          return (
            <div
              key={i}
              onClick={() => handleClick(opt)}
              className={`p-3 rounded cursor-pointer border flex items-center gap-2 ${color}`}
            >
              {/* ✅ checkbox ONLY for multi */}
              {isMulti && (
                <input type="checkbox" checked={isSelected} readOnly />
              )}

              {opt}
            </div>
          );
        })}
      </div>
    </div>
  );
}
