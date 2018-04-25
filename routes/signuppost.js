var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mysql = require('mysql');
var mongo = require('mongodb');


router.post('/', function(req, res){
  var email = req.body.Email;
  console.log(email + "    ...................");
  var password = req.body.Password;
  console.log(password + "    ...................");
  
  var userRegistration = {
     "Email": email,
     "PassWord": password
  }

  var dataForFriendsTable = {
      'OwnerEmail': email,
      'FriendEmail': email,
      'Tag': 'Owner'
  }

var url = 'mongodb://127.0.0.1:27017/test';

// setting mysql variable
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'lovedaises'
});

// connecting to mysql server
connection.connect();
(function(){

   var sql = 'SELECT Email From registrationtable WHERE Email = ?';
      connection.query(sql, [email], function(error, results, fields){

               if(error)throw error;
                  console.log(results.length);
                  var someValue = results.length;
               if(someValue == 0){
                   registerUser();
                   return;
                }

               if(results[0].Email == email)
                   res.send({"message": 'This Account Exist Already!!'});
                   return;
           
      })

})();



  function registerUser(){
        var sql = 'INSERT INTO registrationtable SET ?';
        connection.query(sql, userRegistration,  function (error, results, fields) {
             if(error) throw error;
             console.log('Registring Users was Successfull!! it works');
              res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false}); 
              res.send({'message': "New User!!!"});   

              creatingOnlineStatus();  // creating online status!
        });

        var mySql = 'INSERT INTO friendstable SET ?';
        connection.query(mySql, dataForFriendsTable, function(error, results, fields){
          if(error)throw error;
        });
  }

  function creatingOnlineStatus(){
         // we might need to use mongodb here!
        //creating an online presence;

              var statusData = {
                  'Email': email,
                  'OnlineStatus': ''
              }

              var sql = 'INSERT INTO onlineofflinestatustable SET ?';
              connection.query(sql, statusData, function(error, results, fields){
                   console.log('this is before error was thrown');
                   if(error)throw error;
                   creatingOnlineIdentityOnStatusTable();
              })          
  }

          
         function insertingToDataBaseMySQL(theRandomNumber){
                 var sql = 'UPDATE onlineofflinestatustable SET onlineIdentifier = ? Where Email = ?';
                  connection.query(sql, [theRandomNumber, email], function(error, results, fields){
                        if(error)throw error;
                        console.log('onlineIdentifier was inserted successfully!!!!!!');
                  });
          } 

   
    
           function pushingUniqueKeyIntoArray(gettingRamdomValues, vinil){
                 //var vinil is an array
                 vinil.push(gettingRamdomValues);
                     mongo.connect(url, function(err, db){
                         db.collection('onlineIdentifiers').update({"name": "onlineIdentifiers"}, {$set: {'onlineIdentifiers': vinil}})
                         db.close();
                     });    
          }
          
      
      
  function creatingOnlineIdentityOnStatusTable(){

          mongo.connect(url, function(err, db){
                    if(err) throw err;
                    //console.log(db);
                    
                    var cursor = db.collection('onlineIdentifiers').find({'name': "onlineIdentifiers"}).limit(1);
           
                           cursor.forEach(function(doc, err){
                              if(err) throw err;
                              console.log(doc + "this is doc");
                              var arrayObject = doc.onlineIdentifiers;   // its an array of identity
                              console.log(arrayObject + " this is arrayObject!!!!");
                              var dataToUpdate = doc.onlineIdentifiers;
                              console.log(dataToUpdate + 'this is data to update')
                              // generation of random number!

                               var generateRandomNumber = function getRandomInt(min, max) {
                                            min = Math.ceil(min);
                                            max = Math.floor(max);
                                            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
                               }
                               var min = 1;
                               var max = 100000000000000;
                               
                               var ran3 = "ABC" + generateRandomNumber(min, max);
                               console.log(ran3+'it worked lets log it')
                               
                               vinil = dataToUpdate;
                               console.log(vinil + 'check vinil');
                               var rateValue = arrayObject;
                     for(i=0; i<=rateValue.length; i++){

                             if(rateValue[i] == ran3){
                                 for(i=0; i<=100000000; i++ ){
                                   var someRandomValue = "ABC" + generateRandomNumber();
                                      if(rateValue[i] != someRandomValue || ran3){
                                           pushingUniqueKeyIntoArray(someRandomValue, vinil);
                                           insertingToDataBaseMySQL(someRandomValue);
                                           return;
                                      }
                                 }
                                 
                                
                             }
                             if(rateValue[i] != ran3){
                                pushingUniqueKeyIntoArray(ran3, vinil);
                                insertingToDataBaseMySQL(ran3);
                                return;
                             } 
                     }

                 }, function(){
                         db.close();
              });              
            
        });
}
     

});

module.exports = router;
