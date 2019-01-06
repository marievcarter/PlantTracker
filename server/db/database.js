'use strict';

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const dbUrl =
  process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow('opening database connection'));

let db = new Sequelize(dbUrl, {
  dialectOptions: {
    useUTC: false,
  },
  timezone: '-05:00',
});

module.exports = db;
