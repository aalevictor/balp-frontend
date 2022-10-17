/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    },
    colors: {
      offwhite: '#FFF4D3',
      black:    '#000000',
      transparent: 'transparent',

      blue: {
        1: '#80A7C5',
        2: '#263F78',
        3: '#1B2C54',
        4: '#1A3167',
      },

      grey: {
        1: '#647288',
        2: '#4D5461',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
  safelist: [{
          pattern: /(bg|text|border)-blue-(1|2|3|4)/,
          pattern: /(bg|text|border)-grey-(1|2)/,
          pattern: /(bg|text|border)-(offwhite|black|transparent)/,    
      }

  ]
}