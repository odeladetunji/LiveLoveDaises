var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('peoplepage triggered!!!')
    res.render('people');
})

module.exports = router;
