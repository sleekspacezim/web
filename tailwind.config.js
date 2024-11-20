/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4D09CD",
        lighterPrimary: "#d1c0e3",
        lightPrimary: "rgba(77,9,205,0.5)",
        iceWhite: "aliceblue",
        modalOverlay: "rgba(0, 0, 0, 0.8)",
        textGray: "#7c7484",
        shadyGreen: "#1dac08",
        darkGray: "#1B1B1C",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "purple-black": "linear-gradient(120deg, #7c7484,#000000)",
      },
      boxShadow: {
        'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
