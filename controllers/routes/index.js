var express = require('express');
var router = express.Router();
const burger = require('../../models/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  //get all burgers from db
  burger.findAll(function (data) {
    
    let burgersObj = {
      burgers: data
    }

    console.log(burgersObj);
    
    res.render('index', {body: 'layout', title: 'Eat-Dis-Burger', burgersObj: burgersObj});
  })
  
});

router.post('/api/new-burger', function(req, res, next) {
  let newBurger = req.body.burger;

  burger.create('burger', [newBurger], function (result) {

    console.log(result);

    if (result.affectedRows === 0) {
      return res.status(418).end()
    } else {
      return res.status(200).end()
    }
  });
});


router.put('/api/:burgerID', function (req, res, next) {
  //burger being edited
  let updatedBurger = req.params.burgerID;

  //if user was added, set req parameter equal to variable
  let user;
  if (req.params.user) {
    user = req.params.user;
  }

  console.log(req.params.eatState);

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
