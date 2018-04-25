var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware for parsing html
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', jsonParser, function(req, res){
  res.render('inbox');
})

module.exports = router;
