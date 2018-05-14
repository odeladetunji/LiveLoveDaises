var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();
var mysql = require('mysql');
var fs = require('fs');

router.post('/', function (req, res) {
    console.log(req.body);
    var recipientIdentity = req.body.recipientIdentity; // its an email
    console.log(recipientIdentity)
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'lovedaises'
    });

    connection.connect();

    function checkOnlineStatus(email) {
            var readFileStream = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
            readFileStream.on('error', function(){
                console.log('Something went wrong, error in createReadStream Operation  ||  checkingOnlineStatus.js')
            })
            readFileStream.on('open', function(){
                console.log('OnlineDataBase Opened For Read Operation  ||  checkingOnlineStatus.js');
            })
            readFileStream.on('data', function(chunk){
                    console.log('Stated Reading Data From onlineStatus.json  ||  checkingOnlineStatus.js');
                    var theObject = JSON.parse(chunk);
                    var splitedEmail = email.split('@')[0];
                    var onlineStatus = theObject[splitedEmail];
                    console.log(email);
                    console.log(onlineStatus);
                    res.send({'message': onlineStatus, "email": email}); 
            });
            readFileStream.on('end', function(){
                console.log('OnlineDataBase Closed Successfully  ||  checkingOnlineStatus.js');
            })
    }

    var sql = 'select Email from daisesposting where DaisesIdentity = ?'
    connection.query(sql, [recipientIdentity], function(error, results, fields){
         if (error) {
             throw error;
         }
         console.log(results)
         checkOnlineStatus(results[0].Email);
    });
});

module.exports = router;