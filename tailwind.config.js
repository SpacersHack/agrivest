/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        agrivest: { DEFAULT: '#218c74', 100: '#218c74cc' },
        sunflower: {
          DEFAULT: '#ffda79',
          100: '#ffda79b3'
        }

      }
    }
  },
  plugins: [],
}

