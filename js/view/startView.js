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
var StartView = function (container, model) {
	
	this.startButton = container.find("#startButton");


	// document.getElementById("startButton").addEventListener('click', function(){
	// console.log("Hi")		
	// 	var a = document.getElementById("startPage");
	// 	a.style.display = 'none'; viewIt("sideBar");}, false);

	// redirecta till allDishesView
	 for (key in model.dishes){
	 	console.log(123);
	 }

	 this.hide = function() {
		var a = document.getElementById("startPage");
		a.style.display = "none";
	}
	 console.log(456);

	
}
 
