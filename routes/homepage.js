var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  /*res.end('GET GET');*/
  res.render('Meet People');
});

module.exports = router;
