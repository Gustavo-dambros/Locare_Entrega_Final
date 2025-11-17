/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwind-preset.js')
  ],
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
