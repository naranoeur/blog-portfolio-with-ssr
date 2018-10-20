require('dotenv').config();
const express = require('express');
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

const name = "0-iphones.png";
const description = "Sample app on an iphone";
const altTag = "iphones screen MOA SEO PLZ";
const hashTags = ["Iphone", "App"];

const photo = new Photo({ name, description, altTag, hashTags });

photo.save()
  .then(photoRecord => console.log("successfully saved photo " + name))
  .catch(err => {
    console.log("failed to save photo " + username);
    console.log(err);
  });


process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
