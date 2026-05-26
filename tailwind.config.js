/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Sora"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        "bg-primary": "#020617",
        "bg-secondary": "#0f172a",
        "card-bg": "rgba(15, 23, 42, 0.72)",
        "text-primary": "#f8fafc",
        "text-secondary": "#cbd5e1",
        "text-muted": "#94a3b8",
        "accent-cyan": "#22d3ee",
        "accent-blue": "#3b82f6",
        "accent-green": "#22c55e",
        "accent-purple": "#a855f7"
      },
      letterSpacing: {
        micro: "0.16em",
        label: "0.08em"
      },
      maxWidth: {
        content: "1180px",
        prose: "68ch"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      boxShadow: {
        cyber: "0 0 34px rgba(34, 211, 238, 0.15)",
        "cyber-strong": "0 0 48px rgba(34, 211, 238, 0.24)",
        green: "0 0 32px rgba(34, 197, 94, 0.15)"
      },
      keyframes: {
        gridDrift: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "48px 48px, 48px 48px" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.65)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        },
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(520%)" }
        }
      },
      animation: {
        gridDrift: "gridDrift 34s linear infinite",
        pulseLine: "pulseLine 3.6s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        scan: "scan 5s cubic-bezier(0.16, 1, 0.3, 1) infinite"
      }
    }
  },
  plugins: []
};
