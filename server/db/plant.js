// Plant model definition
const Sequelize = require('sequelize');
const db = require('./database.js');

const Plant = db.define('plant', {
  commonName: {
    type: Sequelize.STRING,
  },
  scientificName: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

module.exports = { Plant, db };
