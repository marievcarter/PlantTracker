'use strict';

const db = require('./database.js');

// Bring in database models
const { Plant } = require('./plant.js');

module.exports = {
  db,
  Plant,
};
