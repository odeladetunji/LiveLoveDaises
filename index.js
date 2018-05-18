var http = require('http');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var path = require('path');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var $ = require("jquery");
var landing = require('./routes/landing');
var posting = require('./routes/posting');
var putting = require('./routes/putting');
var deletting = require('./routes/delete');
var login_post = require('./routes/loginpost');
var login_post1 = require('./routes/loginpost1');
var login_post2 = require('./routes/loginpost2');
var login_post3 = require('./routes/loginpost3');
var signup_post = require('./routes/signuppost');
var signup_post2 = require('./routes/signuppost2');
var profileSetUp = require('./routes/profileSetUp');
var profileSetUp1 = require('./routes/profileSetUp1');
var homepage = require('./routes/homepage');
var information = require('./routes/information');
var confirmingFriendRequest = require('./routes/confirmingFriendRequest');
var gettingSharingPeople = require('./routes/gettingSharingPeople');
var gettingLogPeople = require('./routes/getLog');
var gettingLove = require('./routes/gettingLove');
var gettingFamilies = require('./routes/gettingFamilies');
var gettingFriendsInPeoplesPage = require('./routes/gettingFriendsInPeoplesPage');
var gettingAquintance = require('./routes/gettingAquintance');
var gettingColleagues = require('./routes/gettingColleagues');
var meetpeople = require('./routes/meetpeople');
var get_settings = require('./routes/settings');
var gettingFriendRequest = require('./routes/gettingFriendRequest');
var homepageSearchQuery = require('./routes/homepageSearchQuery');
var searchingDataBase = require('./routes/searchingDataBase');
var fs = require('fs');
var liveSearch = require('./routes/liveSearch');
var liveSearch1 = require('./routes/liveSearch1');
var checkingOnlineStatus = require('./routes/checkingOnlineStatus');
var mongo = require('mongodb');

/*
modules to handle navigations within the site
*/
var get_Peoplepage = require('./routes/getPeoplepage');
var get_Grouppage = require('./routes/getGrouppage');
var getGroups = require('./routes/getGroups');
var get_Sharingpage = require('./routes/getSharingpage');
var get_Web_historypage = require('./routes/getWebhistorypage');
var get_Inboxpage = require('./routes/getInboxpage');
var get_Anouncement_page = require('./routes/getAnouncementpage');
var get_Biography_page = require('./routes/getBiographypage');
var get_chat_page = require('./routes/getchatpage');
var get_media_page = require('./routes/getmediapage');
var get_log_page = require('./routes/getlogpage');
var get_TimeSchdule_page = require('./routes/getTimeSchdulepage');
var checkingTimeSchedule = require('./routes/checkTimeSchedule');
var getAgain = require('./routes/getnow');
var TimeSchdule = require('./routes/timeSchdule');
var settingsProfessional = require('./routes/settingsProfessional');
var settingsBeloved = require('./routes/settingsBeloved');
var settingsSaviour = require('./routes/settingsSaviour');
var goingToHomePageNow = require('./routes/goingToHomePage');
var firsthomepage = require('./routes/goingToFirstHomepage');
var fromdefaulthomepage = require('./routes/defaulthomepage');
// bodyparser middleware!!!
var bodyParser = require('body-parser');
// setting mysql variable
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'lovedaises'
});

// connecting to mysql server
connection.connect();

/*connection.query('SELECT * FROM manufacturer', function (error, results, fields) {
    if (error) throw error;
    for(var i=0; i<=7; i++){
    console.log(results[3].country);
  }
  console.log('Database logic is working \nas it ought to work');
  console.log('');
  console.log('now logging out!');
});*/

//connection.end();

/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://beloveddais.com', 'http://www.beloveddais.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.send(200);
    }
    next();
};*/
app.use('*', cors());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
//app.options(cors());
app.set('view engine', 'ejs');
app.use('/', landing);
app.use('/landing', landing);
app.use('/posting', posting);
app.use('/landingpage/login', login_post);
app.use('/landingpage/login1', login_post1);
app.use('/landingpage/login2', login_post2);
app.use('/landingpage/login3', login_post3);
app.use('/landingpage/signup', signup_post);
app.use('/landingpage/signup2', signup_post2);
app.use('/gettingFriendRequest', gettingFriendRequest);
app.use('/confirmingFriendRequest', confirmingFriendRequest);
app.use('/gettingSharingPeople', gettingSharingPeople);
app.use('/gettingLogPeople', gettingLogPeople);
app.use('/gettingLove', gettingLove);
app.use('/gettingFamilies', gettingFamilies);
app.use('/gettingFriendsInPeoplesPage', gettingFriendsInPeoplesPage);
app.use('/gettingAquintance', gettingAquintance);
app.use('/gettingColleagues', gettingColleagues);
app.use('/putting', putting);
app.use('/deletting', deletting);
app.use('/profileSetUp', profileSetUp);
app.use('/profileSetUp1', profileSetUp1);
app.use('/homepage', homepage);
app.use('/information', information);
app.use('/meetpeople', meetpeople);
app.use('/homepageSearchQuery/:id', homepageSearchQuery);

// express conponent for handling navigations
app.use('/getPeoplepage', get_Peoplepage);
app.use('/getGrouppage', get_Grouppage);
app.use('/getGroups', getGroups);
app.use('/getSharingpage', get_Sharingpage);
app.use('/getWebhistorypage', get_Web_historypage);
app.use('/getInboxpage', get_Inboxpage);
app.use('/getAnouncementpage', get_Anouncement_page);
app.use('/getBiographypage', get_Biography_page);
app.use('/getchatpage', get_chat_page);
app.use('/getlogpage', get_log_page);
app.use('/getmediapage', get_media_page);
app.use('/getTimeSchdulepage', get_TimeSchdule_page);
app.use('/getAgain', getAgain);
app.use('/TimeSchdule', TimeSchdule);
app.use('/settings', get_settings);
app.use('/settingsProfessional', settingsProfessional);
app.use('/settingsSaviour', settingsSaviour);
app.use('/settingsBeloved', settingsBeloved);
app.use('/settings/goingToHomePage', goingToHomePageNow);
app.use('/profileSetUp/firsthomepage', firsthomepage);
app.use('/settings/firsthomepage', firsthomepage);
app.use('/firsthomepage/daises',fromdefaulthomepage);
app.use('/searchingDataBase', searchingDataBase);
app.use('/liveSearch', liveSearch);
app.use('/liveSearch1', liveSearch1);
app.use('/checkTimeSchedule', checkingTimeSchedule);
app.use('/checkingOnlineStatus', checkingOnlineStatus);
//app.use(allowCrossDomain);
/*var whitelist = ["http://127.0.0.1:1337/changepicture", "http://127.0.0.1:1337/daisesposting", "http://127.0.0.1:8080/rating",
 'http://127.0.0.1:8080', 'http://127.0.0.1:8080/gettingFriendRequest', 'http://127.0.0.1:8080/friendslist', "http://127.0.0.1:8080/gettingFormerChat"];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}*/

 // socket.io logic starts here!
 var socketUsers = {};
 var socketUsers3 = {};
 var socketUsersX = {};
 var personalSocketX;
 var personalSocket;
 var socketUsers1 = {}; // this one is for online status;
 var personalSocket1;   // this one is for online status also!
 var onlineDataUniqueKeyPair = {};
 var videoUsers = {};
 var personalSocketVideo;
 var videoUsers2 = {};
io.on('connection', function(socket){  
          console.log('someOne connected!!');
          
          socket.emit('news', {hello: 'this is from socket.io'});

          socket.on('setting emails and sockets', function(data, callback){
                callback(data);
                personalSocketX = data.sendersEmail;
                Object.defineProperty(socketUsersX, personalSocketX, {
                                                                       value: socket,
                                                                       writable: true,
                                                                       enumerable: true,
                                                                       configurable: true 
                                                                      });
               // console.log(socketUsersX);
                console.log('check above for objectX ....................');
          });

          socket.on('my other event', function (data) {
                 console.log(data);
          });

          socket.on('emitting from Ajax Function', function(data){
                 console.log('data just arrived from the client Tunji');
                 var senderEmail = data.sEmail;
                 var getFirstname, getLastName;
                 var messageFromPersonalSocket = {};
                         function populatingObject(results){
                                
                                      
                                  messageFromPersonalSocket.getFirstname = results[0].Firstname;
                                  messageFromPersonalSocket.getLastName = results[0].Lastname;
                                
                                     // console.log(data.sDiscursion)
                                   messageFromPersonalSocket.getDiscursion = data.sDiscursion;
                                   if(data.sPictureName)
                                     messageFromPersonalSocket.getPictureName = data.sPictureName;
                                   if(data.sVideoName)
                                     messageFromPersonalSocket.getVideoName = data.sVideoName;
                                     messageFromPersonalSocket.getTag = data.sTagValue;
                                     messageFromPersonalSocket.getSenderEmail = data.sEmail;
                                     messageFromPersonalSocket.getUniqueId = data.sUniqueId;
                                     messageFromPersonalSocket.getPersonalPicture = results[0].Pictures;
                                   if(results[0].Pictures == "")messageFromPersonalSocket.getPersonalPicture = "man.jpg";
                                  // console.log(messageFromPersonalSocket);
                                      personalSocket = data.sEmail;
                                        Object.defineProperty(socketUsers, personalSocket, {
                                                                               value: socket,
                                                                               writable: true,
                                                                               enumerable: true,
                                                                               configurable: true 
                                                                         });
                                    //  console.log(socketUsers);
                            // socketUsers.personalSocket = socket;
                           //  socketUsers.personalSocket.emit("Resending Submitted Daises To client", messageFromPersonalSocket);
                             /*socketUsers[data.sEmail]*/io.sockets/*.broadcast*/.emit("Resending Submitted Daises To client", messageFromPersonalSocket);
                                                        console.log('finished sending to client .....');
                         }

                 connection.query('Select Firstname, Lastname, Pictures From registrationtable Where Email = ?', [senderEmail], function (error, results, fields) {
                    if(error) throw error;
                    populatingObject(results);
                 })
          });

          socket.on('requestHonoured', function(data){
               var gottenData = data;
               console.log(data)
               var objectCreated;
               var onlineStatus;
               var callerSocket = socketUsersX[gottenData.callersEmail];
               var recipientSocket = socketUsersX[gottenData.recipientEmail];
               var readFileStream = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
               readFileStream.on('open', function(){
                   console.log('file Opened for read operation!!!!');
               });

               readFileStream.on('data', function(chunk){
                   objectCreated = JSON.parse(chunk);
                   onlineStatus = objectCreated[data.callersEmail.split('@')[0]];
                   if (onlineStatus == 'offline') {
                       console.log('code got here if was invoked')
                       
                       callerSocket.emit('wentOffline', gottenData, function (data) {
                             console.log(data)
                       });
                   }else{
                       console.log('else statement was invoked')
                       recipientSocket.emit('stillOnline', gottenData, function(data){
                             console.log('first was emitten')
                       });

                       callerSocket.emit('stillOnline', gottenData, function (data) {
                             console.log('second was emmited')
                       });
                   }
                   console.log('reading file data');
               })

               readFileStream.on('end', function(){
                   console.log('File Reading has Ended index.js .    ||   index.js');
               });
          });

          socket.on('requestToConnect', function(data){
                console.log('Data got here');
                console.log(data)
                var dataToSend = {}
                var recipientEmail = data.recipientEmail;
                var recipientSocket = socketUsersX[recipientEmail];
                var callerFirstName, callerLastName;
                var recipientDaises;
                console.log('got here');
                function emmittingCall() {
                    var sql = 'select Discursion from daisesposting where daisesidentity = ?'
                    connection.query(sql, [data.recipientIdentity], function(error, results ,fields){
                         if (error) {
                             throw error;
                         }
                        recipientDaises = results[0].Discursion;
                        dataToSend['recipientDaises'] = recipientDaises;
                        dataToSend['callersFirstName'] = callerFirstName;
                        dataToSend['callersLastName'] = callerLastName;
                        dataToSend['callersEmail'] = data.callerEmail;
                        dataToSend['recipientEmail'] = data.recipientEmail;
                        //emitting to recipient!
                        recipientSocket.emit('incomingRequest', dataToSend, function (data) {
                          console.log('incomingRequest Emitted  || socket.io');
                        });
                    });
                }


                function callersIdentity(callerEmail) {
                    var sql = 'select firstName, lastname from registrationtable where email = ?'
                    connection.query(sql, [callerEmail], function(error, results, fields){
                         if (error) {
                           throw error;
                         }
                         console.log(results)
                         callerFirstName = results[0].firstName;
                         callerLastName = results[0].lastname;
                         emmittingCall();
                    })
                }

                callersIdentity(data.callerEmail);
          });

          
          socket.on('endingChatOfficial', function(data){
                
          })
       /*   socket.on('sending from reachOut', function(data){
                socketUsers.personalSocket.emit('chatMessage Returned from server', data);
          })  */

          function inputChatToDatabase(data){
              var friendEmail = data.FriendEmail;
              var OwnersEmail = data.personalEmail;
              var chatMessage = data.chatMessage;
              var messenger = data.personalEmail;
              var sql = 'INSERT INTO chattable SET FriendEmail = ?, OwnersEmail = ?, Chat = ?, Messenger = ?';
                 connection.query(sql, [friendEmail, OwnersEmail, chatMessage, messenger], function(error, results, fields){
                      if(error)throw error;
                      console.log('Data was inputed to chat Section Successfully!.... from sender');
                 });
          }

          function inputChatToDatabase2(data){

              var friendEmail = data.FriendEmail;
              var OwnersEmail = data.personalEmail;
              var chatMessage = data.chatMessage;
              var messenger = data.personalEmail;

              var sql = 'INSERT INTO chattable SET FriendEmail = ?, OwnersEmail = ?, Chat = ?, Messenger = ?';
                 connection.query(sql, [OwnersEmail, friendEmail, chatMessage, messenger], function(error, results, fields){
                      if(error)throw error;
                      console.log('Data was inputed to chat Section Successfully!... from recepient');
                 });

          }

          socket.on('sending from chat', function(data, callback){
               callback(data);
               console.log(data);// just using this to check what is being delivered on the server!
               console.log('this is from socket.io server......................');
               var friendEmail = data.FriendEmail;
               var personalEmail = data.personalEmail;
               var chatMessage = data.chatMessage;
               
               inputChatToDatabase(data);
               var friendSocket = socketUsersX[friendEmail];
               var dataToSend = {'chatMessage': chatMessage, 
                                 'FriendEmail': friendEmail,
                                 'personalEmail': personalEmail};
                
                // sending chat to specific friends!
               friendSocket.emit('FriendsChat', dataToSend, function(data){
                     inputChatToDatabase2(data);
                     console.log(data);
                     console.log('sending from FriendsChat .....................');
               }); 
          });
        

           socket.on('am online now!', function(data){
                 console.log('something happened');
                 console.log(data);
                 console.log('first Data!!!!!');
                  // updating online status in onlineOffline registration table!
                var sql = 'UPDATE onlineofflinestatustable SET OnlineStatus = ? WHERE Email = ?';
                connection.query(sql, ['online', data.personalEmail], function(error, results, fields){
                      if(error)throw error;
                      console.log(data.personalEmail + "   onlineStatus was updated succesfully!. Status: online;");
                });

                // update the file also!
                // 
                var jsonDataBase;
                var getFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                getFile.on('data', function(chunk){
                    jsonDataBase = JSON.parse(chunk);
                    console.log(chunk)
                    jsonDataBase[data.personalEmail.split("@")[0]] = "online";
                    (function(){
                        var writeToDataBase = fs.createWriteStream('./public/onlineDataBase/onlineStatus.json');
                            writeToDataBase.write(JSON.stringify(jsonDataBase));
                            writeToDataBase.end(function(){
                                 console.log('finished updating online status!   ||  online');
                            }); 
                    })();
                });

                getFile.on('error', function(){
                     console.log('Error .............. ReadStream Error  ||  signuppost.js');
                });
                
                var personalEmail = data.personalEmail;  // just storing it in a variable, thats all!
                // we need an identifier in the database
                /*Now at this point we will use mongodb, we are to create a collection of unique
                numbers, so as not to dupplicate the onlineIdentifier for people.... We will do 
                on the signup post page*/
                console.log(data);
                console.log(personalEmail);
                console.log('seeing the value');
                var mySql = 'SELECT onlineIdentifier FROM onlineofflinestatustable WHERE Email = ?';
                connection.query(mySql, [personalEmail], function(error, results, fields){
                      if(error)throw error;
                      var statusID = results[0].onlineIdentifier;
                      Object.defineProperty(onlineDataUniqueKeyPair, statusID, {
                                                                                   value: personalEmail,
                                                                                   writable: true,
                                                                                   enumerable: true,
                                                                                   configurable: true 
                                                                               });
                });

                Object.defineProperty(socketUsers1, personalEmail, {
                                                                                   value: socket,
                                                                                   writable: true,
                                                                                   enumerable: true,
                                                                                   configurable: true 
                                                                               });
                
                 
              
           });

           socket.on('videoChat Connection!', function(data, callback){
                 callback('videoInterface Connected Successfully!');
                 // setting identity!
                 if(videoUsers[data] == null){
                    // identifying users!
                    Object.defineProperty(videoUsers, data.personalEmail, {
                                                               value: socket,
                                                               writable: true,
                                                               enumerable: true,
                                                               configurable: true 
                                                            });

                    Object.defineProperty(videoUsers2, data.personalEmail, {
                                                               value: 'not busy!',
                                                               writable: true,
                                                               enumerable: true,
                                                               configurable: true 
                                                            });
                 }

           });
           
           socket.on('videoChat Friend', function(data, callback){
                   var gottenData;
                   var onlineStatus;
                   var availabilityStatus;
                   var readFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                   readFile.on('open', function(){
                         console.log('File Opened   ||  Socket.io');
                   });

                   readFile.on('data', function(chunk){
                         gottenData = JSON.parse(chunk);
                         onlineStatus = gottenData[data.friendIdentity.split('@')[0]];
                         if (onlineStatus == 'online') {
                                 var readFileAgain = fs.createReadStream('./public/onlineDataBase/availabilityStatus.json');
                                 readFileAgain.on('open', function(){
                                     console.log('File Opened For Reading  || Socket.io');
                                 });
                                 readFileAgain.on('data', function(chunk){
                                     gottenData = JSON.parse(chunk);
                                     availabilityStatus = gottenData[data.friendIdentity.split('@')[0]];
                                     if (availabilityStatus == 'notBusy!') {
                                         var callersSocket = socketUsersX[data.ownersEmail];
                                         callersSocket.emit('notBusy!', function (data) {
                                             console.log(data);
                                         });
                                     }else{
                                         // meaning this guy is busy!
                                         var callersSocket = socketUsersX[data.ownersEmail];
                                         callersSocket.emit('busy!', function (data) {
                                             console.log(data);
                                         });
                                     }
                                 });
                                 readFileAgain.on('end', function(){
                                     console.log('Finished Reading File  ||  Socket.io')
                                 });
                         }else{
                             // this means the person is offline!
                             var callersSocket = socketUsersX[data.ownersEmail];
                             callersSocket.emit('user not online', function () {
                                     console.log('user not online');
                             });
                         }
                   });
           });

           socket.on('offer', function(data, callback){
                       callback('offer was sent to: ' + data.friendIdentity);
                       var friendFullName;
                       var sql = 'Select firstName, LastName From registrationtable Where Email = ?';
                       connection.query(sql, [data.friendIdentity], function(error, results, fields){
                              if(error)throw error;
                              var callerName = results[FirstName] + ' ' + results[Lastname];
                              nameGetter(callerName);
                       });

                       function nameGetter(callerName){
                           // calling someOne!
                           data.fullname = callerName;
                           data.friendEmail = data.friendIdentity;

                           var readFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                           readFile.on('open', function () {
                               console.log('File Opened For Reading!!!');
                           });

                           readFile.on('data', function (chunk) {
                               var fileContent = JSON.parse(chunk);
                               var onlineStatus = fileContent[data.friendIdentity.split('@')[0]];
                               if (onlineStatus == 'online') {
                                   var recipientSocket = socketUsersX[data.friendIdentity];
                                   recipientSocket.emit('inComingOffer', data, function (data) {
                                       console.log(data);
                                   });
                               } else {
                                   var callersSocket = socketUsersX[data.ownerEmail];
                                   callersSocket.emit('user not online', data);
                               }
                           });

                           readFile.on('end', function () {
                               console.log('Finished Reading File');
                           })
                       }
                 
           });

           socket.on('answer', function(data, callback){
               callback('answer sent!');

               var readFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
               readFile.on('open', function () {
                   console.log('File Opened For Reading!!!');
               });

               readFile.on('data', function (chunk) {
                   var fileContent = JSON.parse(chunk);
                   var onlineStatus = fileContent[data.friendIdentity.split('@')[0]];
                   if (onlineStatus == 'online') {
                       var recipientSocket = socketUsersX[data.friendIdentity];
                       recipientSocket.emit('onAnswer', data);
                   } else {
                       var callersSocket = socketUsersX[data.ownerEmail];
                       callersSocket.emit('user not online', data);
                   }
               });

               readFile.on('end', function () {
                   console.log('Finished Reading File');
               })
           });

           socket.on('candidate', function(data){
                   var readFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                   readFile.on('open', function(){
                       console.log('File Opened For Reading!!!');
                   });

                   readFile.on('data', function(chunk){
                       var fileContent = JSON.parse(chunk);
                       var onlineStatus = fileContent[data.friendIdentity.split('@')[0]];
                       if (onlineStatus == 'online') {
                           var recipientSocket = socketUsersX[data.friendIdentity];
                           recipientSocket.emit('incoming candidate', data);
                       }else{
                           var callersSocket = socketUsersX[data.ownerEmail];
                           callersSocket.emit('user not online', data);
                       }
                   });

                   readFile.on('end', function() {
                       console.log('Finished Reading File');
                   })
               
           });

           socket.on('disconnect', function() {
                console.log('SomeOne just Disconnected................');
                            for(x in socketUsers1){
                                 console.log(x + "one thing"); 
                                 console.log('iiiiiiiiiiiiii')
                               for(var i=0; i<=Object.keys(onlineDataUniqueKeyPair).length; i++){
                                      console.log('oooooooooooooooooooo')
                                   if((socketUsers1[x] = socket) && (onlineDataUniqueKeyPair[i] = x)){
                                          (function(){
                                                    var sql = 'UPDATE onlineofflinestatustable SET OnlineStatus = ? WHERE Email = ?';
                                                    connection.query(sql, ['offline', x], function(error, results, fields){
                                                          if(error)throw error;
                                                          console.log(socketUsers1[x] + "   onlineStatus was updated succesfully!. Status:   offline;");
                                                    });

                                                     (function(){
                                                          var jsonDataBase;
                                                          var valueOfX = x;
                                                          var getFile = fs.createReadStream('./public/onlineDataBase/onlineStatus.json');
                                                          getFile.on('data', function(chunk){
                                                              jsonDataBase = JSON.parse(chunk);
                                                              jsonDataBase[valueOfX.split("@")[0]] = "offline";
                                                              (function(){
                                                                      var writeToDataBase = fs.createWriteStream('./public/onlineDataBase/onlineStatus.json');
                                                                      writeToDataBase.write(JSON.stringify(jsonDataBase));
                                                                      
                                                                      writeToDataBase.on('error', function(){
                                                                            console.log('Error Writing file ..................  socket.io  || index.js');
                                                                      })

                                                                      writeToDataBase.end(function(){
                                                                          console.log('DataBase Updated Successfull   socket.io    ||    offline');                      
                                                                      })
                                                              })();
                                                          });
                                                     })();

                                          })();
                                          (function(){
                                                   var sql = 'Select firstname, lastname From registrationtable Where Email = ?';
                                                   connection.query(sql, [x], function(error, results, fields){
                                                         if(error)throw error;
                                                        // updateAllStatusOfTheUser(firstname, lastname);
                                                   });
                                          })();
                                        
                                      return;
                                   }
                               }
                                
                          }
           });
});


// listening on port 9000...
/*app.listen(9000, function () {
 console.log('Our app is still working!')
})*/

server.listen(9000, function(){
  console.log("LoveDaises App is running live now!");
});

module.export = app;
