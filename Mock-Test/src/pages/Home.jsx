import { useNavigate } from "react-router-dom";
import { useTheme } from "../App";

export default function Home() {
  const nav = useNavigate();
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`min-h-screen px-4 py-12 ${
          theme === "dark"
            ? "bg-linear-to-br from-purple-950 via-purple-900 to-slate-900"
            : "bg-slate-100"
        }`}
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className={theme === "dark" ? "text-white" : "text-black"}>
            <div
              className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold mb-6 border ${
                theme === "dark"
                  ? "bg-cyan-500/10 text-cyan-200 border-cyan-500/20"
                  : "bg-cyan-100 text-cyan-800 border-cyan-300"
              }`}
            >
              <span className="text-2xl">🔗</span>
              Blockchain Academy — Learn how trust is built without a middleman
            </div>

            <h1
              className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Blockchain is a distributed tamper-proof ledger that powers modern
              digital trust.
            </h1>

            <p
              className={`text-lg md:text-xl mb-8 leading-relaxed max-w-3xl ${
                theme === "dark" ? "text-blue-200" : "text-slate-600"
              }`}
            >
              Explore the technology behind secure transactions, immutable
              records, consensus protocols, and real-world blockchain systems in
              a single practice app.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div
                className={`rounded-3xl p-6 shadow-xl border ${
                  theme === "dark"
                    ? "bg-purple-900/80 border-cyan-500/10"
                    : "bg-white border-slate-300"
                }`}
              >
                <h2 className="text-xl font-bold mb-2">Learn</h2>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-blue-200" : "text-slate-600"
                  }`}
                >
                  Blockchain definitions, cryptography, and consensus made
                  simple.
                </p>
              </div>
              <div
                className={`rounded-3xl p-6 shadow-xl border ${
                  theme === "dark"
                    ? "bg-purple-900/80 border-purple-500/10"
                    : "bg-white border-slate-300"
                }`}
              >
                <h2 className="text-xl font-bold mb-2">Practice</h2>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-blue-200" : "text-slate-600"
                  }`}
                >
                  Answer quiz questions for each week with instant feedback and
                  explanations.
                </p>
              </div>
              <div
                className={`rounded-3xl p-6 shadow-xl border ${
                  theme === "dark"
                    ? "bg-purple-900/80 border-violet-500/10"
                    : "bg-white border-slate-300"
                }`}
              >
                <h2 className="text-xl font-bold mb-2">Build</h2>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-blue-200" : "text-slate-600"
                  }`}
                >
                  Understand real blockchain use cases like supply chain,
                  identity, and interoperability.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              onClick={() => nav("/subject/blockchain")}
              className="group cursor-pointer rounded-3xl border border-cyan-500/20 bg-linear-to-br from-blue-700 to-cyan-600 p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">🧪</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Practice All
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Test your knowledge across all blockchain topics, from
                cryptography to consensus and interoperability.
              </p>
            </div>

            <div
              onClick={() => nav("/blockchain-notes")}
              className="group cursor-pointer rounded-3xl border border-amber-500/20 bg-linear-to-br from-orange-600 to-amber-500 p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">📚</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Study Notes
              </h2>
              <p className="text-amber-100 leading-relaxed">
                Read clear blockchain notes that explain why this technology
                matters and how it works.
              </p>
            </div>

            <div
              onClick={() => nav("/multi-answer")}
              className="group cursor-pointer rounded-3xl border border-violet-500/20 bg-linear-to-br from-purple-700 to-blue-600 p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">⭐</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Practice Multi-Answer
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Strengthen your understanding with select-all-that-apply
                blockchain questions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-purple-500/20 bg-purple-900/80 p-5 shadow-xl">
              <p className="text-5xl">🔐</p>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Secure by design
              </h3>
              <p className="text-purple-200 text-sm">
                Blockchain uses hashes and signatures to make records
                tamper-proof and verifiable.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-500/20 bg-purple-900/80 p-5 shadow-xl">
              <p className="text-5xl">🌐</p>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Distributed network
              </h3>
              <p className="text-purple-200 text-sm">
                Data is shared across many nodes, so there is no single point of
                failure or control.
              </p>
            </div>
            <div className="rounded-3xl border border-violet-500/20 bg-purple-900/80 p-5 shadow-xl">
              <p className="text-5xl">⚖️</p>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                Consensus-driven
              </h3>
              <p className="text-purple-200 text-sm">
                Agreement is reached through consensus protocols like PoW, PBFT,
                and PoS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
