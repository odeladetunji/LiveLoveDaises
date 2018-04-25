var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');

router.post('/', function(req, res){
  // getting input fields
  var g = req.cookies.daises;
  console.log(g + "     its working");
  
  var email = req.body.email;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var telephone = req.body.telephone;
  var street = req.body.street;
  var city = req.body.street;
  var state = req.body.state;
  var country = req.body.country;


  var updatingInformation = {
     "Email": email,
     "FirstName": firstname,
     "LastName": lastname,
     "Telephone": telephone,
     "City": city,
     "State": state,
     "Country": country,
     "Street": street
  }

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'lovedaises'
});

// connecting to mysql server
  connection.connect();

  var sql = 'UPDATE registrationtable SET Street = ?, Country = ?, State = ?, City = ?, FirstName = ?, LastName = ?, Telephone = ? WHERE Email = ?'
  connection.query(sql, [street, country, state, city, firstname, lastname, telephone, email], function (error, results, fields) {
    if(error) throw error;
    console.log('Data Updated successfully!');
  });

  res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});          
  res.render('profileSetUp');
})

module.exports = router;
