require('dotenv').config();
const moment = require('moment');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Blog = require('../models/blog');

mongoose.Promise = Promise;

const databaseUri = process.env.MONGODB_URI;

mongoose.connect(databaseUri, (err, res) => {
  if (err) {
  console.log ('ERROR connecting to: ' + databaseUri + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + databaseUri);
  }
});

const date = moment("2018-9-23").format('MMM-DD-YYYY');


const blog = new Blog({
    name: "1-backpacking-cedar-glenn-campground.html",
    order: 1,
    title: "Backpacking in Angeles National Forest to Cedar Glenn Campground",
    description: "What you need to know before you go.",
    location: "Angeles National Forest",
    photoName: "7-angeles-national-forest-cedar-glenn-campground.jpg",
    hashTags: ["backpacking", "hiking"],
    date,
  })


blog.save()
  .then(blogRecord => console.log("successfully saved blog " + blogRecord.name))
  .catch(err => {
    console.log("failed to save blog ");
    console.log(err);
  });


process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
