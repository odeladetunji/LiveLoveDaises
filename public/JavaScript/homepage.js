$( document ).ready(function() {
	function displayLogOutModal(){
		document.getElementsByClassName('logoutModal')[0].style.display = "block";
	}
	 document.getElementById('loadingDiv').style.display = 'none';
	function exitLogOutModal(){
		document.getElementsByClassName('logoutModal')[0].style.display = "none";
	}
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

document.getElementById('mode').style.display = "none";
var getReachoutpage = document.getElementById('reachingOut');
getReachoutpage.addEventListener('click', reachOutDisplay);

function reachOutDisplay (){
	 document.getElementById('mode').style.display = "block";
}

document.getElementById('close1').addEventListener('click', close);
function close(){
document.getElementById('mode').style.display = "none";
}

// toggling out the other one
document.getElementById('mode1').style.display = "none";
var chatting = document.getElementById('chatting');
chatting.addEventListener('click', reachOutDisplay2);

function reachOutDisplay2 (){
	 document.getElementById('mode1').style.display = "block";
}

document.getElementById('close2').addEventListener('click', close2);
function close2(){
document.getElementById('mode1').style.display = "none";
}

// rating reviews/////////////
document.getElementById('ratingModalForm').style.display = "none";
var circleTipris1 = document.getElementById('circleTipris1');
circleTipris1.addEventListener('click', showRating);

function showRating (){
	 document.getElementById('ratingModalForm').style.display = "block";
}

document.getElementById('close4').addEventListener('click', closeRating);
function closeRating(){
document.getElementById('ratingModalForm').style.display = "none";
}

var circleTipris = document.getElementById('circleTipris');
circleTipris.addEventListener('click', showRating);

var reviews = document.getElementById('reviews');
reviews.addEventListener('click', showRating);

// coding for the second rating form in homepage.ejs
document.getElementById('ratingModalForm1').style.display = "none";
var ratingModalForm1 = document.getElementById('reviews');
ratingModalForm1.addEventListener('click', showRatingModalForm);
function showRatingModalForm(){
		 document.getElementById('ratingModalForm1').style.display = "block";
}
document.getElementById('close5').addEventListener('click', closeReviews);
function closeReviews(){
		 document.getElementById('ratingModalForm1').style.display = "none";
}

// coding for the post discription modal page rating
var modalRate = document.getElementById('modalRate');
modalRate.addEventListener("click", showRatingModalForm1);

var modalRate1 = document.getElementById('modalRate1');
modalRate1.addEventListener("click", showRatingModalForm1);

function showRatingModalForm1(){
		 document.getElementById('ratingModalForm').style.display = "block";
		 document.getElementById('modal5').style.display = "none";
}



/// coding for discription of
document.getElementById('modal5').style.display = "none";
var discoarse = document.getElementById('discoarse');
discoarse.addEventListener('click', showDiscoarse);
function showDiscoarse(){
		 document.getElementById('modal5').style.display = "block";
}
document.getElementById('close6').addEventListener('click', closeDiscoarse);

function closeDiscoarse(){
		 document.getElementById('modal5').style.display = "none";
}

//coding for clicking on picture on any position
document.getElementById('modal7').style.display = "none";
var AjaxImage = document.getElementById('AjaxImage');
AjaxImage.addEventListener('click', showPicture1);
function showPicture1(){
			console.log("picture not showing")
			document.getElementById('modal7').style.display = "block";
}
document.getElementById('close7').addEventListener('click', closePicture);

function closePicture(){
		 document.getElementById('modal7').style.display = "none";
}
//document.getElementById('loadingDiv').style.display = 'none';
//document.getElementsByClassName('logoutModal')[0].style.display = 'none';

});
