/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#00413D',
        'secondery' : '#E5745D'
      },
      fontFamily: {
        'jost': ['Jost'],
        'Voll': ['Vollkorn'],
        
      },
      maxWidth: {
        'container': "1170px"
      },
      backgroundImage:{
        'banner': "url('/public/banner_shape.png'), url('/public/banner_background.png')",
        'banner2': "url('/public/guy.png')",
        
      }
      
    },
  },
  plugins: [],
}