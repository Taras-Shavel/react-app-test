/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm-max': { 'max': '639px' },  
        'md-max': { 'max': '767px' },  
        'lg-max': { 'max': '1023px' }, 
        'xl-max': { 'max': '1279px' }, 
        '2xl-max': { 'max': '1535px' },
        'sm-min': '640px',  
        'md-min': '768px',  
        'lg-min': '1024px', 
        'xl-min': '1280px', 
        '2xl-min': '1536px' 
      }
    }
  },
  plugins: [],
}

