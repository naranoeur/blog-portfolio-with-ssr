const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  order: {
    type: Number,
    default: 0,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  photoName: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  gpsCoordinates: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  hashTags: {
    type: [String],
    default: [],
    // index: true,
  }
});

module.exports = mongoose.model('Blog', schema);
