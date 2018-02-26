/** StartView Object constructor 
 * 
 * It is responsible for:
 * - Redirecting to Dinner Planner when clicking "Create new dinner"
 *
 */ 
var StartView = function (container, model) {
	
	this.startButton = container.find("#startButton");

	this.hide = function() {
		var a = document.getElementById("startPage");
		a.style.display = "none";
	}
}