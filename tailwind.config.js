/** @type {import('tailwindcss').Config} */

// Theme-able colors resolve to CSS variables defined in src/index.css so the
// same utilities work in light mode, dark mode, and inside inverted bands.
const themed = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`;

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
        page: themed("page"),
        orange: {
          DEFAULT: themed("orange"),
          deep: themed("orange-deep"),
          glow: themed("orange-glow")
        },
        cream: {
          DEFAULT: themed("cream"),
          light: themed("cream-light")
        },
        paper: themed("paper"),
        ink: themed("ink"),
        coal: themed("coal"),
        brown: themed("brown"),
        rust: themed("rust"),
        success: "#22c55e",
        risk: "#ef4444",
        warn: "#f59e0b",
        violet: "#7c3aed"
      },
      boxShadow: {
        "pixel-sm": "3px 3px 0 var(--ink)",
        pixel: "6px 6px 0 var(--ink)",
        "pixel-lg": "8px 8px 0 var(--ink)",
        "pixel-xl": "10px 10px 0 var(--ink)",
        "pixel-cream": "6px 6px 0 var(--cream)",
        "pixel-orange": "6px 6px 0 var(--orange-deep)"
      },
      transitionTimingFunction: {
        retro: "cubic-bezier(0.5, 0, 0.5, 1)"
      }
    }
  },
  plugins: []
};
