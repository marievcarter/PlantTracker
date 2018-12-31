'use strict';

const db = require('./database');

// Bring in database models
const { Plant } = require('./plant');

module.exports = {
  db,
  Plant,
};
