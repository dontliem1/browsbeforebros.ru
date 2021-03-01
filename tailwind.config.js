const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        rose: colors.rose
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("tailwindcss")],
};
