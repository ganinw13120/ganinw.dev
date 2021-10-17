const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'cousine': ['Cousine', 'sans-serif'],
    },
    colors : {
      'dark-primary' : '#0378A6',
      black : '#24292f',
      white : colors.white,
      lightblue : '#0099CA',
      blue : '#1849A8',
      red : colors.red
    },
    height : {
      most : '80vh',
      half : '50vh'
    },
    extend: {
      zIndex: {
       '-2': '-2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
