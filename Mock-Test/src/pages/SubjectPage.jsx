import { useParams, useNavigate } from "react-router-dom";

export default function SubjectPage() {
  const { type } = useParams();
  const nav = useNavigate();

  return (
    <>
      <div className="p-6 bg-slate-800 rounded-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Select Week ({type.toUpperCase()})
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(11)].map((_, i) => (
            <button
              key={i}
              onClick={() => nav("/quiz", { state: { type, week: i + 1 } })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Week {i + 1}
            </button>
          ))}
        </div>

        {/* FINAL MOCK */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
            🎯 Final Mock Test
          </h2>

          <div className="flex justify-center gap-4">
            {[10, 20, 50].map((n) => (
              <button
                key={n}
                onClick={() => nav("/quiz", { state: { type, random: n } })}
                className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                {n} Questions
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
