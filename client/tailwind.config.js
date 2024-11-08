/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        'primary': "#ECEEFF",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "dark": "#000044",
        "super": "#FFDB58",
      },
      backgroundImage: {
        'hero': "url('')",
        'card': "url('')",
      },
      screens: {
        "wide": "1440px",
      }
    },
  },
  plugins: [],
}

