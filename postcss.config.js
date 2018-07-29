
// postcss-loader exposes Context (ctx) to the config file, making postcss.config.js dynamic

module.exports = ({ file }) => ({
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-cssnext': { 
      browsers: ['last 2 version'],
    },
    'postcss-browser-reporter': {},
    'postcss-reporter': {},
  }
})


// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     // 'postcss-import': {},
//     require('cssnano')({
//       preset: 'advanced',
//     }),
//   ],
// };