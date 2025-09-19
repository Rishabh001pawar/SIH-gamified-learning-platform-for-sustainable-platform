/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'farm-green-dark': '#558B2F',
        'farm-green-base': '#8BC34A',
        'farm-green-light': '#C5E1A5',
        'farm-yellow': '#FBC02D',
        'farm-brown-dark': '#4E342E',
        'farm-brown-base': '#795548',
        'farm-bg': '#FFFDE7',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
