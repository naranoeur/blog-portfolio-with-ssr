const URI = require("urijs");
const fs = require("fs");
const path = require('path');
const assets = require('../../assets.json');

const buildJsAssetUrl = () => {
  const filename = URI(assets.blog.js).filename();
  const assetBaseUrl = process.env.CLIENTJSURL;
  return URI(`${assetBaseUrl}/${filename}`);
}

const getBlogStyles = () => {
  const styles = fs.readFileSync(path.join(__dirname, '../../assets/css/blogStyles.css'), { "encoding": "utf8"});
  return styles;
}

const getBlogHtml = (rawData) => {
  const { blog } = rawData;
  const blogHtml = fs.readFileSync(path.join(__dirname, '../../assets/blog', blog.name), { "encoding": "utf8"});
  return blogHtml;
}

module.exports = {
  getBlogHtml,
  buildJsAssetUrl,
  getBlogStyles,
};
