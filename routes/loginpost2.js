var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');

router.post('/', function(req, res){
  //getting values from body-parser module
   var email = req.body.email;  

        res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});
        res.render('information');
});

module.exports = router; //exporting middleware
