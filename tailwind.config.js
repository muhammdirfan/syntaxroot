/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

{
  /* <style> */
}
// import 'https://fonts.googleapis.com/css2?family=Sen&display=swap'
// </style>

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      blue50: "#174781",
      blue100: "#4EAAF3",
      blue150: "#3FAEFF82",
      blue200: "#3FAEFF",
      blue250: "#DAF2FF",
      blue300: "#2F7BB8",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      light100: "#E1EFF8",
      "gray-dark": "#273444",
      gray50: "#636363",
      gray100: "#788199",
      gray200: "#F5F7FB",
      gray300: "#F5F5F5",
      gray400: "#F9F9F9",
      gray500: "#E5E5E5",
      dark50: "#263238",
    },
    fontFamily: {
      sen: ["Sen", "sans-serif"],
      Roboto: ["Roboto Mono", "monospace"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
