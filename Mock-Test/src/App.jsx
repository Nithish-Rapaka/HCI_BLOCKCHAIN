import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import QuizPage from "./pages/QuizPage";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* ✅ NAVBAR */}
        <Navbar />

        {/* ✅ MAIN CONTENT */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl">
            {/* Glass Effect Container */}
            <div className="bg-slate-800/90 backdrop-blur-lg shadow-2xl rounded-3xl p-4 md:p-6 transition-all duration-300 border border-slate-700/50">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subject/:type" element={<SubjectPage />} />
                <Route path="/quiz" element={<QuizPage />} />
              </Routes>
            </div>
          </div>
        </main>

        {/* ✅ FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
