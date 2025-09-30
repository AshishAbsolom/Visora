export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'Chrome >= 58',
        'Firefox >= 57',
        'Safari >= 11',
        'Edge >= 16',
        'iOS >= 11',
        'Android >= 4.4',
      ],
      flexbox: 'no-2009',
      grid: 'autoplace',
    },
  },
}
