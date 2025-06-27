// tailwind.config.js
import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "Roboto", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        bg: "#0F1115",
        "card-bg": "#1F232A",
        border: "#2A2E36",
        placeholder: "#9CA3AF",
        primary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
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
