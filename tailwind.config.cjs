/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        gilda: ["Gilda Display", "serif"],
      },
      colors: {
        bgSoft: "#222222",
        bgDark: "#1B1B1B",
        bgCoffee: "#282828",
        primary: "#AA8453",
        secondary: "#ADADAD",
        starColor: "#E4A853",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
