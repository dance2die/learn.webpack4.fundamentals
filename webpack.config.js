const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => ({
  devtool: 'source-map',
  mode,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
});
