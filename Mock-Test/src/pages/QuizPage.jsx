import { useLocation } from "react-router-dom";
import { blockchain, hci } from "../data/data.js";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const { state } = useLocation();
  const { type, week, random } = state;

  let data = [];

  // ===== DATA SELECTION =====
  if (random) {
    let all = [];

    if (type === "blockchain") all = Object.values(blockchain).flat();
    else if (type === "hci") all = Object.values(hci).flat();
    else
      all = [...Object.values(blockchain).flat(), ...Object.values(hci).flat()];

    data = all.sort(() => 0.5 - Math.random()).slice(0, random);
  } else {
    if (type === "blockchain") data = blockchain[week];
    if (type === "hci") data = hci[week];
    if (type === "both") data = [...blockchain[week], ...hci[week]];
  }

  // ===== STATES =====
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [views, setViews] = useState(0);

  // ===== FIX DOUBLE VIEW ISSUE =====
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current || sessionStorage.getItem("visited")) return;

    hasRun.current = true;
    sessionStorage.setItem("visited", true);

    let v = localStorage.getItem("views") || 0;
    v = parseInt(v) + 1;

    localStorage.setItem("views", v);
    setViews(v);
  }, []);

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
      {/* 🔥 QUESTION PALETTE */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {data.map((_, i) => {
          const isAnswered = answers[i] && answers[i].length > 0;

          return (
            <div
              key={i}
              onClick={() => setIndex(i)} // jump to question
              className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-white font-semibold
          ${isAnswered ? "bg-green-500" : "bg-red-500"}
          ${index === i ? "ring-4 ring-blue-300" : ""}
        `}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="p-4 min-h-screen bg-gray-100 flex flex-col">
        {/* QUESTION */}
        <QuestionCard
          q={data[index]}
          index={index}
          selected={answers[index] || []} // ✅ always array
          setAnswers={setAnswers}
          submitted={submitted}
        />
        {/* NAV BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Prev
          </button>

          {index === data.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Next
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
          <div className="mt-6 bg-white p-4 rounded shadow text-center">
            <h2 className="text-xl font-bold">
              🎉 Score: {score} / {data.length}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
