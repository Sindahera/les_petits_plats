/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./*.js", "./pages/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}  
