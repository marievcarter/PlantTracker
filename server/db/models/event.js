//watering, feeding, or repotting events
// Event model definition
const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  type: {
    type: Sequelize.ENUM('water', 'repot', 'fertilize'),
  },
  date: {
    type: Sequelize.DATE,
  },
  comments: {
    type: Sequelize.TEXT,
  },
});

module.exports = Event;
