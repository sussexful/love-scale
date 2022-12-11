/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indieFlower: "Indie Flower, cursive"
      },
      colors: {
        'midnight': {
          DEFAULT: '#00203F',
          '50': '#007DF7',
          '100': '#0073E2',
          '200': '#005EB9',
          '300': '#004991',
          '400': '#003568',
          '500': '#00203F',
          '600': '#000407',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'magic-mint': {
          DEFAULT: '#ADEFD1',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#F1FCF7',
          '400': '#CFF6E4',
          '500': '#ADEFD1',
          '600': '#7EE6B7',
          '700': '#4FDD9C',
          '800': '#28CC81',
          '900': '#1F9D64'
        }
      }
    },
  },
  plugins: [],
}
