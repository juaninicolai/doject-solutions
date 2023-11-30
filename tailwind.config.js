//tailwind.config.js
module.exports = {
  content: [
    "./index.html", 
    "./css/**/*.css",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        secondary: '#25394D',
        third: '#00A6FB',
      }
    },
  },
  plugins: [],
};
