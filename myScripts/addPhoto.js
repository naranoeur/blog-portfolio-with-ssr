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

const date = moment("2018-9-23").format('MMM-DD-YYYY');

const photos = [
  new Photo({
    name: "1-Angeles-National-Forest-Mount-Baldy-Icehouse-Map.jpg",
    description: "The map located at the start of the trailhead for Icehouse Canyon.",
    location: "Angeles National Forest: Mt Baldy Area",
    altTag: "Mount Baldy Area Map",
    hashTags: ["map"],
    date,
  }),
  new Photo({
    name: "2-Angeles-National_Forest-Icehouse-Creek.jpg",
    description: "The creek runs along Icehouse Canyon Trail.",
    location: "Angeles National Forest: Icehouse Canyon Trail",
    altTag: "Creek with Waterfalls",
    hashTags: ["creek", "waterfall", "forest"],
    date,
  }),
  new Photo({
    name: "3-Angeles-National_Forest-Icehouse-Waterfall.jpg",
    description: "The creek along the trail sometimes creates beautiful waterfalls.",
    location: "Angeles National Forest: Icehouse Canyon Trail",
    altTag: "Waterfall",
    hashTags: ["waterfall"],
    date,
  }),
  new Photo({
    name: "4-Angeles-National-Forest-Icehouse-Canyon-Trail.jpg",
    description: "The trail was mostly shaded by the trees.",
    location: "Angeles National Forest: Icehouse Canyon Trail",
    altTag: "Shaded forest trail with sun spots",
    hashTags: ["forest", "hiking"],
    date,
  }),
  new Photo({
    name: "5-Angeles-National-Forest-Chapman-Trail.jpg",
    description: "The trees thinned out when going up to Cedar Glenn campground. The sun was really beat me up.",
    location: "Angeles National Forest: Mt Baldy Area",
    altTag: "Sunny forest trail with mountain view",
    hashTags: ["hiking", "mountain"],
    date,
  }),
  new Photo({
    name: "6-Angeles-National-Forest-Fall.jpg",
    description: "Some fall colors have already started to appear at the end of September.",
    location: "Angeles National Forest: Mt Baldy Area",
    altTag: "Fall forest",
    hashTags: ["forest", "fall"],
    date,
  }),
  new Photo({
    name: "7-Angeles-National-forest-Cedar-Glenn-Campground.jpg",
    description: "Cedar Glenn campground opened up small patch of level ground to pitch a tent on.",
    location: "Angeles National Forest: Cedar Glenn Campground",
    altTag: "Cedar Glenn campground signpost",
    hashTags: ["signpost", "forest"],
    date,
  }),
  new Photo({
    name: "8-Angeles-National-Forest-Bluejay-sideways.jpg",
    description: "Curious blue jays, 3 couples, came to check out what we were eating. I was able to take a photo of one of them.",
    location: "Angeles National Forest: Cedar Glenn Campground",
    altTag: "Bluejay head turned sideways",
    hashTags: ["bird"],
    date,
  }),
  new Photo({
    name: "9-Angeles-National-Forest-Cedar-Glenn-Campground-sunset-Lost-Angeles-skyline.jpg",
    description: "As the sunset lit up the sky in bright orange, the Los Angeles city skyline became visible.",
    location: "Angeles National Forest: Cedar Glenn Campground",
    altTag: "Sunset Los Angeles skyline",
    hashTags: ["skyline", "sunset"],
    date,
  }),
  new Photo({
    name: "10-Angeles-National-Forest-Cedar-Glenn-Campground-Night-sky-stars.jpg",
    description: "The night sky was dotted with many stars.",
    location: "Angeles National Forest: Cedar Glenn Campground",
    altTag: "Stars at night",
    hashTags: ["forest", "night", "stars"],
    date,
  }),
  new Photo({
    name: "11-Angeles-National-Forest-Cedar-Glenn-Campground-Tent-Night.jpg",
    description: "The full moon provided a lot of light to get around at night. I slept with the tent fly off. It was really a great night.",
    location: "Angeles National Forest: Cedar Glenn Campground",
    altTag: "Two tents in forest",
    hashTags: ["forest", "tent"],
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
