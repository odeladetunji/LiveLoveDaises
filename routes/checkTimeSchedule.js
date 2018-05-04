var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function (req, res) {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lovedaises'
    });
    connection.connect();  // connecting to mysql!
    res.render('timeSchduleInquiry');
      (function(){
            var sql = 'select * from timeshedule where email = ?';
            connection.query(sql, [recipientEmail], function(error, results, fields){
                if (error) {
                    throw error;
                }

                if (results[0].length == 0) {
                     res.render(timeSchduleInquiry);
                }else{
                     res.render(timeSchduleInquiry, {});
                }
              //res.render('timeSchdule');
            });
      })();
})

module.exports = router;
