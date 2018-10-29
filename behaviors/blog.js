const blogTransformers = require('./transformers/blogTransformers');

const {
  getBlogHtml,
  buildJsAssetUrl,
  getBlogStyles,
} = blogTransformers;


module.exports = (req) => {
  const { rawData } = req;
  return {
    clientJsUrl: buildJsAssetUrl(),
    blogStyles: getBlogStyles(),
    blogHtml: getBlogHtml(rawData)
  };
}
