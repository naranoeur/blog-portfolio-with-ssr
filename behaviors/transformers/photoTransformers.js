const processPhotosData = (rawData) => {
  const { photos, photoOrder } = rawData;
  const photoData = {
    previousPhoto: null,
    currentPhoto: null,
    nextPhoto: null,
  };
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].order > photoOrder) {
      photoData.nextPhoto = photos[i];
    } else if (photos[i].order < photoOrder) {
      photoData.previousPhoto = photos[i];
    } else {
      photoData.currentPhoto = photos[i];
    }
  }
  return photoData;
}

const buildNextPhotoUrl = (nextPhoto) => {
  if (!nextPhoto) return null;
  const photoNameWithoutExtension = nextPhoto.name.replace(/\.[^/.]+$/, "");
  return `${process.env.HOST}/photos/${photoNameWithoutExtension}`;
}

const buildPreviousPhotoUrl = (previousPhoto) => {
  if (!previousPhoto) return null;
  const photoNameWithoutExtension = previousPhoto.name.replace(/\.[^/.]+$/, "");
  return `${process.env.HOST}/photos/${photoNameWithoutExtension}`;
}

module.exports = {
  processPhotosData,
  buildNextPhotoUrl,
  buildPreviousPhotoUrl,
};
