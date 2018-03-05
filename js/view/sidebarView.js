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
	var menu = [];
	var dishListDiv;
	var dishList = [];

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests());
		dishListDiv = container.find("#menuDetails");

		menu = model.getFullMenu();
		dishListDiv.html("");
		dishListDiv.html("");
		dishListDiv.html("");
		dishListDiv.html("");

		var price = 0;
		for(key in menu){
			dish = model.getDish(menu[key]);
			var pricelist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				pricelist = dish.ingredients[i]
				var num = model.getNumberOfGuests();
				price += pricelist.price;
			}
			//dishListDiv.append(dish.name + '&emsp;' + price * model.getNumberOfGuests() + '<br>');
			dishList.push(dish.name + '&emsp;' + price * model.getNumberOfGuests() + '<br>');

			price = 0;
		}
		var unique = dishList.filter((v, i, a) => a.indexOf(v) === i);
		for(key in dishList){
			dishListDiv.append(unique[key]);
		}
		dishList = [];
	}

		
/**
		var id = model.getAddedDish(); 
		if(id>0){
			dishListDiv = container.find("#menuDetails");
			dishListDiv.html("");
			if(model.getClickedDish() == model.getAddedDish()){
				dishListDiv.html("");
			}
			dish = model.getDish(id);

			dishList.push(dish.name + '&emsp;' + model.getPrice() * model.getNumberOfGuests() + '<br>');
			var unique = dishList.filter((v, i, a) => a.indexOf(v) === i);
			for(key in dishList){
				dishListDiv.append(unique[key]);
			}
			
			//dishListDiv.append(dish.name + '&emsp;' + model.getPrice() * model.getNumberOfGuests() + '<br>');
		}
		var unique = dishList.filter((v, i, a) => a.indexOf(v) === i); 
	}*/

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