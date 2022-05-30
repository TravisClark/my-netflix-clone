
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
      colors:{
        mainColor: '#e50914',
        hoverColor: '#f53842',
        fontColor: '#757575',
        tagColor: '#303030'
      },
      screens: {
        sm: "480px",
        // => @media (min-width: 480px) { Mobile }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
