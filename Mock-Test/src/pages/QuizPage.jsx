import { useLocation, useNavigate } from "react-router-dom";
import { blockchain, hci } from "../data/data.js";
import { useState, useEffect, useRef, useMemo } from "react";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { type, week, random } = state || {};

  const data = useMemo(() => {
    const getAllQuestions = (source) => Object.values(source).flat();
    const allBlockchain = getAllQuestions(blockchain);
    const allHci = getAllQuestions(hci);

    if (random) {
      const count = Number(random) || 0;
      const all =
        type === "blockchain"
          ? allBlockchain
          : type === "hci"
            ? allHci
            : [...allBlockchain, ...allHci];

      return [...all].sort(() => 0.5 - Math.random()).slice(0, count);
    }

    if (week === "all") {
      return type === "blockchain"
        ? allBlockchain
        : type === "hci"
          ? allHci
          : [...allBlockchain, ...allHci];
    }

    if (type === "blockchain") return blockchain[week] || [];
    if (type === "hci") return hci[week] || [];
    if (type === "both")
      return [...(blockchain[week] || []), ...(hci[week] || [])];

    return [];
  }, [type, week, random]);

  // ===== STATES =====
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // ===== FIX DOUBLE VIEW ISSUE =====
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current || sessionStorage.getItem("visited")) return;

    hasRun.current = true;
    sessionStorage.setItem("visited", true);

    let v = localStorage.getItem("views") || 0;
    v = parseInt(v) + 1;

    localStorage.setItem("views", v);
  }, []);

  useEffect(() => {
    if (!state || !type) {
      nav("/");
    }
  }, [nav, state, type]);

  const quizLabel = useMemo(() => {
    const typeLabel =
      type === "blockchain"
        ? "Blockchain"
        : type === "hci"
          ? "HCI"
          : type === "both"
            ? "Combined"
            : "Quiz";

    if (random) return `${typeLabel} - ${random} Random Questions`;
    if (week === "all") return `${typeLabel} - Grand Test (All Weeks)`;
    return `${typeLabel} - Week ${week}`;
  }, [type, week, random]);

  // ===== SUBMIT LOGIC =====
  const handleSubmit = () => {
    let sc = 0;

    const normalize = (str) => str.replace(/\s+/g, " ").trim().toLowerCase();

    data.forEach((q, i) => {
      // ✅ HANDLE BOTH TYPES
      const correctAnswers = Array.isArray(q.answer)
        ? q.answer.map((idx) => normalize(q.options[idx])) // index → text
        : q.answer.split(",").map((a) => normalize(a));

      const userAnswers = (answers[i] || []).map(normalize);

      const isCorrect =
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every((ans) => userAnswers.includes(ans));

      if (isCorrect) sc++;
    });

    setScore(sc);
    setSubmitted(true);
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">{quizLabel}</h1>
        <p className="text-slate-300">
          Answer the questions below and use Next to move forward.
        </p>
      </div>

      {/* 🔥 QUESTION PALETTE */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {data.map((_, i) => {
          const isAnswered = answers[i] && answers[i].length > 0;

          return (
            <div
              key={i}
              onClick={() => setIndex(i)} // jump to question
              className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-white font-bold shadow-lg hover:scale-110 transition-all duration-200
          ${isAnswered ? "bg-green-500 hover:bg-green-600" : "bg-slate-600 hover:bg-slate-500"}
          ${index === i ? "ring-4 ring-purple-400 scale-110" : ""}`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="p-6 bg-slate-800 rounded-2xl flex flex-col">
        {/* QUESTION */}
        {data.length > 0 ? (
          <QuestionCard
            q={data[index]}
            index={index}
            selected={answers[index] || []} // ✅ always array
            setAnswers={setAnswers}
            submitted={submitted}
          />
        ) : (
          <div className="p-8 text-center text-white">
            No questions available for this quiz. Please go back and select a
            valid week or quiz type.
          </div>
        )}
        <div className="flex justify-between mt-8">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className="bg-slate-600 hover:bg-slate-700 disabled:bg-slate-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            ← Previous
          </button>

          {index === data.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-200"
            >
              🎯 Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            >
              Next →
            </button>
          )}
        </div>

        {/* QUESTION COUNT */}
        <p className="text-center mt-4">
          {index + 1} / {data.length}
        </p>

        {/* 👀 VIEW COUNT */}

        {/* RESULT */}
        {submitted && (
          <div className="mt-6 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              🎉 Score: {score} / {data.length}
            </h2>
            <p className="text-center text-slate-300 mb-6">
              {score === data.length
                ? "Perfect! 🏆"
                : score >= data.length * 0.7
                  ? "Great job! 👏"
                  : "Keep practicing! 💪"}
            </p>

            {/* NEXT QUIZ OPTIONS */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center text-white mb-4">
                Ready for another quiz?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => nav("/subject/blockchain")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  🔗 Blockchain Quiz
                </button>
                <button
                  onClick={() => nav("/subject/hci")}
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  🧠 HCI Quiz
                </button>
              </div>
              <button
                onClick={() => nav("/")}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200"
              >
                🏠 Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
