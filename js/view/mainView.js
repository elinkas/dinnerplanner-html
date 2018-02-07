var MainView = function (container, model) {
	
	
	this.hide = function() {
		var a = document.getElementById("main");
		a.style.display = "none";
	}

	this.show = function(){
		var a = document.getElementById("main");
		a.style.display = "block";	
	}
}
 
