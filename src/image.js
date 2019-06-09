const makeImage = (url, width = 100, height = 100) =>
  Object.assign(new Image(), { src: url, width, height });

module.exports = makeImage;
