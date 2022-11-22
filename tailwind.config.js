/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#5E8B7E',
        secondary: '#969696',
        three: '#080B10',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
