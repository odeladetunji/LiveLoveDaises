var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var $ = require("jquery");

router.post('/', function(req, res){
  //getting values from body-parser module
  console.log(req.body);
  var email = req.body.email;
  console.log(email + "    this is my email...........")
  // creating connection object
  var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'lovedaises'
  });

  // connecting to database
  connection.connect();

                  var sql = 'Select pictures From registrationtable Where Email = ?';
                  connection.query(sql, [email], function(err, results, fields){
                      if(err) throw err;
                      //console.log(results[0] + "  ///////////////////")
                      var pictureValue = {};
                      if(results[0].pictures == "") pictureValue.manImage = "man.jpg";
                      if(results[0].pictures != "") pictureValue.manImage = results[0].pictures;
                      
                      res.cookie('daises', email, { maxAge: 60 * 60 * 24 * 3650 , path: "/", httpOnly: false});
                      res.render('firsthomepage', { data: pictureValue.manImage });
                     // res.render('homepage')
                      connection.end();
                   });

});

module.exports = router; //exporting middleware
