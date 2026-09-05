import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

function readInitial() {
  if (typeof document === "undefined") return "light";
  // index.html applies the saved theme before paint; mirror it here.
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode, blocked); the toggle still works for the session.
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to night shift"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Night shift"}
      className={`grid h-11 w-11 place-items-center border-2 border-ink bg-paper text-ink shadow-pixel-sm transition-transform duration-150 ease-retro hover:bg-orange active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ${className}`}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
