var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('homepage', {data: "man.jpg"});
})

module.exports = router;
