/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Outfit': ['Outfit'],
    },
    extend: {
      colors: {
        'slate': {
          300: '#D5E1EF',
          500: '#68778D',
          900: '#1F314F'
        }
      },
      spacing: {
        200: '1rem',
        300: '1.5rem',
        500: '2.5rem'
      },
      fontSize: {
        base: ['0.9375rem', {
          lineHeight: '140%',
          letterSpacing: '0.0125rem',
          fontWeight: '400',
        }],
        lg: ['1.375rem', {
          lineHeight: '120%',
          letterSpacing: '0',
          fontWeight: '700',
        }]
      },
      width: {
        '9/10': '90%',
      },
      borderRadius: {
        'xl': '0.625rem',
        '3xl': '1.25rem'
      }
    },
    plugins: [],
  }
}
