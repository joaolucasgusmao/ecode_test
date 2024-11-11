/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        white: "#FFFFFF",
        gray: "#C4C4C4",
      },
      borderWidth: {
        6: "1px",
        7: "2px",
      },
      borderRadius: {
        50: "50%",
      },
      brightness: {
        60: "0.60",
      },
    },
    screens: {
      "max-sm": { max: "467px" },
      "max-md": { max: "1000px" },
      "max-md-2": { max: "1000px" },
      "max-xl": { max: "1560px" },
    },
  },
  plugins: [],
};
