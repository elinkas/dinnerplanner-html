/** SearchView Object constructor
 * 
 * This object represents the code for SidebarView. 
 * 
 * It is responsible for:
 * - The search function in the Dinner planner 
 * - Searching for specific dishes
 * - Searching for dishes in diffrent categories
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var SearchView = function (container, model) {

	this.update = function(filter){
		model.getAllDishes(model.getType(),model.getFilter());
		console.log(model.getAllDishes(model.getType(),model.getFilter()));
		//console.log(model.getType() + model.getFilter());
	}

	this.update();
	model.addObserver(this);
	
	var searchKeyWord = function (input){
		var type = document.getElementById("selectDish").submit();
		console.log(type);
	}

	this.searchButton = container.find("#searchButton");

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function(){
		var a = document.getElementById("selectDish");
		a.style.display = "none";
	}

	this.show = function(){
		var a = document.getElementById("selectDish");
		a.style.display = "block";	
	}
}
 
