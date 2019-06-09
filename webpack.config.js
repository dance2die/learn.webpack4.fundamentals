module.exports = ({ mode }) => ({
  mode,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
});
