/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        white: '#ffffff',
        light: '#F6F7FB',
        gray: '#8b949e',
        dark: '#0E1117',
        primary: '#3587FB',
        'primary-dark': '#3178c6',
      },
    },
  },
  plugins: [],
};
