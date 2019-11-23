var express = require('express');
var router = express.Router();
const burger = require('../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eat-Dis-Burger', body: 'layout' });
});

module.exports = router;
