const photosTransformers = require('./transformers/photosTransformers');

const {
  buildJsAssetUrl,
  buildNextPageUrl,
  buildPreviousPageUrl,
  buildPhotoUrl,
} = photosTransformers;

module.exports = (req) => {
  const { rawData } = req;
  const { photos } = rawData;
  return {
    nextPageUrl: buildNextPageUrl(req),
    previousPageUrl: buildPreviousPageUrl(req),
    clientJsUrl: buildJsAssetUrl(),
    photos: photos.map((photo) => ({
      photoSrcUrl: `${process.env.PHOTOGRAPHS_URL}/${photo.name}`,
      photoUrl: buildPhotoUrl(photo),
      description: photo.description,
      altTag: photo.altTag,
      location: photo.location,
      hashTags: photo.hashTags,
    })),
  };
}
