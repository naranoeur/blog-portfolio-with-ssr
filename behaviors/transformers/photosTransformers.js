const URI = require("urijs");
const assets = require('../../assets.json');

const buildJsAssetUrl = () => {
  const filename = URI(assets.photos.js).filename();
  const assetBaseUrl = process.env.CLIENTJSURL;
  return URI(`${assetBaseUrl}/${filename}`);
}

const buildPreviousPageUrl = (req) => {
  const { query } = req;
  const pageNumber = query.page ? Number(query.page) : 1;
  const lastPhoto = Number(process.env.LAST_PHOTO);
  const photoLimit = Number(process.env.PHOTO_LIMIT);
  const lastPage = Math.ceil(lastPhoto / photoLimit)
  if (pageNumber >= lastPage) return null;
  return URI(process.env.HOST).directory('photos').query({ page: Number(pageNumber) + 1 }).toString();
}

const buildNextPageUrl = (req) => {
  const { query } = req;
  const pageNumber = query.page ? Number(query.page) : 1;
  if (!query.page || pageNumber <= 1) return null;
  return URI(process.env.HOST).directory('photos').query({ page: Number(pageNumber) - 1 }).toString();
}

const buildPhotoUrl = (photo) => {
  const photoNameWithoutExtension = photo.name.replace(/\.[^/.]+$/, "");
  return `${process.env.HOST}/photos/${photoNameWithoutExtension}`;
}

module.exports = {
  buildJsAssetUrl,
  buildNextPageUrl,
  buildPreviousPageUrl,
  buildPhotoUrl,
}
