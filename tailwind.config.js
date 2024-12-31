/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins
      },

      animation: {
        marquee: 'marquee 15s linear infinite', // Marquee animation duration and behavior
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // Start position: right
          '100%': { transform: 'translateX(-100%)' }, // End position: left
        },
    },
  },
  plugins: [],
}}

