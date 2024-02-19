/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora'], 
        'mont': ['Montserrat'],
        'inco': ['Inconsolata']
      },
      colors: {
        'metallicblue': '#265073',
        'zomp': '#2D9596',
        'turgreen': '#D09AA8',
        'beige': '#E3DAFA'
      }
    },
  },
  plugins: [],
}

//font-family: 'Lora', serif;
//font-family: 'Montserrat', sans-serif;