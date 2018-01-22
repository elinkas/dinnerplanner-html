var numGuests = 0;


var Page1 = function(){

	console.log("h");

	var hide = function(){
		document.getElementById("StartPage").style.display = "none";
		document.getElementById("exampleView").style.display = "block";
	}
	hide();
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
}

var numberOfG = function(){
	document.getElementById("guests").innerHTML = "Number of Guests: " + numGuests;
}