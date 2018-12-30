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
    type: 'TIMESTAMP',
  },
  lastFeeding: {
    type: 'TIMESTAMP',
  },
  lastRepot: { type: 'TIMESTAMP' },
  description: { type: Sequelize.TEXT },
});

module.exports = { Plant, db };
