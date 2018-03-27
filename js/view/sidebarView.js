var menuDishTitle = [];
var menuDishPrice = [];
var menuDishImages = [];
var menuDishPrep = [];
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

	var oldMenu = [];
	var newMenu = [];

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests());
		dishListDiv = container.find("#menuDetails");
		//dishListDiv.html("");
		menu = model.getFullMenu();
		
/*		var menu = [];
		$.each(oldMenu, function(i, el){
		    if($.inArray(el, menu) === -1) menu.push(el);
		});
		console.log(menu)*/

		if(menu.length > 0){
			dishListDiv.html("");
			menuDishTitle.push(menu[0].title);
			menuDishPrice.push(menu[0].pricePerServing);
			menuDishImages.push(menu[0].image)
			menuDishPrep.push(menu[0].instructions)

			oldMenu.push(menu[0].title + '&emsp;' + menu[0].pricePerServing * model.getNumberOfGuests() + '<br>')

			uniqueArray = oldMenu.filter(function(item, pos) {
			    return oldMenu.indexOf(item) == pos;
			})
			for(key in uniqueArray){
				dishListDiv.append(uniqueArray[key]);
			}
			
		}
		/*console.log("leng " + menuDishTitle.length)
		for (key in menuDishTitle){
			console.log(menuDishTitle[key])
			//dishListDiv.append("hej");
			dishListDiv.append(menuDishTitle[key] + '&emsp;' + menuDishPrice * model.getNumberOfGuests() );
		}*/
		var price = 0;

		//for(key in menu){
			//dish = model.getDish(menu[key]);
			//console.log("menu:");
			//console.log(menu);
			/*var pricelist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				pricelist = dish.ingredients[i]
				var num = model.getNumberOfGuests();
				price += pricelist.price;
			}
			//dishListDiv.append(dish.name + '&emsp;' + price * model.getNumberOfGuests() + '<br>');
			dishList.push(dish.name + '&emsp;' + price * model.getNumberOfGuests() + '<br>');

			price = 0;*/
		//}
		//var unique = dishList.filter((v, i, a) => a.indexOf(v) === i);
		/*for(key in dishList){
			dishListDiv.append(unique[key]);
		}
		dishList = [];*/	
	}

	model.addObserver(this);

	//this.update();

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