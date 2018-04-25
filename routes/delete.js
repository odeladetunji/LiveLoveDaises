var express = require('express');
var router = express.Router();

router.delete('/', function(req, res){
  res.end('DELETE DELETE');
});

module.exports = router;