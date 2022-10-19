/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
    },
    fontFamily: {
      sans: 'Inter, sans-serif'
    },
    colors: {
      offwhite: '#FFF4D3',
      black:    '#000000',
      transparent: 'transparent',

      blue: {
        '1': '#80A7C5',
        '2': '#263F78',
        '3': '#1B2C54',
        '4': '#1A3167',
      },

      grey: {
        '1': '#647288',
        '2': '#4D5461',
      },

      bad: '#FF0000',
      regular: '#FFB744',
      good: '#2196F3',
      great: '#0AFF67',
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
      scrollbar: ['rounded']
  },
  safelist: [{
          pattern: /(bg|text|border)-blue-(1|2|3|4)/,
          pattern: /(bg|text|border)-grey-(1|2)/,
          pattern: /(bg|text|border)-(offwhite|black|transparent)/,    
          pattern: /text-(xs|sm|md|lg|xl)/,
          pattern: /font-(normal|semibold|bold|extrabold|black)/
      }
  ]
}