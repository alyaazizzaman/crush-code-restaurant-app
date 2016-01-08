//require express
var express = require('express');

//get an instance of the router
var router = express.Router();

//GET home page
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
