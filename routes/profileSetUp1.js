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
  // getting html form input
    //console.log('Data Arrived on profileSetUp1.......................');
    var alaise3 = req.body.aliase3;
    var message3 = req.body.message3;
    var tag3 = req.body.daises3;

    var amount = req.body.amount;
    var email = req.cookies.daises;
    
    console.log(email + "   ProfileSetUp1");
    var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'lovedaises'
    });



    //connecting to database!
 connection.connect();

 var url = 'mongodb://127.0.0.1:27017/test';
  function updatingRegistrationTableWithAlaise(){
           var sql = 'UPDATE registrationtable SET Alaise = ? WHERE Email = ?';
            connection.query(sql, [alaise3, email], function(error, results, fields){
                 if(error)throw error;
                 console.log('Finished Updating RegistrationTable');
            });
  }

function renderingHomePage(){
         var sql = 'Select Pictures From registrationtable Where Email = ?';
          connection.query(sql, [email], function(err, results, fields){
              if(err) throw err;
              console.log(results);
              var pictureValue = {};
              var resultLength = results.length;
              if(resultLength = 0){
                 pictureValue.manImage = 'man.jpg';
              }else{
                 pictureValue.manImage = results[0].Pictures;
              }
             
              res.render('firsthomepage', { data: pictureValue.manImage });
              updatingRegistrationTableWithAlaise();
          });
}

     // var url = 'mongodb://127.0.0.1:27017/test';
     var someGeneratedUniqueIdentity;
     function pushingUniqueKeyIntoArray (gettingRamdomValues, vinil, callback){
          someGeneratedUniqueIdentity = gettingRamdomValues;
         // console.log(someGeneratedUniqueIdentity + " now......................i");
                 //var vinil = this.vinil;
                 vinil.daisesNumber.push(gettingRamdomValues);
                     mongo.connect(url, function(err, db){
                         db.collection('daisesratings').update({"name": "Ratings of Daises"}, {$set: {'Rating': vinil}})
                         identityOfPerticularDaises(gettingRamdomValues, vinil);
                         db.close();
                     });
          callback(someGeneratedUniqueIdentity);
    }

    function identityOfPerticularDaises(gettingRamdomValues, vinil){
                var postIdentifier = gettingRamdomValues;
              // vinil.postIdentifier = {};
              Object.defineProperty(vinil, postIdentifier, { value: {},
                                                             writable: true,
                                                             enumerable: true,
                                                             configurable: true });
                  mongo.connect(url, function(err, db){
                         db.collection('daisesratings').update({"name": "Ratings of Daises"}, {$set: {'Rating': vinil}});
                         db.close();
                         //console.log(vinil.gettingRamdomValues + "  000000000000000000000");
                         console.log( Object.keys(vinil) + "  2222222222222222")
                  });
    }

    function insertingToMongoDbDaisesCollection(theRandomNumber, message){

       var personalPicture;
       var firstname;
       var lastname;
       var sql = 'select pictures, FirstName, LastName from registrationtable where email = ?';
       connection.query(sql, [email], function(error, results, fields){
            if(error)throw error;
            personalPicture = results[0].pictures;
            firstname = results[0].FirstName;
            lastname = results[0].LastName;
            insertToMongoDb(personalPicture, message, firstname, lastname);
       });
       
       
       if(new Date().getHours() > 12){
           var period = 'PM';
       }else{
           var period = 'AM';
       }

      function insertToMongoDb(personalPicture, message, firstname, lastname){
             mongo.connect(url, function(err, db){
                  db.collection('Daises').insert({
                                    'Title': 'Posted Daises',
                                    'Daises': {
                                                'Daises': message,
                                                'FirstName': firstname,
                                                'LastName': lastname,
                                                'PersonalPicture': personalPicture,
                                                'OnlineStatus': '',
                                                'PostedPicture': "",
                                                'PostedVideo': "",
                                                'DaisesType': "professional",
                                                'Email': email,
                                                'RateAvg1': 10,
                                                'RateAvg2': 10,
                                                'DaisesIdentity': theRandomNumber
                                              },
                                    'Time': {
                                              'Period': period,
                                              'Seconds': new Date().getSeconds(),
                                              'Minutes': new Date().getMinutes(),
                                              'Time': new Date().getHours(),
                                              'Day': new Date().getDay(),
                                              'Month': new Date().getMonth(),
                                              'Year': new Date().getFullYear()
                                            }                                                                                      
                 });  
            });                       
      }
    }

    function insertDaisesIntoDatabase(theGeneratedIdentity){
              var dataToUpdate1 = {
                    'Email': email,
                    'Tag': tag3,
                    'Discursion': message3,
                    'DaisesIdentity': theGeneratedIdentity,
                    'Alaises': alaise3
              }

              for(x in req.body){
                    if(x == 'message3'){
                        console.log('only this guy ransssssssssssssssssss')
                         function insertingIntoDatabase1(identity){
                               var sql = "INSERT INTO daisesposting SET ?";
                               connection.query(sql, dataToUpdate1, function (error, results, fields) {
                                    if(error) throw error;
                                    //console.log(results);
                                     console.log('Professional Daises was inputed to Database');
                                     //res.send({'message': "Daises was created!"});
                                      renderingHomePage();
                                      upDateDaisesPostingTable(theGeneratedIdentity);
                                      insertingToMongoDbDaisesCollection(theGeneratedIdentity, message3)
                                     return;
                               });
                         }
                         //calling above function
                         insertingIntoDatabase1(theGeneratedIdentity);
                    }
              }
              
              function upDateDaisesPostingTable(identity){
                    var firstname; // here?
                    var lastname; // 
                    var theGeneratedIdentity = identity;
                    console.log(theGeneratedIdentity);
                    console.log('upDateDaisesPostingTable Function was called 2');
                    function nowUpdatingtheDatabase(theGeneratedIdentity){
                    
                       var sql = 'UPDATE daisesposting SET FirstName = ?, LastName = ? Where DaisesIdentity = ?';
                        connection.query(sql, [firstname, lastname, identity], function(error, results, fields){
                             if(error)throw error;
                             console.log('It Was UpdatedSuccessFully! ooooooooooooooooooooooo');
                        });

                    }  
                    console.log("we got to line 1");
                    console.log(email);
                    var sql = 'select FirstName, LastName from registrationtable where Email = ?';
                    console.log("we got to line 1");
                    
                    connection.query(sql, [email], function(error, results, fields){
                      if(error)throw error;
                      firstname = results[0].FirstName;
                      lastname = results[0].LastName;
                      
                      console.log(firstname + " " + lastname);
                      nowUpdatingtheDatabase(theGeneratedIdentity);
                    });
              }
    }

    function generatingUniqueDaisesIdentity(){
         var someRandomNiga;
             mongo.connect(url, function(err, db){
                    if(err) throw err;
                    var cursor = db.collection('daisesratings').find({'name': "Ratings of Daises"}).limit(1);
                           cursor.forEach(function(doc, err){
                              if(err) throw err;
                              console.log(doc + "this is doc");
                              var arrayObject = doc.Rating.daisesNumber;   // its an array of identity
                              console.log(arrayObject + " this is arrayObject!!!!");
                              var dataToUpdate = doc.Rating;
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
                                 for(i=0; i<=1000000; i++ ){
                                   var someRandomValue = "ABC" + generateRandomNumber();
                                      if(rateValue[i] != someRandomValue || ran3){
                                           //console.log(vinil + 'It seems something is wrong with this code block');
                                           pushingUniqueKeyIntoArray(someRandomValue, vinil, function(someGeneratedUniqueIdentity){
                                                  var theGeneratedIdentity = someGeneratedUniqueIdentity;
                                                  insertDaisesIntoDatabase(theGeneratedIdentity);
                                           });
                                           identityOfPerticularDaises(someRandomValue, vinil)
                                              console.log(vinil + 'checking vinil again');
                                              return;
                                      }
                                 }
                                 
                                
                             }
                             if(rateValue[i] != ran3){
                                  pushingUniqueKeyIntoArray(ran3, vinil, function(someGeneratedUniqueIdentity){
                                      var theGeneratedIdentity = someGeneratedUniqueIdentity;
                                      insertDaisesIntoDatabase(theGeneratedIdentity);
                                  });
                                  identityOfPerticularDaises(ran3, vinil)
                                  return;
                             } 
                     }

                 }, function(){
                         db.close();
              });              
            
        });
             
           //callback(someGeneratedUniqueIdentity);
  }

       // loop through req.body to get the input!
  for(x in req.body){
    if(x == 'message3'){
        generatingUniqueDaisesIdentity();
        return;
    }
  }
 
})


module.exports = router;
