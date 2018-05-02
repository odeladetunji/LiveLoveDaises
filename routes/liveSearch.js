var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongo = require('mongodb');
var fs = require('fs');
var url = 'mongodb://127.0.0.1:27017/test';
console.log('this module was called ++++++++++++++++++++++++++++++++++++++=');
router.post('/', function(req, res){
//app.post('/liveSearch', /*cors(allowCrossDomain),*/ jsonParser, function(req, res){
       var searchQuery = req.body.value;
       console.log(searchQuery + '  this is search query');
       var resultLength;
       // search mongoDB!
       var resultLength;
       var getFile;
       //getting stream object;
               var jsonDataBase;
               function creatingReadableStream(){
                           getFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                           getFile.on('open', function(){
                              console.log('File Open for read operation  ||  onlineStatus.json')
                           });

                           getFile.on('data', function(chunk){
                                //console.log(JSON.stringify(chunk));
                                console.log(JSON.parse(chunk));
                                jsonDataBase = JSON.parse(chunk);
                                jsonDataBase['myName'] = 'Olatunji Odelade H.';
                                jsonDataBase['Bank Account'] = 'First Bank';
                                jsonDataBase['Bank Name'] = 'Guarantee Trust Bank';
                                console.log(jsonDataBase);
                                console.log('Thats the Chunck of Data');
                           });

                           getFile.on('end', function(){
                                console.log('this is what ran');
                                console.log('No more Data To be Read............');
                                //writingToFile();
                                getTheDaises();
                           })

                           getFile.on('error', function(){
                               console.log('=================== its Definitly Errored!!!!');
                           });
               }

               creatingReadableStream();

       // setting this two variables global
       var neededEmail;
       var returnedDaisesOutSide;

       function gettingFoundResults(){
             mongo.connect(url, function(err, db){
                if(err)throw err;
                  var cursor = db.collection('Daises').find({$text: {$search: searchQuery}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}});
                  var loopingCounter = 0;
                  var onlineResult = [];
                  var offlineResult = [];
                  var counter = 0;
                  var onlineCounter = 0;
                  var offlineCounter = 0;
                  var foundResult;

                  function gettingOnlineStatusSQL(returnedDaises){
                        var getOnlineStatus = jsonDataBase[neededEmail.split("@")[0]]; //returns online status
                        returnedDaisesOutSide.OnlineStatus = getOnlineStatus;
                        SortObjectAccordingToOnlineStatus(returnedDaisesOutSide);
                  }

                  function SortObjectAccordingToOnlineStatus(returnedDaises){
                                      for(x in returnedDaises){
                                            counter++;
                                            if(returnedDaises[x] == 'online'){
                                                onlineCounter++;
                                                foundResult = {};
                                                var onlineSecondCounter = 0;
                                                for(u in returnedDaises){
                                                      onlineSecondCounter++;
                                                      if(u == 'FirstName'){
                                                         foundResult.FirstName = returnedDaises[u];
                                                      }
                                                      if(u == 'LastName'){
                                                         foundResult.LastName = returnedDaises[u];
                                                      }
                                                      if(u == 'OfflineStatus'){
                                                         foundResult.OfflineStatus = returnedDaises[u];
                                                      }
                                                      if(u == 'OnlineStatus'){
                                                         foundResult.OnlineStatus = returnedDaises[u];
                                                      }
                                                      if(u == 'PostedPicture'){
                                                         foundResult.PostedPicture = returnedDaises[u];
                                                      }
                                                      if(u == 'PostedVideo'){
                                                         foundResult.PostedVideo = returnedDaises[u];
                                                      }
                                                      if(u == 'DaisesType'){
                                                         foundResult.DaisesType = returnedDaises[u];
                                                      }
                                                      if(u == 'Daises'){
                                                         foundResult.Daises = returnedDaises[u];
                                                      }
                                                      if(u == 'RateAvg1'){
                                                         foundResult.RateAvg1 = returnedDaises[u];
                                                      }
                                                      if(u == 'RateAvg2'){
                                                         foundResult.RateAvg2 = returnedDaises[u];
                                                      }
                                                      if(u == 'PersonalPicture'){
                                                         foundResult.PersonalPicture = returnedDaises[u];
                                                      }
                                                      if(u == 'DaisesIdentity'){
                                                         foundResult.DaisesIdentity = returnedDaises[u];
                                                      }

                                                      if(onlineSecondCounter == Object.keys(returnedDaises).length){
                                                         onlineResult.push(foundResult);
                                                      }
                                                }
                                            }

                                            if(returnedDaises[x] == 'offline'){
                                                 offlineCounter++;
                                                 foundResult = {};
                                                 var offlineSecondCounter = 0;
                                                  for(k in returnedDaises){
                                                      offlineSecondCounter++;
                                                      if(k == 'FirstName'){
                                                         foundResult.FirstName = returnedDaises[k];
                                                      }
                                                      if(k == 'LastName'){
                                                         foundResult.LastName = returnedDaises[k];
                                                      }
                                                      if(k == 'OfflineStatus'){
                                                         foundResult.OfflineStatus = returnedDaises[k];
                                                      }
                                                      if(k == 'OnlineStatus'){
                                                         foundResult.OnlineStatus = returnedDaises[k];
                                                      }
                                                      if(k == 'PostedPicture'){
                                                         foundResult.PostedPicture = returnedDaises[k];
                                                      }
                                                      if(k == 'PostedVideo'){
                                                         foundResult.PostedVideo = returnedDaises[k];
                                                      }
                                                      if(k == 'DaisesType'){
                                                         foundResult.DaisesType = returnedDaises[k];
                                                      }
                                                      if(k == 'Daises'){
                                                         foundResult.Daises = returnedDaises[k];
                                                      }
                                                      if(k == 'RateAvg1'){
                                                         foundResult.RateAvg1 = returnedDaises[k];
                                                      }
                                                      if(k == 'RateAvg2'){
                                                         foundResult.RateAvg2 = returnedDaises[k];
                                                      }
                                                      if(k == 'PersonalPicture'){
                                                         foundResult.PersonalPicture = returnedDaises[k];
                                                      }
                                                      if(k == 'DaisesIdentity'){
                                                         foundResult.DaisesIdentity = returnedDaises[k];
                                                      }

                                                      if(offlineSecondCounter == Object.keys(returnedDaises).length){
                                                         offlineResult.push(foundResult);
                                                      }
                                                  }
                                            }
                                      }
                  }

                    var arrayStore = [];           
                    var counterForDoc = 0;
                    var countingContainer = 0;
                   // var parsedData;
                    cursor.forEach(function(doc, err){
                        if(err) throw err;
                           counterForDoc++
                           var returnedDaises = doc.Daises;
                           returnedDaisesOutSide = returnedDaises;
                           arrayStore.push(returnedDaisesOutSide);
                           neededEmail = returnedDaises.Email;
                           gettingOnlineStatusSQL(returnedDaises);
                           countingContainer++;
                           if(counterForDoc == resultLength){
                                    setTimeout(function(){
                                           if(onlineCounter >= 1 && offlineCounter >= 1){
                                                   console.log('this is from firstSection');
                                                   res.send({'online': onlineResult, 'offline': offlineResult});
                                                   return;
                                           }
                                           if(onlineCounter >= 1 && offlineCounter == 0){
                                                  // console.log(onlineResult);
                                                   console.log('this is from secondSection');
                                                   res.send({'online': onlineResult, 'offline': '', 'amount': resultLength});
                                                   return;
                                           }
                                           if(onlineCounter == 0 && offlineCounter >= 1){
                                                   console.log('this is from thirdsection');
                                                   res.send({'online': '', 'offline': offlineResult, 'amount': resultLength});
                                                   return;
                                           }
                                    }, 5);
                           }
                    })
             });   
       }
       

       function getTheDaises(){
                mongo.connect(url, function(err, db){
                      if(err)throw err;
                        var cursor = db.collection('Daises').find({$text: {$search: req.body.searchQuery}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}}).count();
                        // dont forget that the cursor returns a promise!
                        // you will have to handle it with the then() function call which accept a CallBacks
                        //console.log(cursor);
                        cursor.then(function(result){
                            if(result == 0){
                                res.send({'message': 'No Result Found!'});
                                return;
                            }else{
                                resultLength = result;
                                gettingFoundResults();
                            }
                        }, function(error){
                             console.log(error);
                             console.log("Error Function Ran  ...........");
                        });
                });
       }
       
});

module.exports = router