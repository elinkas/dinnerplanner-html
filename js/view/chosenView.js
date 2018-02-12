var ChosenView = function (container, model) {


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
