/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'interBold': ['Inter-Bold', 'sans-serif'],
      'interSemiBold': ['Inter-SemiBold', 'sans-serif'],
      'interRegular': ['Inter-Regular', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'hsl(0, 0%, 100%)',
      'green': 'hsl(75, 94%, 57%)',
      'gray': {
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 12%)',
        900: 'hsl(0, 0%, 8%)',
      },
    },
    screens: {
      'sm': '400px',
    },
    extend: {},
    plugins: [],
  }
}
