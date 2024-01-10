/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        julius : ["Julius Sans One", "Sans-serif"],
        kunstler : ["Kunstler Script", "Sans-serif"],
        seasons : ["seasons", "Sans-serif"],
        juana : ["juana", "Sans-serif"]
      },
      colors:{
        musgo: "#3F5134",
        musgo2: "#81A26E",
        grisi: "#D9D9D9",
      }
    },
  },
  plugins: [],
}
