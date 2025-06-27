// tailwind.config.js
import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Outfit",
          "Poppins",
          "ui-sans-serif",
          "system-ui",
        ],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#0F1115",
        "card-bg": "#1F232A",
        border: "#2A2E36",
        placeholder: "#9CA3AF",
        primary: {
          DEFAULT: "#6366f1",
          light: "#8b5cf6",
          dark: "#4f46e5",
        },
        secondary: {
          DEFAULT: "#047857",
          light: "#065F46",
          dark: "#064E3B",
        },
        text: "#E5E7EB",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        pulseSlow: "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
