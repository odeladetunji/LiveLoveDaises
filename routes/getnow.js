var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('people');
})

module.exports = router;
