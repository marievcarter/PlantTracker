'use strict';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('./db');
console.log(db);
const PORT = process.env.PORT || 3000;
const app = express();
const session = require('express-session');
const passport = require('passport');

// passport registration
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// auth and api routes
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

// 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// send basic index.html for any request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

module.exports = app;
