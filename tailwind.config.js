/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'purpleP': '#8083ff',
        'blue-main': '#4D70EF'
      },
    },
  },
  plugins: [],
}

