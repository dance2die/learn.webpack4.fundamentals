module.exports = env => ({
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].js',
  },
});
