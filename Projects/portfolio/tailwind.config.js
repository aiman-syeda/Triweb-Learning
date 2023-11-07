/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/components/Projects/Project.js" 
  ],
  theme: {
    extend: {
      colors: {
        'light': '#254c5f',
        'regular': '#163546'
      },
      transitionDuration: {
        '3': '3s',
      },
      margin: {
          '105px': '105px',
          '80px' : '80px'
      }
    },
  },
  plugins: [],
}

