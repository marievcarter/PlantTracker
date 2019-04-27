const Sequelize = require('sequelize');
const db = require('../db');
const crypto = require('crypto'); // for salting password

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
User.prototype.correctPassword = function(inputPwd) {
  return User.encryptPassword(inputPwd, this.salt()) === this.password();
};

/* Class Methods */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(plainText)
    .update(salt)
    .digest('hex');
};

/* Hooks */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

module.exports = User;
