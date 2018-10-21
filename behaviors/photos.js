module.exports = (rawData) => {
  const { photos } = rawData;
  return {
    clientJsUrl: `${process.env.CLIENTJSURL}/Photos.js`,
    photos: photos.map((photo) => ({
      photoUrl: `${process.env.PHOTOGRAPHS_URL}/${photo.name}`,
      description: photo.description,
      altTag: photo.altTag,
      location: photo.location,
      hashTags: photo.hashTags,
    })),
  };
}
