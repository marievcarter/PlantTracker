// Plant model definition
const Sequelize = require('sequelize');
const db = require('./database.js');

const Plant = db.define('plant', {
  commonName: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  scientificName: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER },
  purchaseLocation: { type: Sequelize.STRING },
  sunDirection: { type: Sequelize.STRING },
  lastWatering: {
    type: Sequelize.DATEONLY,
  },
  lastFeeding: {
    type: Sequelize.DATEONLY,
  },
  lastRepot: { type: Sequelize.DATEONLY },
  description: { type: Sequelize.TEXT },
});

module.exports = { Plant, db };
