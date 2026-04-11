import { useNavigate } from "react-router-dom";
export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-white animate-pulse">
          🚀 Mock Test App
        </h1>

        <p className="text-slate-300 mb-12 text-center text-lg">
          Master Blockchain & HCI with interactive quizzes
        </p>

        {/* CARD CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* BLOCKCHAIN CARD */}
          <div
            onClick={() => nav("/subject/blockchain")}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 border border-blue-500/20 group"
          >
            <div className="text-6xl mb-4 group-hover:animate-bounce">🔗</div>
            <h2 className="text-2xl font-bold text-white mb-3">Blockchain</h2>
            <p className="text-blue-100 text-base">
              Test your knowledge on blockchain concepts, consensus, and crypto.
            </p>
          </div>

          {/* HCI CARD */}
          <div
            onClick={() => nav("/subject/hci")}
            className="bg-gradient-to-br from-green-600 to-teal-700 rounded-3xl shadow-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-green-500/25 border border-green-500/20 group"
          >
            <div className="text-6xl mb-4 group-hover:animate-bounce">🧠</div>
            <h2 className="text-2xl font-bold text-white mb-3">HCI</h2>
            <p className="text-green-100 text-base">
              Explore usability, design principles, and user experience topics.
            </p>
          </div>

          {/* COMBINED CARD */}
          <div
            onClick={() => nav("/subject/both")}
            className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl shadow-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 border border-purple-500/20 group"
          >
            <div className="text-6xl mb-4 group-hover:animate-bounce">🔀</div>
            <h2 className="text-2xl font-bold text-white mb-3">Combined</h2>
            <p className="text-purple-100 text-base">
              Mix of Blockchain & HCI questions for full practice.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-12 text-lg text-slate-400 animate-pulse">
          🚀 Practice daily and improve your score!
        </p>
      </div>
    </>
  );
}
