/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    "@tailwindcss/line-clamp",
    "@tailwindcss/aspect-ratio",
    "tw-elements/dist/plugin"
  ],
}
