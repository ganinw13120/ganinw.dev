const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      // black : '#11111f'
      black : '#24292f',
      white : colors.white,
      lightblue : '#0099CA',
      blue : '#1849A8'
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
