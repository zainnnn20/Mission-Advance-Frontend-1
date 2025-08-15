/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-background': '#FFFBF5',
        'brand-orange': '#FF8329',
        'brand-green': '#4ADE80',
        'brand-green-light': '#D1FAE5',
      }
    },
  },
  plugins: [],
}