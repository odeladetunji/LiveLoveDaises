var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  res.end('POST POST');
})

module.exports = router;
