const express = require('express');
const Photo = require('../models/photo');
const photosRenderer = require('../dist/renderers/photos.js');
const formatPhotosData = require('../behaviors/photos.js');

const router = express.Router();

router.get('/', (req, res) => {
  Photo.find({}).sort({ order: -1 })
    .then(photoRawData => {
      const data = formatPhotosData({ photos: photoRawData});
      res.send(photosRenderer(data));
    })
    .catch((err) => {
      console.log(err);
      res.send("500 error")
    });
});

module.exports = router;
