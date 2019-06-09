const path = require('path');
const webpackMerge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = mode => require(`./build-util/webpack.${mode}`)(mode);

const merged = ({ mode } = { mode: 'production' }) =>
  webpackMerge(
    {
      devtool: 'source-map',
      mode,
      output: {
        path: path.join(__dirname, 'dist'),
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
    },
    config(mode)
  );

// module.exports = webpackMerge(merged, config);
module.exports = merged;
