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

Photo.findOne({ order: 32 })
  .then((photo) => {
    photo.order = 24;
    return photo.save();
  })
  .then(() => console.log("made changes successfully"))
  .catch((err) => console.log(err))

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
