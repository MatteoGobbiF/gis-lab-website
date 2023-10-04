/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', ...defaultTheme.fontFamily.sans],
        'exo': ['Exo', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}