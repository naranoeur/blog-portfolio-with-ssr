const express = require('express');
const Photo = require('../models/photo');
const photosRenderer = require('../dist/renderers/photos.js');
const photoRenderer = require('../dist/renderers/photo.js');
const formatPhotosData = require('../behaviors/photos.js');
const formatPhotoData = require('../behaviors/photo.js');

const router = express.Router();

router.get('/', (req, res) => {
  const { query } = req;
  const photoQuery = {};
  const photoLimit = Number(process.env.PHOTO_LIMIT);
  if (query.page && Number(query.page)) {
    const lastPhoto = Number(process.env.LAST_PHOTO);
    const pageNumber = Number(query.page);
    const startingPhoto = lastPhoto - photoLimit * (pageNumber - 1) + 1;
    photoQuery.order = { $lt: startingPhoto };
  }
  Photo.find(photoQuery).sort({ order: -1 }).limit( photoLimit )
    .then(photoRawData => {
      req.rawData = { photos: photoRawData };
      const data = formatPhotosData(req);
      res.send(photosRenderer(data));
    })
    .catch((err) => {
      console.log(err);
      res.send("500 error")
    });
});

 router.get('/:photoName', (req, res) => {
   const photoName = req.params.photoName;
   const photoOrder = Number(photoName.match(/^\d+/)[0]);
   if ( !photoOrder || photoOrder < 1 || photoOrder > Number(process.env.LAST_PHOTO))  {
     return res.status(404).send("404 Not Found");
   }
   const photoQuery = {
     order: {
       '$lt': photoOrder + 2,
       '$gt': photoOrder - 2,
     }
   };
    Photo.find(photoQuery).sort({ order: -1 })
      .then(photoRawData => {
        req.rawData = {
          photos: photoRawData,
          photoOrder
        };
        const data = formatPhotoData(req);
        res.send(photoRenderer(data));
      })
      .catch((err) => {
        console.log(err);
        res.send("500 error")
      });
 });

module.exports = router;
