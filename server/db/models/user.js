const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  password: {
    type: Sequelize.STRING,
    // apparently making .password act like a function hides it when serializing to JSON since sequelize has no 'private field' option.
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    // same rational as password for making salt behave as a function
    get() {
      return () => this.getDataValue('salt');
    },
  },
});

/* Instance Methods */

module.exports = User;
