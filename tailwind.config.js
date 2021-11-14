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
      black : '#262626',
      white : '#F2F2F2',
      'plain-white' : colors.white,
      brown : '#BFAA8F',
      green : '#21BF65',
      emerald : '#39BF81',
      lightblue : '#0099CA',
      gray : colors.gray,
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
