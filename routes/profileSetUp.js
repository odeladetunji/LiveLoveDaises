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
    console.log(req.body);
		var alaise1 = req.body.alaise1;
		var alaise2 = req.body.alaise2;
		var alaise3 = req.body.aliase3;

		var message1 = req.body.message1;
		var message2 = req.body.message2;
		var message3 = req.body.message3;

		var tag1 = req.body.daises1;
		var tag2 = req.body.daises2;
		var tag3 = req.body.daises3;

		var amount = req.body.amount;


		var email = req.cookies.daises;
        console.log(email);
        console.log(email + " " + "checkout");

	  console.log(message1);


  var connection = mysql.createConnection({
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : '',
	    database : 'lovedaises'
	});

    //connecting to database!
    connection.connect();

    // we will be using message1, message2 and message3 to know if user entered something!
    
    var url = 'mongodb://127.0.0.1:27017/test';
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
    
    function insertingToMongoDbDaisesCollection(theRandomNumber, message, enteredDaises){

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
       
       //Am commenting out the code here since this feature is not needed yet!
       /*if(req.files.videofile){
          var videofile = req.files.videofile[0].filename;
       }else{
          var videofile = '';
       }

       if(req.files.imagefile){
          var imagefile = req.files.imagefile[0].filename;
       }else{
          var imagefile = '';
       }*/
       
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
                                                'DaisesType': enteredDaises,
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
              for(x in req.body){
                    if(x == 'message1'){
                        console.log('only this guy ransssssssssssssssssss')
                         function insertingIntoDatabase1(identity){
                            function updatingRegistrationTableWithAlaise1(){
                                     var sql = 'UPDATE registrationtable SET Alaise = ? WHERE Email = ?';
                                      connection.query(sql, [alaise1, email], function(error, results, fields){
                                           if(error)throw error;
                                           console.log('Finished Updating RegistrationTable');
                                      });
                            }
                               var sql = "INSERT INTO daisesposting SET Email = ?, Tag = ?, Discursion = ?, Alaises = ?, DaisesIdentity = ?";
                               connection.query(sql, [email, tag1, message1, alaise1, identity], function (error, results, fields) {
                                    if(error) throw error;
                                    //console.log(results);
                                     console.log('Beloved Daises was inputed to Database2');
                                     res.send({'message': "Daises was created!"});
                                     updatingRegistrationTableWithAlaise1();
                                     upDateDaisesPostingTable(identity);
                                     var belovedDaises = "beloved";
                                     insertingToMongoDbDaisesCollection(identity, message1, belovedDaises);
                                     return;
                               });
                         }
                         insertingIntoDatabase1(theGeneratedIdentity);
                    }

                    if(x == 'message2'){
                          function insertingIntoDatabase2(identity){

                                 function updatingRegistrationTableWithAlaise(){
                                      var sql = 'UPDATE registrationtable SET Alaise = ? WHERE Email = ?';
                                      connection.query(sql, [alaise2, email], function(error, results, fields){
                                           if(error)throw error;
                                           console.log('Finished Updating RegistrationTable');
                                      });
                                 }

                                 var sql = "INSERT INTO daisesposting SET Email = ?, Tag = ?, Discursion = ?, Alaises = ?, DaisesIdentity = ?";
                                 connection.query(sql, [email, tag2, message2, alaise2, identity], function (error, results, fields) {
                                      if(error) throw error;
                                      //console.log(results);
                                       console.log('Saviour Daises was inputed to Database');
                                       res.send({'message': "Daises was created!"});
                                       updatingRegistrationTableWithAlaise();
                                       upDateDaisesPostingTable(identity);
                                       var saviouDaises = 'saviour';
                                       insertingToMongoDbDaisesCollection(identity, message2, saviouDaises);
                                       return;
                                 });
                          }
                          insertingIntoDatabase2(theGeneratedIdentity);
                    }
              }
          
          function upDateDaisesPostingTable(identity){
              var firstname;
              var lastname;
      
              function nowUpdatingtheDatabase(){
                  var sql = 'UPDATE daisesposting SET FirstName = ?, LastName = ? Where DaisesIdentity = ?';
                  connection.query(sql, [firstname, lastname, identity], function(error, results, fields){
                       if(error)throw error;
                       console.log('It Was UpdatedSuccessFully! profileSetUp');
                  });
              }  

              var sql = 'Select FirstName, LastName from registrationtable WHERE email = ?';
              connection.query(sql, [email], function(error, results, fields){
                if(error)throw error;
                firstname = results[0].FirstName;
                lastname = results[0].LastName;
                
                nowUpdatingtheDatabase();
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
    if(x == 'message1'){
        generatingUniqueDaisesIdentity();
        return;
    }

    if(x == 'message2'){
        generatingUniqueDaisesIdentity();
        return;
    }
  }

	
 
})

module.exports = router;
