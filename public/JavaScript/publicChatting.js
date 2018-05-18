// chatting logic!

 var userSentPicture;
 var socketSentData;
 var socket; // = io.connect('http://127.0.0.1:9000');
 var identityStoreForCalling = {};
 var incommingCallInformation;

$('document').ready(function (event) {
	var socket = io.connect('http://127.0.0.1:9000');
	console.log(mycookie);
	console.log('seeing mycookie');
	setTimeout(() => {
		socket.emit("my other event", "this one is from the client side");
		socket.emit('am online now!', { 'personalEmail': mycookie }, function (data) {
			console.log(data);
			console.log('callback function ran for "am online now!"');
		});
	}, 5000);
});
 // this code is not to be deleted for any reason
 // its sending email to an object and setting the 
 // value to the socket that sent it!!!
 socket.on('news', function(data){
 	  socket.emit('setting emails and sockets', {'sendersEmail': mycookie}, function(data){
           console.log(data);
 	  });
      //console.log(data.hello);
 })
 
 var returnedData = 'Resending arrived on the client machine!';

 /*socket.emit("my other event", "this one is from the client side");
 socket.emit('am online now!', {'personalEmail': mycookie}, function(data){
 	console.log(data);
 	console.log('callback function ran for "am online now!"');
 });*/
 socket.on('disconnect', function(){
 	 console.log('SomeOne Disconnect: From Client Side');
 });

 function ringingTone() {
	   var ringTone = document.getElementById('ringingTone');
	   ringTone.play();
	   setTimeout(function(){
           ringTone.pause();
	   }, 90000);
 }



/* function honourRequest(){
	 $('.reciever').hide();
	 $('.incommingCall').hide();
	 socket.emit('requestHonoured', incommingCallInformation, function(data){
             console.log(data);
	 });
 }*/

 function confirmIncommingCall() {
	 console.log('incomming call was confirmed')
	 $('.reciever').hide();
	 $('.incommingCall').hide();
	 socket.emit('requestHonoured', incommingCallInformation, function (data) {
		 console.log(data);
	 });
 }

 function rejectedRequest(){
	        socket.on('requestRejected', function(data){
                 $('.showOfficialChat').show();
	        });
 }

socket.on('wentOffline', function(data){
	 $('.wentOffline').show();
	 setTimeout(() => {
		 $('.wentOffline').hide();
	 }, 5000);
});

socket.on('stillOnline', function(data){
	$('.modal2public').show();
})

 socket.on("incomingRequest", function(data){
	  //$('.showOfficialChat').show();
	 $('.reciever').show();
	 $('.incommingCall').show();
	 incommingCallInformation = data;
	  console.log("incommingRequest was triggered");
	  console.log(data);
 });


 $('#textChatting').keydown( function( event ) {
 	   var dataToSend = $('#textChatting').val();
       socket.emit('sendingChatOfficial', dataToSend, function(data){
           console.log(data);
       });
 });

         function dropTheCall(){
              $('.dialer').css('display', 'none');
              $('.dropCall').css('display', 'none');
              $('.declineSuccessfull').css('display', 'block');
          	  setTimeout(function(){
                   $('.declineSuccessfull').css('display', 'none');
          	  }, 3000);
          }

	      function callingSomeOne(identity){
			  identityStoreForCalling['passedIdentity'] = identity[0].id;
			  console.log(identity[0].id);
			  console.log('this is identity.id');
              $('.confirming').css('display', 'block');
	      }

          function rejectIncommingCall(requestersEmail){
          	  $('.reciever').css('display', 'none');
          	  $('#reciever').css('display', 'none');
          	  $('.incommingCall').css('display', 'none');
          	  $('.declineSuccessfull').css('display', 'block');
          	  setTimeout(function(){
                   $('.declineSuccessfull').css('display', 'none');
          	  }, 3000);
          	  socket.Emit('requestRejected', data, /*data sent should
          	  	be Requesters Email!*/function(data){
                   console.log(data);
          	  });
              //console.log('recjection function was called');
          }

          function checkTimeLine(){
			 var scheduleForm = document.getElementsByClassName('checkingTimeLine')[0];
			 document.getElementById('checkTimeInput').value = identityStoreForCalling['passedIdentity'];
             $('.checkingTimeLine').submit();
          }

          function dontCheckTimeLine(){
          	 $('.notAvailable').css('display', 'none');
          }

          function dontCall(){
              $('.confirming').css('display', "none");
          }

          function continueCall(){
          	  requestToStartChatting();
          	  $('.confirming').css('display', "none");
          }
function requestToStartChatting(){
	        var dataToEmit = {"recipientIdentity": identityStoreForCalling['passedIdentity']}
	        $('.confirming').css('display', 'none');
	        $('.dialer').css('display', 'block');
            $('.dropCall').css('display', 'block');
	        ringingTone();  // this will ring for 90 seconds!
			console.log(identityStoreForCalling['passedIdentity']);
	        console.log('seing if it will work checkingOnlineStatus');
         $.ajax({
		        url: "http://127.0.0.1:9000/checkingOnlineStatus",
		        type: 'POST',
		        data: JSON.stringify({ "recipientIdentity": identityStoreForCalling['passedIdentity'] }),
                crossDomain: true,
		        async: true,
		        cache: false,
		        dataType: "json",
		        contentType: "application/json; charset=utf-8",
		        processData: false,
		        success: function (data) {
						console.log(data);
						if (data.message == "online") {
							// person is online
							$('.dropCall').show();
							$('.dialer').show();
							
							var dataToEmit = {
								"callerEmail": mycookie,
								"recipientEmail": data.email,
								'recipientIdentity': identityStoreForCalling['passedIdentity']
							}

							if (mycookie == data.email /* you cant call yourself! */) {
								$('.dialer').css('display', 'none');
								$('.dropCall').css('display', 'none');
								$('.stopCall').show();
								setTimeout(() => {
									$('.stopCall').hide();
								}, 4000);
								return;
							}

							console.log(dataToEmit);
							console.log('outputted dataToEmit');
							socket.emit("requestToConnect", dataToEmit, function (data) {
								console.log(data);
							});
                            console.log('requestToConnect Was Sent')
						}else{
							// meaning the person is offline
							$('.notAvailable').show();
							$('.dialer').css('display', 'none');
							$('.dropCall').css('display', 'none');
						}
		        },
		        error: function(data){
                    alert("Something is not wright!!!");
		        }
			  });
			  
}


 $('#TextInput2public').keydown( function( event ) {
	     if ( event.keyCode === 13 ) {
	        var chatInputValue = document.getElementById('textInput2public').value;
	         document.getElementById('textInput2public').value = "";

	         var dataToSend = {'personalEmail': mycookie, 'FriendEmail': FriendEmailToSocket, 'chatMessage': chatInputValue};

            socket.emit('sending from chat', dataToSend, function(data){
            	     console.log(data);
            	     console.log('that is data above!!');
                     var generatedHTML = '<li style="clear: both; display: block;margin-top: 7px; border-radius: 10px; padding: 10px; max-width: 80%; background-color: #f1f1f1; float: right;">' + data.chatMessage + '</li><br>';
                           
                     $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);
                       var theHeight = document.getElementsByClassName('chatUL' + chatCounter2)[0].lastChild.scrollHeight;
                           console.log(theHeight + 'the height');
                       var finalheight = theHeight + chatULHeight;
                       document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollTop = finalheight;
                     $('#chatLogHidden1public').hide();

            });
            event.preventDefault();
	        return false;
	     }
});  

socket.on('FriendsChat', function(data, callback){
	  callback(data);
	  console.log(data.FriendEmail);
	  console.log(FriendEmailToSocket);
	  console.log('friends chat ran through!!');
	  if(data.FriendEmail != FriendEmailToSocket){
	  	        console.log('if block was executed');
            var generatedHTML = '<li style="clear: both; display: block;margin-top: 7px; border-radius: 10px; color: white; padding: 10px; max-width: 80%; background-color: #110033; float: left;">' + data.chatMessage + '</li><br>';

            $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);
            document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollTop = chatULHeight;
	  }
});

$('document').ready(function(event){
              $.ajax({
				        url: "http://127.0.0.1:8000/friendslist",
				        type: 'POST',
				        data: JSON.stringify({ personalEmail: mycookie}),
                        crossDomain: true,
				        async: true,
				        cache: false,
				        // dataType: "image/jpg",
				        //contentType: false,
				        processData: false, 
				        contentType: "application/json; charset=utf-8",
				       // processData: false,
				        success: function (data) {
                                  console.log(data);
				                 // console.log(data.message);
				                  //console.log(data.arrayOfFriends);
				                  var  injectedHtml, injectedHtml1, color;
                                
                                  if(data.message == 'You Currently have No friends!!!'){
                                           injectedHtml = '<li>Seems You have No Friends</li>';
                                           $(injectedHtml).insertBefore('#hiddenLipublic');
                                           $(injectedHtml).insertBefore('#forVideoChat');
                                  }else{
                              	           for(i=0; i < data.arrayOfFriends.length; i++){
						              	   if((data.arrayOfFriends[i].split(' ')[3] = 'online')){
	                                            color = 'green';
						              	   }else{
						              	   	    color = 'grey';
						              	   }

		                                   injectedHtml = '<li id="' + data.arrayOfFriends[i].split(' ')[2] + '" onclick="displayChatTemplate(this)">' + data.arrayOfFriends[i].split(' ')[0] + " " + data.arrayOfFriends[i].split(' ')[1] + '<span style="font-weight: bold; color:' + color + ';">.</span>' + '</li>';
                                           
                                           injectedHtml1 = '<li id="' + data.arrayOfFriends[i].split(' ')[2] + '" onclick="showFriendNameOnVideoTemplate(this)">' + data.arrayOfFriends[i].split(' ')[0] + " " + data.arrayOfFriends[i].split(' ')[1] + '<span style="font-weight: bold; color:' + color + ';">.</span>' + '</li>';

                                           $(injectedHtml).insertBefore('#hiddenLipublic');
		                                   //$(injectedHtml1).insertBefore('#forVideoChat');
			                 
							             }
                                  }
				        },
				        error: function(data){
                            alert("Something is not right!!");
				        }
				       
				  });
});


var chatCounter = 0; // Do not delete please!! bcause it used in redering chat
var chatCounter2 = 0;
var FriendEmailToSocket;  // Do not delete for any reason please!
var chatULHeight;

// this will be be called anytime a user is clicked! meaning a friend is clicked!
function displayChatTemplate(value){
   	     // display something first!
   	     console.log(value.id);
   	     console.log('this code was triggered!');
   	     $('#loaderInterfaceRequestChat').show();
   	     var value = value;
   	     var FriendEmail = value.id;
   	         FriendEmailToSocket = FriendEmail;
   	     document.getElementsByClassName('chatLogHidden1public').innerHTML = '';
                  $.ajax({
				        url: "http://127.0.0.1:8000/gettingFormerChat",
				        type: 'POST',
				        data: JSON.stringify({ personalEmail: mycookie, FriendEmail: FriendEmail}),
                        crossDomain: true,
				        async: true,
				        cache: false,
				        //dataType: "json",
				        contentType: "application/json; charset=utf-8",
				        processData: false,
				        success: function (data) {
				                  //alert(data);
				               console.log(data);
				               var generatedHTML, float, color;

				               if(data.message == 'No Chat Available!!!'){

				               	    if(chatCounter2 > 1){
                                        document.getElementsByClassName('mainChatSection' + chatCounter2)[1].style.display = 'none';
				               	    }

                                    generatedHTML = '<p id="noChatAvailableWithDisPerson" style="background-color: #110033; width: 100%; color: white; text-align: center; padding-top: 100px; padding-bottom: 100px; border: 0.2px solid white; border-radius: 15px; margin-top: 30px;">...start chatting now... <br><br>No Chat Available with this person...</p>';
                                        
                                        document.getElementById('chatLogHidden1public').innerHTML = generatedHTML;
                                        
                                        $('.chatLog1public').show();
                                        $('.chatLogHidden1public').show();
                                        $('#loaderInterfaceRequestChat').hide();
				               }   
                               

				               if(data.message != 'No Chat Available!!!'){
				               	    chatCounter2++;
				               	    chatCounter++;
				               	   var someHTML = '<div class="mainChatSection' + chatCounter2 +'" style="position: fixed; max-width: 60%; height: 530px;"><ul style="margin: 0px; padding: 0px; max-width: 100%; padding-right: 3px;" class="chatContainer"><p id="mainChatLiHidden"></p></ul></div>';

				               	    $(someHTML).insertBefore('#chatLogHiddenpublic');

				               	    

                                    if(chatCounter == 1){
                                    	var validationData = 'someEmptyString';
                                    	callingFunctionToShowDChat(validationData, /*floatValue*/);
                                    }

				               	    if(chatCounter > 1){
				               	    	var diff;
				               	    	console.log('its greater than 1');
                                        //document.querySelectorAll('.mainChatSection').style.display = 'none';
                                        var countDifference = chatCounter2 - 1;
                                        for(var u=1; u < chatCounter2; u++){
                                            document.getElementsByClassName('mainChatSection' + u)[0].style.display = 'none';
                                            document.getElementsByClassName('mainChatSection' + u)[1].style.display = 'none';
                                           diff = chatCounter2 - 1;
                                           if(u == countDifference){
                                           	   console.log('condition is true...........');
                                           	   validationData = 'notAnEmptyString';
                                           	  // floatValue = 'right';
                                           	   callingFunctionToShowDChat(validationData);
                                           	   break;
                                           }
                                        }
				               	    }
                                    
                                    function callingFunctionToShowDChat(validationData){
                                    	  var counter = 0;

                                    	  if(validationData != 'someEmptyString'){
                                               document.getElementsByClassName('mainChatSection1')[0].style.display = 'none';
                                               document.getElementsByClassName('mainChatSection1')[1].style.display = 'none';
                                    	  }
                                    	   
				               	    var secondGeneratedHTML = '<div class="mainChatSection' + chatCounter2 +'" style="position: fixed; width: 47%; height: 530px;"><ul class="chatUL' + chatCounter2 + '" style="margin: 0px; padding: 0px; max-width: 100%; padding-right: 3px;" id="chatContainer"><p id="mainChatLiHidden' + chatCounter2 + '"></p></ul></div>';

									   $(secondGeneratedHTML).insertBefore('#chatLogHiddenpublic');

				               	     function checkingWhoSentChat(){
				               	     	function chatSentByOneUserOnly(floatValue){
                                          var valueOfSender;
			                                for(var i=0; i < data.message.length; i++){
			                                	counter++;
			                                	valueOfSender = data.message[i].split('|')[1];

			                                	if(valueOfSender.trim() == mycookie){
			                                         generatedHTML = '<li class="theChats" style="clear: both; color: white; display: block;margin-top: 7px; border-radius: 10px; padding: 10px; max-width: 80%; background-color: #f1f1f1; color: black; float:' + floatValue + '">' + data.message[i].split('|')[0] + '</li><br>';
			                                         document.getElementById('chatLogHidden1public').innerHTML = '';
			                                         $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);   
			                                    }
			                                    
			                                    if(valueOfSender.trim() != mycookie){
			                                         
			                                         generatedHTML = '<li style="clear: both; display: block; margin-top: 7px; border-radius: 10px; padding: 10px; max-width: 80%; color: white; background-color: #110033; float: left;">' + data.message[i].split('|')[0] + '</li><br>';
			                                         document.getElementById('chatLogHidden1public').innerHTML = '';
			                                         $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);
			                                        
			                                    }
			                                  
			                                    if(counter == data.message.length){
			                                    	chatULHeight = document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollHeight;
			                                    	document.getElementsByClassName('mainChatSection' + chatCounter2)[1].style.overflow = 'auto';
			                                    	console.log(chatULHeight + 'this is offSetHeight');
						               	            document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollTop = chatULHeight;
			                                        $('#loaderInterfaceRequestChat').hide();
			                                    }
			                                }    
				               	     	}
                                        
                                        function chatWasSentByBothUsers(){
                                             var valueOfSender;
			                                    for(var i=0; i < data.message.length; i++){
			                                    	counter++;
			                                    	valueOfSender = data.message[i].split('|')[1];

			                                    	if(valueOfSender.trim() == mycookie){
			                                             generatedHTML = '<li class="theChats" style="clear: both; color: black; display: block;margin-top: 7px; border-radius: 10px; padding: 10px; max-width: 80%; background-color: #f1f1f1; float: right;">' + data.message[i].split('|')[0] + '</li><br>';
			                                             document.getElementById('chatLogHidden1public').innerHTML = '';
			                                             $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);   
			                                        }
			                                        
			                                        if(valueOfSender.trim() != mycookie){
			                                             
			                                             generatedHTML = '<li style="clear: both; display: block; margin-top: 7px; border-radius: 10px; padding: 10px; max-width: 80%; background-color: #110033; color: white; float: left;">' + data.message[i].split('|')[0] + '</li><br>';
			                                             document.getElementById('chatLogHidden1public').innerHTML = '';
			                                             $(generatedHTML).insertBefore('#mainChatLiHidden' + chatCounter2);
			                                            
			                                        }
			                                      
			                                        if(counter == data.message.length){
			                                        	chatULHeight = document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollHeight;
			                                        	document.getElementsByClassName('mainChatSection' + chatCounter2)[1].style.overflow = 'auto';
			                                        	console.log(chatULHeight + 'this is offSetHeight');
							               	            document.getElementsByClassName('mainChatSection' + chatCounter2)[1].scrollTop = chatULHeight;
			                                            $('#loaderInterfaceRequestChat').hide();
			                                        }
			                                    }    
                                        }
                                        
                                        var countingX = 0;
                                        var countingPersonal = 0;
                                        var countingUserAndSender = 0;
                                        var countingAgain = 0;
                                        var floatValue;

                                        function callFunctionToTrySecondCondition(){
                                        	  for(var i=0; i < data.message.length; i++){
                                                     if(data.message[i].split('|')[1].trim() != mycookie){
                                                     	   countingAgain++;
                                                     	   if(countingAgain == 1){
                                                              chatWasSentByBothUsers();
                                                              break;
                                                     	   }
                                                     }
                                              }
                                        }

				               	     	for(var i=0; i < data.message.length; i++){
                                              if(data.message[i].split('|')[1].trim() == mycookie){
                                              	   countingUserAndSender++
                                              	   if(countingUserAndSender == 1){
                                                       callFunctionToTrySecondCondition();
                                              	   }
                                              }
                                              
                                              if(data.message[i].split('|')[1].trim() != mycookie){
                                                   countingX++;
                                              }

                                              if(countingX == data.message.length){
                                                  // this means only one user sent a message across so far!
                                                  // also the client was not the owner of the current page!
                                                  floatValue = 'left';
                                                  chatSentByOneUserOnly(floatValue);
                                              }


                                              if(data.message[i].split('|')[1].trim() == mycookie){
                                                   countingPersonal++;
                                              }

                                              if(countingPersonal == data.message.length){
                                                  // this means only one user sent a message across so far!
                                                  // the Owner of the current page was the one that sent it!
                                                  floatValue = 'right';
                                                  chatSentByOneUserOnly(floatValue);
                                              }

				               	     	}
				               	     }
                                     
                                     checkingWhoSentChat();
                                    
                                    }
                                    
				              }
				        },
				        error: function(data){
                            alert("Something is not right!!");
				        }
				       
				  });
   }
