module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#d30010',
        textPrimary: '#b90c04',
        secondary: '#097a00',
        neutral: '#181a18'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
