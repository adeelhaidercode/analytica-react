/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  fontFamily: {
    kanit: ['Kanit', 'sans-serif'],
  },
 
  theme: {
    extend: {
      colors: {
        primary: '#f87315',
        gradientStart: '#FF8008',
        gradientMiddle: '#FFC837',
        gradientEnd: '#FF8008',
        scondry:'#6A7280'
      },
    },
  },
  plugins: [],
}