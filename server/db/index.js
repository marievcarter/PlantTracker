'use strict';

const db = require('./db');

// Bring in database models
const { Plant } = require('./plant');

module.exports = {
  db,
  Plant,
};
