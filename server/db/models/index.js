const db = require('../db');
const Plant = require('./plant');
const User = require('./user');
const Event = require('./event');

// Model Associations
// for now all plants are custom added by the user
User.hasMany(Plant);
Plant.belongsTo(User);
Plant.hasMany(Event);
Event.belongsTo(Plant);

module.exports = {
  db,
  Plant,
  User,
  Event,
};
