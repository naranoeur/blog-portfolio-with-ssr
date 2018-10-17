require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const app = express();

mongoose.Promise = Promise;

const databaseUri = process.env.MONGODB_URI;
mongoose.createConnection(databaseUri, (err, res) => {
  if (err) {
    console.log (`ERROR connecting to: ${databaseUri}. ${err}`);
  } else {
    console.log (`Succeeded connected to: ${databaseUri}`);
  }
});
mongoose.connect(databaseUri);

app.get('/', (req, res) => {

});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
