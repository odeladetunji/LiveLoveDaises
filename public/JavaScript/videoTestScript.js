
function showFriendNameOnVideoTemplate(value) {
    var identity = value.innerHTML;
    //document.getElementById('showingFriend').
    var showingFriend = document.getElementById('showingFriend');
    showingFriend.setAttribute("data-videoFriend", value.id);
    document.getElementById('showingFriend').innerHTML = identity;
    document.getElementById('videoMessage').style.display = 'block';
    $('#videoConnectingButton1').show();
    $('#videoConnectingButton2').show();
    console.log('showFriendNameOnVideoTemplate was called');
}

/*
socket.on('notBusy!', function(){
    webRTCconnection();
})

socket.on('busy!', function(){
    showBusyMessage();
});

socket.on('user not online', function(){
    showNotAvailableMessage();
})
var friendIdentity = {}
function setFriendIdentity(HtmlObject) {
    friendIdentity.identity = HtmlObject.getAttribute('id'); // this is an email
}

var callingSomeOne = {
    'callStatus': 'notCalling'
}

//creating webrtc object!
var myConnection;
var webRTCconfig;

// socket listening for an incoming iceCandidate;
socket.on('incoming candidate', function(data){
        myConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
});

socket.on('inComingOffer', function (data, callback) {
    callback('offer sent successfully!');
    document.getElementById('callerFullName').innerHTML = data.fullName;
    myConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
    // creating answer
    myConnection.createAnswer()  // returns a promise
    .then(function(answer){
            myConnection.setLocalDescription(answer);
            //emitting answer!
            socket.emit('answer', {
                                    'answer': answer,
                                    'friendEmail': data.friendIdentity,
                                    'ownerEmail': mycookie
                                    }, function (data) {
                                        console.log(data);
                                    });
    })
    .catch(function(error){
        throw error;
    });
});

socket.on('onAnswer', function (data) {
    console.log('Answer arrived from Recipient!');
    // setting remote discription!
    myConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
});

function webRTCconnection(){
        myConnection = {}

        webRTCconfig = {
            "iceServers": [{ "url": "stun:stun.1.google.com:19302" }]
        };

        myConnection = new RTCPeerConnection(webRTCconfig, {
            optional: [{ RtpDataChannels: true }]
        });

        console.log("RTCPeerConnection object was created");
        console.log(myConnection);

        // listening for oniceCandidate event! 
        // note that myConnection is GLOBAL!
    
        myConnection.onicecandidate = function (event) {
            if (callingSomeOne.callStatus == 'calling') {
                if (event.candidate) {
                    socket.emit('candidate', {
                        'candidate': event.candidate,
                        'friendIdentity': friendIdentity.identity, //note that is is an email
                        'ownerEmail': mycookie
                    });
                }else{
                    myConnection.removeEventListener('onicecandidate', function(){
                        console.log('event listener removed successfully!');
                    });

                    myConnection.createOffer()
                    .then(function(offer){
                        socket.emit('offer', {
                                                'friendIdentity': friendIdentity.identity, // an email
                                                'offer': offer,
                                                'ownerEmail': mycookie
                                                }, function (data) {
                                                console.log(data);
                        });

                        myConnection.setLocalDescription(offer); 
                    })
                    .catch(function(error){
                        throw error;
                    })
                }
            }
        };

        myConnection.onaddstream = function (event) {
            var remoteView = document.getElementById('remoteVideo');
            remoteView.srcObject = event.stream;
        }
}

function LocalStreaming(){
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
            navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia;

        var constraints = {
            audio: true,
            video: { facingMode: "user" }
        }  

        if (navigator.getUserMedia && navigator.mediaDevices.getUserMedia) {
            console.log('media device supported');
            navigator.mediaDevices.getUserMedia(constraints)
                .then(function (stream) {
                    var video = document.getElementById('localVideo');
                    //var video = document.querySelector('video');
                    window.stream = stream; // stream available to console
                    if (window.URL) {
                        video.src = window.URL.createObjectURL(stream);
                    } else {
                        video.src = stream;
                    }

                        // return;  // for testing purpose
                    myConnection.addStream(stream);
                })
                .then(function (err) {
                    console.log('it errored!');
                })
        }
} 
*/