/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#2A2141',
      },
      screens: {
        'tall': { 'raw': '(max-height: 600px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}