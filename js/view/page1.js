//var numGuests = 0;

//function from Filip's lecture 
var toggleVisibility = function(id){
	var a = document.getElementById(id);
	if(a.style.display == 'block' || a.style.display == ""){
		a.style.display = 'none';
	}else{
		a.style.display = 'block';
	}
}

var hideIt = function(id){
	var a = document.getElementById(id);
	if(a.style.display == 'block' || a.style.display == ""){
		a.style.display = 'none';
	}
}

var viewIt = function(id){
	var a = document.getElementById(id);
	if(a.style.display == 'none' || a.style.display == ""){
		a.style.display = 'block';
	}
}


var Page1 = function(id){
	toggleVisibility(id);

	//var hide = function(){
	//	document.getElementById("StartPage").style.display = "none";
	//	document.getElementById("exampleView").style.display = "block";
	//}
	//hide();
}

var decreaseG = function(){
	if(numGuests>0){
		numGuests --;
		console.log(numGuests);
	}
}

var increaseG = function(){
	numGuests++;
	console.log(numGuests);
	numberOfGuests();
}

//var numberOfG = function(){
//	document.getElementById("guests").innerHTML = "Number of Guests: " + numGuests;
//}