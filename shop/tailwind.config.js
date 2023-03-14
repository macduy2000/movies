/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM-Sans", "san-serif"],
    },
    colors: {
      primary : "#F626882",
    },
  },
  plugins: [],
},
}