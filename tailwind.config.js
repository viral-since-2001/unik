/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0B0B0B",
          bgSecondary: "#151515",
          gold: "#C8A96A",
          goldHover: "#D6B87C",
          textGray: "#B8B8B8",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
