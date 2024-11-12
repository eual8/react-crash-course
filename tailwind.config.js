/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}