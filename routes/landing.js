/* 
Getting landing page
*/
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');


router.get('/', function(req, res){


      res.render('landingpage');
})

module.exports = router;
