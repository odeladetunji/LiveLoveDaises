/*
Getting the homepage
*/
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongo = require('mongodb');


router.post('/', function(req, res){

    console.log(req.body);
    console.log('going to homepage!');
    var email = req.cookies.daises;
    
     var connection = mysql.createConnection({
          host     : '127.0.0.1',
          user     : 'root',
          password : '',
          database : 'lovedaises'
    });


    function renderingHomePage(){
         var sql = 'select Pictures from registrationtable where Email = ?';
         connection.query(sql, [email], function(error, results, fields){
              if (error) throw error;

              var pictureValue = {};
              var resultLength = results.length;
              if(resultLength = 0){
                 pictureValue.manImage = 'man.jpg';
              }else{
                 pictureValue.manImage = results[0].Pictures;
              }
             
              res.render('homepage', { data: pictureValue.manImage });
         })
    }

    renderingHomePage();
    console.log('It was called!');
})


module.exports = router;
