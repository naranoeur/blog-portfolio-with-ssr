require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const path = require('path');
const compression = require('compression');
const homeRoute = require('./routes/home');
const photosRoute = require('./routes/photos');
const blogRoute = require('./routes/blog');

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

app.use(compression());

const staticAssetsDirectory = path.join(__dirname, 'assets', 'photographs');

// Static Assets
app.use('/photographs', express.static(staticAssetsDirectory));
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));

// Routes
app.use('/', homeRoute);
app.use('/photos', photosRoute);
app.use('/blog', blogRoute);

// Catch all route
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname+'/client/build/index.html'));
  res.status(404).send("404 Not Found");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
