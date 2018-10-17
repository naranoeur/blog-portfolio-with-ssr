require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const path = require('path');

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

const staticAssetsDirectory = path.join(__dirname, 'assets', 'photos');

app.use('/photographs', express.static(staticAssetsDirectory));

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
