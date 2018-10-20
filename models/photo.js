const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    default: "",
  },
  altTag: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  hashTags: {
    type: [String],
    default: [],
    index: true,
  }
});

module.exports = mongoose.model('Photo', schema);
