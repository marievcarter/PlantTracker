'use strict';

const db = require('./database.js');

// Bring in database models
const { Plant } = require('./plant.js');
//const { PlantDetail } = require('./plantDetail.js');

// PlantDetail.belongsTo(Plant);
// Plant.hasOne(PlantDetail);

module.exports = {
  db,
  Plant,
  //PlantDetail,
};
