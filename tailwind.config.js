module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '1fr 50px 650px 1fr'
      },
      gridTemplateColumns: {
        'layout': '1fr 800px 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
