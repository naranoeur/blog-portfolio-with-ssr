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

const date = moment("2018-10-14").format('MMM-DD-YYYY');

const photos = [
  new Photo({
    name: "12-japan-kamakura-bamboo-forest.jpg",
    order: 12,
    description: "Tall bamboo forest was to our left, leading up to Daibutsu Trail from Kita-Kamakura Station.",
    location: "Kamakura, Japan",
    altTag: "Bamboo Forest Kamakura Japan",
    hashTags: ["bamboo"],
    date,
  }),
  new Photo({
    name: "13-japan-kamakura-mossy-gate.jpg",
    order: 13,
    description: "On the way to Daibutsu trail from Kita-Kamakura Station, to our right were residential houses. An entrance to someone's house had a beautiful garden with an gate overgrown by moss.",
    location: "Kamakura, Japan",
    altTag: "Mossy Gate Kamakura Japan",
    hashTags: ["gate"],
    date,
  }),
  new Photo({
    name: "14-japan-kamakura-city.jpg",
    order: 14,
    description: "Kamakura city and the ocean were visible on our hike to Great Buddha.",
    location: "Kamakura, Japan",
    altTag: "Kamakura Japan hiking",
    hashTags: ["city"],
    date,
  }),
  new Photo({
    name: "15-japan-kamakura-hike-steps.jpg",
    order: 15,
    description: "Kamakura trail had many of these steps. It was a cloudy day which added to the moodiness of the scenery.",
    location: "Kamakura, Japan",
    altTag: "Kamakura Japan Hiking Steps",
    hashTags: ["hiking"],
    date,
  }),
  new Photo({
    name: "16-japan-kamakura-grassy-stairs.jpg",
    order: 16,
    description: "This stairs branched off from the Kamakura Trail and was especially grassy.",
    location: "Kamakura, Japan",
    altTag: "Japan Kamakura Grassy Stairs",
    hashTags: ["stairs"],
    date,
  }),
  new Photo({
    name: "17-purple-morning-glory.jpg",
    order: 17,
    description: "Off the trail and into the city we were greeted by morning glory",
    location: "Kamakura, Japan",
    altTag: "Purple Morning Glory",
    hashTags: ["flower"],
    date,
  }),
  new Photo({
    name: "18-japan-kamakura-daibutsu.jpg",
    order: 18,
    description: "The famous Daibutsu. You can go inside of it too!",
    location: "Kamakura, Japan",
    altTag: "Japan Kamakura Daibutsu Taiizan Kotokuin Shojosenji",
    hashTags: ["statue"],
    date,
  }),
  new Photo({
    name: "19-japan-enoshima-fishing.jpg",
    order: 19,
    description: "Enoshima is a small island that juts out of the ocean very close to the coast. The walk through Enoshima is very touristy. However, some people enjoy the spot for fishing.",
    location: "Enoshima, Japan",
    altTag: "Japan Enoshima finishing",
    hashTags: ["fishing", "ocean"],
    date,
  }),
  new Photo({
    name: "20-ocean-sail-boat.jpg",
    order: 20,
    description: "At the end of the touristy walk in Enoshima, we got a chance to walk on the shore to see some tide pools and enjoy our snacks by the water.",
    location: "Enoshima, Japan",
    altTag: "Sailboat",
    hashTags: ["Sailboat"],
    date,
  }),
  new Photo({
    name: "21-japan-kamakura-spider-nephila-clavata.jpg",
    order: 21,
    description: "These giant brightly colored spiders were everywhere all throughout Kamakura and Enoshima, even right next to where huge crowds of people were walking.",
    location: "Enoshima, Japan",
    altTag: "Spider Nephila Clavata",
    hashTags: ["spider"],
    date,
  }),
  new Photo({
    name: "22-japan-enoshima-fat-cat.jpg",
    order: 22,
    description: "Not minding all the tourists some fat cats lazed around.",
    location: "Enoshima, Japan",
    altTag: "Japan Enoshima fat cat",
    hashTags: ["forest", "tent"],
    date,
  }),
  new Photo({
    name: "23-japan-enoshima-sunset.jpg",
    order: 23,
    description: "Veering off the main street on a side trail, we were lead to the ocean.",
    location: "Enoshima, Japan",
    altTag: "Japan Enoshima sunset",
    hashTags: ["forest", "tent"],
    date,
  }),
  new Photo({
    name: "24-japan-enoshima-main-street.jpg",
    order: 32,
    description: "Enoshima has a touristy walk through it. The street is dotted with various restaurants, souvineer shops and ice cream shops.",
    location: "Enoshima, Japan",
    altTag: "Enoshima Japan Main Street",
    hashTags: ["street"],
    date,
  }),
];

for (let i = 0; i < photos.length; i++) {
  photos[i].save()
  .then(photoRecord => console.log("successfully saved photo " + photoRecord.name))
  .catch(err => {
    console.log("failed to save photo ");
    console.log(err);
  });
}


process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
