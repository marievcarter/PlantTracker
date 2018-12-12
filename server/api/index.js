'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();
const volleyball = require('volleyball');

const { Plant } = require('../db/plant.js');

router.use(function(req, res, next) {
  req.models = require('../db/plant.js');
  next();
});

// body parsing middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// individual route file
router.use('/plants', require('./plantRoutes.js'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
