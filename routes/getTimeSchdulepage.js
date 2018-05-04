var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res){

      var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lovedaises'
      });
      connection.connect();  // connecting to mysql!
  res.render('timeSchdule');
    /*  (function(){
            var sql = 'select ';
            connection.query(sql, [], function(error, results, fields){
                if (error) {
                    throw error;
                }
              res.render('timeSchdule');
            });
      })();*/
})

module.exports = router;
