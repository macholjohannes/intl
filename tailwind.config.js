const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      mjgray: '#f8f8f8',
      blue01: '#024fa2',
      grayfooter: '#f8f9fa',
      gray300: '#D1D5DB',
      graysidebar: '#f8f9fa',
      grayfront: '#343a40',
      grayoutline: '#c2c2c2',
      yellowbutton: '#ffc107',
      error: 'red',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
