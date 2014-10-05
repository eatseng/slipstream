var express = require('express');
var UserModel = require('../models/userModel');
var router = express.Router();


/* GET session */
router.post('/create', function(req, res) {
  var User = new UserModel({
    "email": req.query.email,
    "password": req.query.password
  });

  User.create();
  // User.print();

  console.log("cerate")
  console.log(req.query)
  res.send('respond with a resource');
});

module.exports = router;
