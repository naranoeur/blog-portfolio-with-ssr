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

const date = moment("2018-10-14").format('MMM-DD-YYYY');


const blog = new Blog({
    name: "2-kamakura-enoshima.html",
    order: 2,
    title: "Daytrip to Kamakura and Enoshima",
    description: "Kamakura, an ancient capital of Japan is just an hour ride away from Tokyo.",
    location: "Kamakura, Japan",
    photoName: "18-japan-kamakura-daibutsu.jpg",
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
