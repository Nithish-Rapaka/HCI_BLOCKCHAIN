import { useTheme } from "../App";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full text-center py-6 text-sm border-t ${
        theme === "dark"
          ? "text-purple-300 bg-purple-900/80 backdrop-blur border-purple-700/50"
          : "text-slate-600 bg-white border-slate-300"
      }`}
    >
      Designed & Developed with ❤️ by{" "}
      <span className="font-semibold text-cyan-400">IT-B Boys</span>
    </footer>
  );
}
