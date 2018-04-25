var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();
var mysql = require('mysql');

router.post('/', function(req, res){
         console.log(req.body);
         var personalEmail = req.body.personalEmail;
         var emptyString = "";
         var valueStore = [];
        // var stringData;
         var firstObjectStore = [];
         var secondObjectStore = [];
         var thirdObjectStore = [];
         var fouthStringObject = [];
         var emailList = [];
         var keyPairData = {};
         var counterGlobal = 0;
         var counterGlobal1 = 0;
         var counterGlobal2 = 0;
         var counterGlobal3 = 0;
         var counterGlobal4 = 0;
         var noValueAgain,
             noValueAgain1,
             noValueAgain2,
             noValueAgain3,
             gettingLength,
             sql1,
             sql2;

        console.log(personalEmail + "  >>>>>>>>>>>>>>>>>>>>>>>>");
         // setting mysql variable
        var connection = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : '',
            database : 'lovedaises'
        });

        // connecting to mysql server
        connection.connect();
            // console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
        var noValueAgain = 0; /* Do not delete this, its used for checking the last 
        computed value*/
          function addingOnlineStatus1(counter){
                    var someNiger1 = counter;
                        var sql = 'Select onlineStatus FROM onlineofflinestatustable where Email = ?';
                        connection.query(sql, [emailList[someNiger1]], function(error, results, fields){
                              if(error)throw error;
                        
                               secondObjectStore[0][someNiger1].onlineStatus = results[0].OnlineStatus;
                               //thirdObjectStore.push(secondObjectStore[someNiger1]);

                               counterGlobal2++;
                               if(counterGlobal2 == emailList.length){
                                  thirdObjectStore.push(secondObjectStore[0]);
                                 // console.log(thirdObjectStore);
                                  callingTheLastFunction(); // used to get pictures!;
                                  //console.log(secondObjectStore);
                                  //console.log("It was called againd now!");
                               }
                        });
          }

          function addingOnlineStatus(){
              for(var i=0; i < emailList.length; i++){
                     addingOnlineStatus1(i);
              }

          }
          
          function callingTheLastFunction1(counter){
                 var someNiger = counter;
                          var sql1 = 'SELECT Pictures From registrationtable where Email = ?';
                          var defaultPicture = {'defaultPictureValue': 'man.jpg'};
                         
                          connection.query(sql1, [emailList[someNiger]], function(error, results, fields){
                            if(error)throw error;

                                  var pictureValue = results[0].Pictures;
                                
                                  if(pictureValue == ''){
                                       thirdObjectStore[0][someNiger].FriendPicture = defaultPicture.defaultPictureValue;
                                       console.log(thirdObjectStore);
                                       fouthStringObject.push(thirdObjectStore[0]);
                                       console.log('00000000000000000000000000000000000');
                                       console.log(thirdObjectStore);
                                       console.log('this guy  yyyyyyyyyyyyyyyyyyyyy');
                                       valueStore.push(fouthStringObject[0]);
                                  }

                                  if(pictureValue != ''){
                                       console.log('this guy ranuuuuuuuuuuuuuuuuuu');
                                       thirdObjectStore[0][someNiger].FriedPicture = pictureValue;
                                       fouthStringObject.push(thirdObjectStore[0]);
                                       valueStore.push(fouthStringObject[0]);
                                  }
                                  
                                    counterGlobal++
                                  if(counterGlobal == emailList.length){
                                    res.send({'message': valueStore[0]});
                                    console.log('the last value');
                                  }
                          });
          }

          function callingTheLastFunction(){  //self invoking function!
             for(var i=0; i < emailList.length; i++){
                  var counter = i;
                  callingTheLastFunction1(counter);
             }
          }

        
          function addingAlaiseToStringObject1(counter){
                 var someNiger2 = counter;
                      var sql1 = "Select Alaise From registrationtable where Email = ?";
                        //function below is for fetching data from the DataBase!!!!
                       connection.query(sql1, [emailList[someNiger2]], function(error, results, fields){
                            if(error)throw error;
                                    firstObjectStore[someNiger2].Alaise = results[0].Alaise;
                                    counterGlobal1++;
                                   if(counterGlobal1 == emailList.length){
                                       secondObjectStore.push(firstObjectStore);
                                       addingOnlineStatus();
                                   }
                       })   
          }

             function addingAlaiseToStringObject(){
                 for(var i=0; i < emailList.length; i++){
                    var counter = i;     
                    addingAlaiseToStringObject1(counter);          
                }
             }

         var sql = 'SELECT FriendFirstName, FriendLastName, FriendEmail FROM friendstable Where Tag = ? AND OwnerEmail = ?'
         connection.query(sql, ['Friends', personalEmail], function (error, results, fields) {
            console.log('its the object');
             if(error) throw error;  
                 gettingLength = results.length;
                   
                 if(gettingLength != 0){
                      for(var i=0; i < results.length; i++){
                          console.log('It ran lllllllllllllllllll');
                          var resultValue = results[i];
                           keyPairData.FriendFirstName = resultValue.FriendFirstName;
                           keyPairData.FriendLastName = resultValue.FriendLastName;
                           keyPairData.FriendEmail = resultValue.FriendEmail;
    
                           firstObjectStore.push(keyPairData);
                           keyPairData = {}
                           emailList.push(results[i].FriendEmail); // will use the emails to get Alaises by looping!;
        
                           noValueAgain = 0;
                           noValueAgain += results.length - 1;
                  
                          if(i == noValueAgain){
                             console.log('//////////////////////////');
                             //console.log(firstObjectStore)
                             addingAlaiseToStringObject();
                             return;
                         }

                      } 
                 }
                   
                   
                 if((gettingLength == 0)){
                      console.log('actually this guy worked');
                      res.send({'message': 'You have not Tagged Friends Yet!!'});
                 }
          });
});

module.exports = router;
