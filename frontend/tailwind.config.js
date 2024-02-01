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
      }
    },
  },
  plugins: [],
}

//font-family: 'Lora', serif;
//font-family: 'Montserrat', sans-serif;