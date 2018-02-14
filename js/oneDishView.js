var OneDishView = function (container, model, id) {


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