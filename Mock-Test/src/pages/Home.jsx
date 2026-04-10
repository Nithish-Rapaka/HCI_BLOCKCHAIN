import { useNavigate } from "react-router-dom";
export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4">
        {/* TITLE */}
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
          📘 Mock Test App
        </h1>

        <p className="text-gray-600 mb-8 text-center">
          Practice Blockchain & HCI with interactive quizzes
        </p>

        {/* CARD CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* BLOCKCHAIN CARD */}
          <div
            onClick={() => nav("/subject/blockchain")}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition transform hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-indigo-600 mb-2">
              🔗 Blockchain
            </h2>
            <p className="text-gray-600 text-sm">
              Test your knowledge on blockchain concepts, consensus, and crypto.
            </p>
          </div>

          {/* HCI CARD */}
          <div
            onClick={() => nav("/subject/hci")}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition transform hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-green-600 mb-2">🧠 HCI</h2>
            <p className="text-gray-600 text-sm">
              Explore usability, design principles, and user experience topics.
            </p>
          </div>

          {/* COMBINED CARD */}
          <div
            onClick={() => nav("/subject/both")}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition transform hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-purple-600 mb-2">
              🔀 Combined
            </h2>
            <p className="text-gray-600 text-sm">
              Mix of Blockchain & HCI questions for full practice.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-10 text-sm text-gray-500">
          🚀 Practice daily and improve your score!
        </p>
      </div>
    </>
  );
}
