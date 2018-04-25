/*
Getting the firsthomepage
*/
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongo = require('mongodb');


router.post('/', function(req, res){
   res.render('firsthomepage');
});

module.exports = router;
