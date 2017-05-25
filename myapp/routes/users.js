var express = require('express');
var router = express.Router();

var postgresdb = require('../models/db');
var mongodb  = require('../models/mongodb');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.post('/user', function(req, res, next) {
  const { name, surname } = req.body;

  postgresdb.User.create({ name, surname }).then(user => res.send(user)); // postgres
});

router.get('/users', function (req, res, next) {
  postgresdb.User.findAll({}).then(users => {
    console.log(users);
    res.j(users);
  });
});

module.exports = router;
