const db = require('../db');
const Plant = require('./plant');
const User = require('./user');

// Model Associations
// for now all plants are custom added by the user
User.hasMany(Plant);
Plant.belongsTo(User);

module.exports = {
  db,
  Plant,
  User,
};
