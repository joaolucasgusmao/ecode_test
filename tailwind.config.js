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
      },
      borderWidth: {
        6: "1px",
        7: "2px"
      },
      borderRadius: {
        '50': '50%'
      }
    },
  },
  plugins: [],
};
