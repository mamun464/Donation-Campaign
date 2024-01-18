/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '372px',
        'xm': '500px',
      }
    },
  },
  plugins: [require("daisyui")],
}
