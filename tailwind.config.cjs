/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo Paaji 2', ...defaultTheme.fontFamily.sans],
        kelly: ['Kelly Slab', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        plaster: ['Plaster', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}