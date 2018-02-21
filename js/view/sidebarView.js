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
	
	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	var numberOfGuests = container.find("#numberOfGuests");
	

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
	}

	this.update();
	model.addObserver(this);

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.append1 = function(){
		var dishListDiv = container.find("#menuDetails");
		dishListDiv.html("");
		dishListDiv.append(model.getName() + ' ' + model.getPrice());
		//console.log(model.getName());
	}

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function() {
		var a = container.find("#sideBar2");
		a.hide();
	}

	this.show = function(id){
		var a = container.find("#sideBar2");
		a.show();	
	}
}