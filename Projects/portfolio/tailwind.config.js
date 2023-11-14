/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/components/Projects/Project.js",
    "./src/components/Skills/Skill.js" ,
    "./src/components/Skills/FilterSkills.js",
    "./src/components/Contact/Contact.js",
    "./src/components/Footer/Footer.js"

  ],
  theme: {
    extend: {
      colors: {
        'light': '#34495E',
        'regular': '#163546',
        'chocolate': '#d2691e' 
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

