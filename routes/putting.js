var express = require('express');
var router = express.Router();

router.put('/', function(req, res){
  res.end('PUT PUT');
})

module.exports = router;
