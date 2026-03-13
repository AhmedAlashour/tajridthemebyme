const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "views/**/*.twig",
    "src/views/**/*.twig",
    "node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt"
  ],
  theme: {
    extend: {
      colors: {
        'cof-black':  '#0a0a0a',
        'cof-white':  '#fafafa',
        'cof-g1':     '#f5f5f5',
        'cof-g2':     '#e8e8e8',
        'cof-g3':     '#d3d3d3',
        'cof-g4':     '#a0a0a0',
        'cof-g5':     '#6b6b6b',
        'cof-g6':     '#404040',
      },
      fontFamily: {
        'cof-en': ['"DM Sans"', 'sans-serif'],
        'cof-ar': ['"Noto Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@salla.sa/twilight-tailwind-theme'),
  ],
};
