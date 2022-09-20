module.exports = {
  prefix: '',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '0px', // => @media (min-width: 0px) { ... }
      xs: '576px', // => @media (min-width: 576px) { ... }
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '992px', // => @media (min-width: 992px) { ... }
      xl: '1200px', // => @media (min-width: 1200px) { ... }
      xxl: '1450px', // => @media (min-width: 1450px) { ... }
    },
    extend: {},
  },

  important: true,
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
};
