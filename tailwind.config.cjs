/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8482f",
        secondary: "#ff7337",
        text: "#333",
        secondary_text: "#808080",
        cta: "#fb5533",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P,"', "cursive"],
      },
    },
  },
  plugins: [],
};
