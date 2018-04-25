
//javaScript code logic for profileSetUp.js
//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////

document.onreadystatechange = function()
{
	console.log(document.readyState);
	if(document.readyState === "complete")
	{

          console.log("I am ready!!!!!!!!!!!! Number 4");

           document.getElementById("toggleDaises").addEventListener("mouseenter", showMeNav);
           document.getElementById("toggleDaises").addEventListener("click", hideByClick);
           document.getElementById("daiseOutterDiv").addEventListener("mouseleave", hideMeNav);

            function showMeNav (){
                document.getElementById("daiseOutterDiv").style.display = "block";
            }
            function hideByClick(){
            	 var jinta = document.getElementById("daiseOutterDiv").style.display;
            	 if(jinta == "block"){
            	 document.getElementById("daiseOutterDiv").style.display = "none";
            	 }
            	 else{
            	 	document.getElementById("daiseOutterDiv").style.display = "block";
            	 }
            }
            function hideMeNav (){
                document.getElementById("daiseOutterDiv").style.display = "none";
            }
             document.getElementById('loadingDiv').style.display = "none";
            document.getElementById('mode').style.display = 'none';
            document.getElementById('mode1').style.display = 'none';

            var model = document.getElementById('reachOut');
            model.addEventListener('click',showReachOut);
            function showReachOut(){
                document.getElementById('mode').style.display = "block";
            }

            /*var model1 = document.getElementById('chat');
            model1.addEventListener('click',showReachOutChat);
            function showReachOutChat(){
                document.getElementById('mode1').style.display = "block";
            }
            var closingModal = document.getElementById('click2');
            /*closingModal.addEventListener('click', close2);
            function close2(){
                 document.getElementById('mode1').style.display = "none";
            }*/
	}
}
