var ChosenView = function (container, model) {


	var wrapper= document.getElementById("chosen");
	var chosenDishes = [];

	this.update = function(dishes){
		// we want to get type and filter here
 		//dishes 
		wrapper.innerHTML ="";
		var i=0;
 		for(dish in dishes){
	 		
	 		wrapper.innerHTML += '<div id="img' + i + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>';
	 		i++;
	 	}
	}

	this.update();
	//loopa över alla recept & visa dem. appenda html-element
	//eller ska det ske i controllern??
	//this.image = container.find("#img" + i + "");

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function() {
		var a = document.getElementById("chosen");
		a.style.display = "none";
	}

	this.show = function(){
		var a = document.getElementById("chosen");
		a.style.display = "block";	
	}


}
