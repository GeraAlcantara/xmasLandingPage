/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPurple: {
          50: "#f9f9ff",
          100: "#d9d2e2",
          200: "#c6bbd4",
          300: "#e7e3f1",
          400: "#9e8bb8",
          500: "#592e8f",
          600: "#421d70",
          700: "#2b0b52",
        },
        brandRed: "#ff5151",
      },
    },
  },
  plugins: [],
};
