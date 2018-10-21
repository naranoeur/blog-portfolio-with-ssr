require('dotenv').config();
const moment = require('moment');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Photo = require('../models/photo');

mongoose.Promise = Promise;

const databaseUri = process.env.MONGODB_URI;

mongoose.connect(databaseUri, (err, res) => {
  if (err) {
  console.log ('ERROR connecting to: ' + databaseUri + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + databaseUri);
  }
});

// Photo.findOne({name: "0-iphones.png"})
//   .then(photo => {
//     photo.remove();
//   })
//   .catch("failed to delete photo");

Photo.find({})
  .then(photos => {
    for (let i = 0; i < photos.length; i++) {
      photos[i].remove()
        .then(() => console.log("deleted sucessfully", i))
        .catch(() => console.log("failed to delete", i));
    }
  })
  .catch("failed to delete photo");


process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
