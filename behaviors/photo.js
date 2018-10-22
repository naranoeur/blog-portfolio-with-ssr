const photoTransformers = require('./transformers/photoTransformers');

const {
  processPhotosData,
  buildNextPhotoUrl,
  buildPreviousPhotoUrl,
} = photoTransformers;

module.exports = (req) => {
  const { rawData } = req;
  const {
    nextPhoto,
    currentPhoto,
    previousPhoto
  } = processPhotosData(rawData);
  return {
    nextPhotoUrl: buildNextPhotoUrl(nextPhoto),
    previousPhotoUrl: buildPreviousPhotoUrl(previousPhoto),
    photoUrl: `${process.env.PHOTOGRAPHS_URL}/${currentPhoto.name}`,
    description: currentPhoto.description,
    altTag: currentPhoto.altTag,
    location: currentPhoto.location,
    hashTags: currentPhoto.hashTags,
  };
}
