/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      fontSize: {
        '2xl': ['26px', '34px']
      },
      colors: {
        Red: 'hsl(0, 78%, 62%)',
        Cyan: 'hsl(180, 62%, 55%)',
        Orange: 'hsl(34, 97%, 64%)',
        Blue: 'hsl(212, 86%, 64%)',
        Very_Dark_Blue: 'hsl(234, 12%, 34%)',
        Grayish_Blue: 'hsl(229, 6%, 66%)',
        Very_Light_Gray: 'hsl(0, 0%, 98%)'
      },
      width: {
        '9/10': '90%',
      },
      spacing: {
        '136': '34rem',
        '88': '22rem',
        '56': '14rem',
      },
      screens: {
        'lg': '1120px',
        'md': '1024px'
      },
      boxShadow: {
        'md': ['0px 9px 15px -5px rgba(163, 168, 174, 1);']
      }
    },
  },
  plugins: [],
}

