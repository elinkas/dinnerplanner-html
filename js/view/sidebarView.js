
/** SidebarView Object constructor
 * 
 * This object represents the code for SidebarView. 
 * 
 * It is responsible for:
 * - The sidebar in the Dinner planner
 * - Choosing number of guests
 * - Showing total price of chosen menu
 * - Confirming dinner
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model 
 */ 
var SidebarView = function (container, model) {
	
	var numberOfGuests = container.find("#numberOfGuests");
	var dishListDiv;

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests());
		dishListDiv = container.find("#menuDetails");
		dishListDiv.html("");
		//dishListDiv.html("");
		var menu = model.getFullMenu();
		//console.log(model.getFullMenu());
		for(key in menu){
			//var trunc = "abcdef".substr(0, 3) + "\u2026";
			//menu[key].price.toFixed(2);
			dishListDiv.append(menu[key].title + '&emsp;' + (menu[key].price * model.getNumberOfGuests()).toFixed(2) + '<br>')
		}
	}
	this.update();

	model.addObserver(this);

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.confirmDinnerButton = container.find("#confirmDinnerButton");

	this.hide = function() {
		var a = container.find("#sideBar2");
		a.hide();
	}

	this.show = function(){
		var a = container.find("#sideBar2");
		a.show();	
	}
}