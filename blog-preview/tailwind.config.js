/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '425px',
    },
    fontFamily: {
      'Figtree': ['Figtree'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#F4D04E',
      'gray': {
        500: '#6B6B6B',
        950: '#111111',
      },
      'white': '#FFFFFF',
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['20px', '30px'],
      xl: ['24px', '36px']
    },
    extend: {
      spacing: {
        '50': '4px',
        '100': '8px',
        '150': '12px',
        '200': '16px',
        '250': '24px',
      },
      dropShadow: {
        '3xl': [
          '8px 8px 0px #000000'
        ]
      }
    },
  },
  plugins: [],
}

