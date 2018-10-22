const bodyTransformers = require('./transformers/bodyTransformers');

const {
  buildJsAssetUrl,
  buildNextPageUrl,
  buildPreviousPageUrl,
} = bodyTransformers;

module.exports = (req) => {
  const { rawData } = req;
  const { photos } = rawData;
  return {
    nextPageUrl: buildNextPageUrl(req),
    previousPageUrl: buildPreviousPageUrl(req),
    clientJsUrl: buildJsAssetUrl(),
    photos: photos.map((photo) => ({
      photoUrl: `${process.env.PHOTOGRAPHS_URL}/${photo.name}`,
      description: photo.description,
      altTag: photo.altTag,
      location: photo.location,
      hashTags: photo.hashTags,
    })),
  };
}
