module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
