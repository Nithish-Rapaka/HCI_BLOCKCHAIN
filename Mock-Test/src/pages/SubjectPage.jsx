import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SubjectPage() {
  const { type } = useParams();
  const nav = useNavigate();

  return (
    <>
      <div className="p-4 min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-center mb-4">
          Select Week ({type})
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {[...Array(11)].map((_, i) => (
            <button
              key={i}
              onClick={() => nav("/quiz", { state: { type, week: i + 1 } })}
              className="bg-white p-3 rounded shadow"
            >
              Week {i + 1}
            </button>
          ))}
        </div>

        {/* FINAL MOCK */}
        <div className="mt-10 text-center">
          <h2 className="font-bold mb-3">Final Mock</h2>

          <div className="flex justify-center gap-3">
            {[10, 20, 50].map((n) => (
              <button
                key={n}
                onClick={() => nav("/quiz", { state: { type, random: n } })}
                className="bg-black text-white px-4 py-2 rounded"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
