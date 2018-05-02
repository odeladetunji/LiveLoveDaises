var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();
var mysql = require('mysql');

router.post('/', function(req, res){
           console.log(req.body);
           var FriendEmail = req.body.FriendEmail; // its an email
           var personalEmail = req.body.personalEmail;
           var tagValue = req.body.Tag;

           var connection = mysql.createConnection({
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'lovedaises'
          });

      // connecting to mysql server
           connection.connect();

           var dataToInsert = {
              'OwnerEmail': personalEmail,
              'FriendEmail': FriendEmail,
              'Tag': tagValue
           }

           var sql = 'UPDATE friendstable SET Tag = ? Where FriendEmail = ? AND OwnerEmail = ?';
           connection.query(sql, [tagValue, FriendEmail, personalEmail], function(error, results, fields){
                 if(error) throw error;
                 res.send({'message': 'FriendShip Was Tagged Successfully', 'FriendEmail': FriendEmail});
           });    

          function creatingCorrespondingFriendShip(firstName, lastName){
                 var sql = 'INSERT INTO friendstable SET Tag = ?, OwnerEmail = ?, FriendEmail = ?, FriendFirstName = ?, FriendLastName = ?';
                 connection.query(sql, [tagValue, FriendEmail, personalEmail, firstName, lastName], function(error, results, fields){
                       if(error) throw error;
                 });
          }
      
          (function(){
              var sql = 'select FirstName, LastName from registrationtable where Email = ?';
              connection.query(sql, [personalEmail], function(error, results, fields){
                  if (error) throw error;
                  creatingCorrespondingFriendShip(results[0].FirstName, results[0].LastName);
              })
          })();

});

module.exports = router;
