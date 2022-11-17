/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f59e0b',
        dark: '#0f172a',
        grey: '#64748b',
        silver: '#cbd5e1'
      },
      // screens: {
      //   '2xl': '1320px',
      // }
    },
  },
  plugins: [],
}
