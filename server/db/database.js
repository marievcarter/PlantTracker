'use strict';

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('opening database connection'));

let db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  dialectOptions: {
    useUTC: false,
  },
  timezone: '-05:00',
});

module.exports = db;
// just adding something
