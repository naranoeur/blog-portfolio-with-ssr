const URI = require("urijs");
const assets = require('../../assets.json');

const buildJsAssetUrl = () => {
  const filename = URI(assets.Photos.js).filename();
  const assetBaseUrl = process.env.CLIENTJSURL;
  return URI(`${assetBaseUrl}/${filename}`);
}

module.exports = {
  buildJsAssetUrl,
}
