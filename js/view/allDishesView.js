/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var AllDishesView = function (container, model) {
	

	var allDishes = model.getAllDishes('dessert');

	for(dish in allDishes){
		var img = allDishes[dish].image;

		//var a = document.createElement("img");
		//a.src = "images/" + img + "";

		//var div = "<div></div>";
		//var img = document.createElement("<img src="images/" + img + "height="100" width="100">"");
		//div.appendChild(img);


		document.getElementById("startPage").innerHTML+= ('<img src="images/' + img + '">');
	}


	this.hide = function() {
		container.hide()
		// var a = document.getElementById("AllDishesView");
		// a.style.display = "none";
	}
	// loopa igenom alla maträtter, appenda html-element till den??? bootstrap-columner osv


	
}
 
