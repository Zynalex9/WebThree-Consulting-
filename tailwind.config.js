/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Neue: ["Neue", "Arial", "sans-serif"],
        Thunder: ["Thunder", "Arial", "sans-serif"],
      },
      colors: {
        "main-green": "#95FF00",
        "main-white": "#DCDCDC",
      },
    },
  },
  plugins: [],
};
