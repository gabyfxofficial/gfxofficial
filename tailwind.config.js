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
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
        space: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
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
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
