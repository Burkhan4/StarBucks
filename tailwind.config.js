/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./scr/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "1450px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        62: "62px",
      },
    },
  },
  plugins: [],
};
