const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        current: 'currentColor',
        rose: colors.rose
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("tailwindcss")],
};
