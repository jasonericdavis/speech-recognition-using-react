module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '1fr 100px 300px 100px 1fr'
      },
      gridTemplateColumns: {
        'layout': '1fr 400px 400px 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
