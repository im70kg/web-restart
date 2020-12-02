const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: {
  //   index: './src/index.js'
  // },
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    // 单入口
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // })

    // 多入口
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        // 删除 index.html 中的注释
        removeComments: true,
        // 删除 index.html 中的空格
        collapseWhitespace: true,
        // 删除各种 html 标签属性值的双引号
        removeAttributeQuotes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './search.html',
      filename: 'search.html',
      chunks: ['search']
    })
  ]
};
