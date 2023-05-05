/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightGray: '#e3e9f1',
        lightWhite: '#fafafa',
      },
    },
    screens: {
      xxl: {max: '1440px'},
      xl: {max: '1200px'},
      lg: {max: '991px'},
      md: {max: '767px'},
      sm: {max: '575px'},
      xs: {max: '480px'},
    },
  },
  plugins: [],
}
