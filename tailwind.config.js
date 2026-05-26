/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "ui-monospace", "monospace"],
        retro: ['"VT323"', '"Pixelify Sans"', "ui-monospace", "monospace"],
        sans: ['"Space Grotesk"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        orange: {
          DEFAULT: "#ff9f3f",
          deep: "#e8862a",
          glow: "#ffb968"
        },
        cream: {
          DEFAULT: "#eef0db",
          light: "#f5f6e3"
        },
        paper: "#fffdf4",
        ink: "#050505",
        coal: "#111111",
        brown: "#3d352c",
        rust: "#7a4d2a",
        success: "#22c55e",
        risk: "#ef4444",
        warn: "#f59e0b",
        violet: "#7c3aed"
      },
      boxShadow: {
        "pixel-sm": "3px 3px 0 #050505",
        pixel: "6px 6px 0 #050505",
        "pixel-lg": "8px 8px 0 #050505",
        "pixel-xl": "10px 10px 0 #050505",
        "pixel-cream": "6px 6px 0 #eef0db",
        "pixel-orange": "6px 6px 0 #e8862a"
      },
      transitionTimingFunction: {
        retro: "cubic-bezier(0.5, 0, 0.5, 1)"
      }
    }
  },
  plugins: []
};
