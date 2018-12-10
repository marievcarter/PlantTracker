// Plant detail model definition
const Sequelize = require('sequelize');
const db = require('./database.js');

const PlantDetail = db.define('plantDetail', {
  purchaseLocation: Sequelize.STRING,
  sunDirection: Sequelize.STRING,
  lastWatering: Sequelize.DATEONLY,
  lastFeeding: Sequelize.DATEONLY,
  lastRepot: Sequelize.DATEONLY,
});

module.exports = { PlantDetail, db };
