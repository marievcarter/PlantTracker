'use strict';

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('opening database connection'));

const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`);

module.exports = db;
