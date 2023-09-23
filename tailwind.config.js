/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ileven: '#79AC78',
      },
    },
  },
  plugins: [],
}
