var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var $ = require("jquery");

router.post('/', function(req, res){
  //getting values from body-parser module
  var email = req.body.Email;
  var password = req.body.Password;
  //console.log('Ooooooooooooooooooops');
  // creating a user object!!!!!!!!!!!!!!!!
  var users = {
     "Email": email,
     "PassWord": password
  }
  var values = [email, password];
  console.log(values);  // checking if body parser got input from from end

  res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});
  // creating connection object
  var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'lovedaises'
  });

  // connecting to database
  connection.connect();

  var sql3 = 'SELECT * FROM registrationtable Where Email = ? AND Password = ?';
  connection.query(sql3, [email, password], function(error, results, fields){
        if(error)throw error;
          var emailResult = results.length;
          //console.log(emailResult + "   llllllllllllllooollllllllllll");
        if(emailResult == 0)
          return res.send({'message': 'Not registered!'});
      
        if(emailResult != 0)
          rederingOfHomePage();
  });

  //connection.end();  //closing connnection of database;

  //res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});
  var g = req.cookies.daises;
  console.log(g);
  console.log(g);
  console.log(g + " " + "those are the values of the cookies!!!!!!");
  // router handling of request from the front end!
function rederingOfHomePage(){

     /* the idea is to check if a perticular user is already registered in the database  */
    /* Am using self invoking function below  */
     (function(){
           var sql1 = 'SELECT * FROM registrationtable Where Email = ? and Password = ?';
           //console.log('checking if this function will run.............');
           connection.query(sql1, [email, password], function(error, results, fields){
                 if(error)throw error;
                   var firstname = results[0].FirstName;
                   
                 if(firstname != '')
                  callingAnotherFunction(); // checking if user has a daises!
                
                 if(firstname == '')
                    res.send({'message': 'render information'});
           });
     })();
   
        
          function callingAnotherFunction(){
              var sql = 'SELECT Discursion FROM daisesposting Where Email = ?';
              connection.query(sql, [email], function(error, results, fields){
                  if(error)throw error;
                       var existingPoint = results.length;

                  if(existingPoint == 0)
                       return res.send({"message": 'render profileSetUp'});
                   
                  if(existingPoint != 0)
                       callingFinalRenderingOfHomePage();
              });
          }

          function callingFinalRenderingOfHomePage(){

               var sql = 'Select Pictures From registrationtable Where Email = ?';
                  connection.query(sql, [email], function(err, results, fields){
                      if(err) throw err;
                       res.send({'message': "render homepage"});
                   });
          }

  
}


 // res.render('homepage');
});

module.exports = router; //exporting middleware
