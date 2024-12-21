/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: { Bebas: ["Bebas Neue", "cursive"], Poppins: ["Poppins"] },
      colors: { brown: "#6B6343", neolime: "#DDFD7F" },
    },
  },
  plugins: [],
};
