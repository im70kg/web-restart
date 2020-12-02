const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  // entry: {
  //   main: './src/index.js',
  //   search: './src/search.js'
  // },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // }
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
