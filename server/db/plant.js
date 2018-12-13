// Plant model definition
const Sequelize = require('sequelize');
const db = require('./database.js');

const Plant = db.define('plant', {
  commonName: {
    type: Sequelize.STRING,
  },
  imageUrl: Sequelize.STRING,
  scientificName: Sequelize.STRING,
  age: Sequelize.INTEGER,
  purchaseLocation: Sequelize.STRING,
  sunDirection: Sequelize.STRING,
  lastWatering: Sequelize.DATEONLY,
  lastFeeding: Sequelize.DATEONLY,
  lastRepot: Sequelize.DATEONLY,
});

module.exports = { Plant, db };
