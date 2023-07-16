/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'system-ui', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e6e6e6',
      'secondary': '#8FA206',
      'terciary': '#61AEC9'
    }),
    textColor: {
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9'
    },
    },


  },
  plugins: [],
}

