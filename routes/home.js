const express = require('express');
const homeRenderer = require('../dist/renderers/home.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(homeRenderer({}));
});

module.exports = router;
