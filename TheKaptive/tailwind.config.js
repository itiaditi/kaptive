/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { top: '20%', opacity: '0' },
          '100%': { top: '50%', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

