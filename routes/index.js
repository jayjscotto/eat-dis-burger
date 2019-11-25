var express = require('express');
var router = express.Router();
const burger = require('../../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  //get all burgers from db
  burger.findAll(function (result) {
    let burgers = result;
    res.render('index', { title: 'Eat-Dis-Burger', body: 'layout', burgers: 'burgers' });
  })
  
});

router.post('/api/new-burger', function(req, res, next) {
  let newBurger = req.body.burger;

  burger.create('burger', newBurger.burger, function (result) {
    res.json(result);
  });
});


router.put('/api/:burgerID/:user', function (req, res, next) {
  //burger being edited
  let updatedBurger = req.params.burgerID;

  //if user was added, set req parameter equal to variable
  let user;
  if (req.params.user) {
    user = req.params.user;
  }

  let changedCol = 'eaten';
  let newVal = true;
  let baseCol = 'id';

  burger.update(changedCol, newVal, baseCol, updatedBurger, function(result) {
    res.json(result);
  });
});

router.delete('/api/:burgerID', function (req, res, next) {
  let chosenBurger = req.params.burgerID;
  let col = 'id';
  burger.delete(col, chosenBurger, function(result) {
    res.json(result);
  });
});

module.exports = router;
