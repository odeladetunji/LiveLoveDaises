var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mysql = require('mysql');

router.post('/', function(req, res){
  //console.log('this guy rendered!!');
  var email = req.body.Email;
  res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});              
  res.render('information');
});

module.exports = router;
