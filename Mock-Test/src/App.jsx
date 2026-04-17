import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import QuizPage from "./pages/QuizPage";
import MultiAnswerPage from "./pages/MultiAnswerPage";
import BlockchainNotesPage from "./pages/BlockchainNotesPage";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div
          className={`min-h-screen flex flex-col ${
            theme === "dark"
              ? "bg-linear-to-br from-purple-900 via-purple-800 to-purple-900"
              : "bg-slate-100"
          }`}
        >
          {/* ✅ NAVBAR */}
          <Navbar />

          {/* ✅ MAIN CONTENT */}
          <main className="flex-1 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-6xl">
              {/* Glass Effect Container */}
              <div
                className={`backdrop-blur-lg shadow-2xl rounded-3xl p-4 md:p-6 transition-all duration-300 border ${
                  theme === "dark"
                    ? "bg-purple-800/50 border-purple-700/50"
                    : "bg-white/90 border-slate-300"
                }`}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/subject/:type" element={<SubjectPage />} />
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/multi-answer" element={<MultiAnswerPage />} />
                  <Route
                    path="/blockchain-notes"
                    element={<BlockchainNotesPage />}
                  />
                </Routes>
              </div>
            </div>
          </main>

          {/* ✅ FOOTER */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
