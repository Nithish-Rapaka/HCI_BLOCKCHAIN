import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../App";

export default function Navbar() {
  const nav = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [views] = useState(() => {
    const viewCount = localStorage.getItem("views") || 0;
    return parseInt(viewCount);
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div
      className={`shadow-lg sticky top-0 z-50 border-b ${
        theme === "dark"
          ? "bg-linear-to-r from-purple-900 via-purple-800 to-purple-900 text-white border-purple-500/20"
          : "bg-white text-slate-800 border-slate-300"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div
          onClick={() => nav("/")}
          className="cursor-pointer flex flex-col min-w-0"
        >
          <span
            className={`text-base sm:text-lg md:text-xl font-bold tracking-wide truncate ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            🔗 Academy
          </span>
          <span
            className={`text-xs hidden sm:block ${theme === "dark" ? "text-blue-200" : "text-slate-600"}`}
          >
            Master Blockchain
          </span>
        </div>

        {/* DESKTOP MENU - RIGHT SIDE */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3">
          <div
            className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-lg backdrop-blur ${
              theme === "dark"
                ? "text-purple-100 bg-purple-950/50"
                : "text-slate-700 bg-slate-200"
            }`}
          >
            👁️ {views}
          </div>
          <button
            onClick={() => nav("/blockchain-notes")}
            className={`px-2 md:px-3 py-1.5 rounded-lg transition-all duration-300 font-semibold text-xs md:text-sm whitespace-nowrap ${
              theme === "dark"
                ? "bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                : "bg-amber-500 hover:bg-amber-600 text-white"
            }`}
            title="Blockchain concepts and notes"
          >
            📚 Notes
          </button>
          <button
            onClick={() => nav("/multi-answer")}
            className={`px-2 md:px-3 py-1.5 rounded-lg transition-all duration-300 font-semibold text-xs md:text-sm whitespace-nowrap ${
              theme === "dark"
                ? "bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                : "bg-purple-500 hover:bg-purple-600 text-white"
            }`}
            title="Multi-answer questions with explanations"
          >
            ⭐ Practice
          </button>
          <button
            onClick={toggleTheme}
            className={`px-2 md:px-3 py-1.5 rounded-lg transition-all duration-300 font-semibold text-xs md:text-sm ${
              theme === "dark"
                ? "bg-slate-700 hover:bg-slate-600 text-white"
                : "bg-slate-300 hover:bg-slate-400 text-slate-800"
            }`}
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => nav("/")}
            className={`px-2 md:px-3 py-1.5 rounded-lg transition-all duration-300 font-semibold text-xs md:text-sm ${
              theme === "dark"
                ? "bg-purple-700/50 hover:bg-purple-600/70 backdrop-blur"
                : "bg-slate-200 hover:bg-slate-300 text-slate-800"
            }`}
          >
            Home
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`sm:hidden p-2 rounded-lg transition-all duration-300 ${
            theme === "dark"
              ? "bg-purple-700/50 hover:bg-purple-600/70"
              : "bg-slate-200 hover:bg-slate-300"
          }`}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-t ${
            theme === "dark"
              ? "bg-purple-800/50 border-purple-700"
              : "bg-slate-50 border-slate-300"
          }`}
        >
          <div className="px-3 py-3 flex flex-col gap-2">
            <div
              className={`text-sm px-3 py-2 rounded-lg backdrop-blur ${
                theme === "dark"
                  ? "text-purple-100 bg-purple-950/50"
                  : "text-slate-700 bg-slate-200"
              }`}
            >
              👁️ {views} views
            </div>
            <button
              onClick={() => {
                nav("/");
                closeMobileMenu();
              }}
              className={`w-full px-3 py-2 rounded-lg transition-all duration-300 font-semibold text-sm text-left ${
                theme === "dark"
                  ? "bg-purple-700/50 hover:bg-purple-600/70 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-800"
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => {
                nav("/blockchain-notes");
                closeMobileMenu();
              }}
              className={`w-full px-3 py-2 rounded-lg transition-all duration-300 font-semibold text-sm text-left ${
                theme === "dark"
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              📚 Notes
            </button>
            <button
              onClick={() => {
                nav("/multi-answer");
                closeMobileMenu();
              }}
              className={`w-full px-3 py-2 rounded-lg transition-all duration-300 font-semibold text-sm text-left ${
                theme === "dark"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
            >
              ⭐ Practice
            </button>
            <button
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
              className={`w-full px-3 py-2 rounded-lg transition-all duration-300 font-semibold text-sm text-left ${
                theme === "dark"
                  ? "bg-slate-700 hover:bg-slate-600 text-white"
                  : "bg-slate-300 hover:bg-slate-400 text-slate-800"
              }`}
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
