const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'liteblue': '#67f7f6',
        'darkgrey': '#181A20',
        'litegrey': '#2B3139',
      },
    },
  },
  plugins: [],
});