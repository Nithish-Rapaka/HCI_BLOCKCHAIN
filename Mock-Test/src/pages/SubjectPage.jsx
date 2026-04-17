import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../App";

export default function SubjectPage() {
  const { type } = useParams();
  const nav = useNavigate();
  const { theme } = useTheme();

  // Redirect non-blockchain to blockchain
  if (type !== "blockchain") {
    return (
      <div
        className={`text-center py-12 min-h-screen ${theme === "dark" ? "bg-linear-to-br from-blue-950 via-blue-900 to-slate-950" : "bg-slate-100"}`}
      >
        <h1
          className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Blockchain Academy
        </h1>
        <p
          className={`mb-6 ${theme === "dark" ? "text-blue-200" : "text-slate-700"}`}
        >
          This platform is dedicated to Blockchain practice only.
        </p>
        <button
          onClick={() => nav("/")}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`p-6 rounded-2xl min-h-screen ${theme === "dark" ? "bg-purple-800/50" : "bg-white"}`}
      >
        <h1
          className={`text-3xl font-bold text-center mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Select Week (BLOCKCHAIN)
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(12)].map((_, i) => (
            <button
              key={i}
              onClick={() => nav("/quiz", { state: { type, week: i + 1 } })}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Week {i + 1}
            </button>
          ))}

          <button
            onClick={() => nav("/quiz", { state: { type, week: "all" } })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            All Weeks
          </button>
        </div>

        {/* FINAL MOCK */}
        <div className="mt-12 text-center">
          <h2
            className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            🎯 Final Mock Test
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[10, 20, 50].map((n) => (
              <button
                key={n}
                onClick={() => nav("/quiz", { state: { type, random: n } })}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                {n} Questions
              </button>
            ))}

            <button
              onClick={() => nav("/quiz", { state: { type, week: "all" } })}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Grand Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
