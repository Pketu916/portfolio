/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(34 211 238)", // cyan-400 equivalent
          light: "rgb(103 232 249)", // cyan-300
          dark: "rgb(6 182 212)", // cyan-500
        },
        accent: {
          DEFAULT: "#f97316", // orange-500
          light: "#fb923c", // orange-400
          dark: "#ea580c", // orange-600
        },
      },
    },
  },
  plugins: [],
};
