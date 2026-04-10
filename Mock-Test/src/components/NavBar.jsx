import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => nav("/")}
          className="cursor-pointer flex flex-col"
        >
          <span className="text-lg md:text-xl font-bold tracking-wide">
            🧠 Mock Test
          </span>
          <span className="text-xs text-white/80 hidden sm:block">
            Practice • Improve • Succeed
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => nav("/")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-1.5 rounded-lg transition-all duration-300"
          >
            Home
          </button>

        </div>

      </div>
    </div>
  );
}