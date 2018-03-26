//DinnerModel Object constructor
var menu = []; // i menu lägger vi till objeketen när vi har klickat på "add to menu"
var menuNames = [];
var allClickedDishes = []; // i allClieckDishes lägger vi till objekten när vi har klickat på en specifik maträtt

allNames = [];
allPrices = [];

var ingred = [];
var menuID = []; 
var priceList = [];
var clickedDish;
var addedDish;
var totPrice;


 
var confDinner = function(){
	console.log("dinner is confirmed");
}

var DinnerModel = function() { 
	var observers = [];
	var filter = "";
	var type = '';

	this.getAllNames = function(){
		return allNames;
	}

	this.getAllPrices = function(){
		return allPrices;
	}


	this.getName = function(){
		return name;
	}

	this.setName = function(n){
		name = n;
		notifyObservers();
		return name;
	}

	this.setPrice = function(p){
		totPrice = p;
		notifyObservers();
		return totPrice;
	}

	this.getPrice = function(){
		return totPrice;
	}
 
	this.setFilter = function(f){
		filter = f;
		notifyObservers();
		return filter;
	}

	this.getFilter = function(){
		return filter;
	}
	this.setType = function(t){
		type = t;
		notifyObservers();
		return type;
	}

	this.getType = function(){
		return type;
	}

	//den vi klickar på
	this.getClickedDish = function(){
		return clickedDish;
	}

	this.setClickedDish = function(id){
		clickedDish = id;
		notifyObservers();
		return clickedDish;
	}

	this.getAddedDish = function(){
		return addedDish;
	}

	//den vi lägger till i menyn
	this.setAddedDish = function(id){
		addedDish = id;
		notifyObservers();
		return addedDish;
	}

	this.addObserver = function(observer) { 
		observers.push(observer);
	}

	var notifyObservers = function(obj) { 
		for(var i = 0; i<observers.length; i++){
			observers[i].update(obj);
		}
	}

	this.removeObserver = function(observer){

	}
 	
 	//Set number of guests.
	this.setNumberOfGuests = function(num) {
		numGuests = num;
		notifyObservers();
		return numGuests;

	}
	this.setNumberOfGuests(4);
	
	//Return of guests.
	this.getNumberOfGuests = function() {
		return numGuests;
	}

	//Return the dish that is on the menu for selected type.
/*	this.getSelectedDish = function(type) {
		if(type == 'dessert'){
			for(i=0; i<menu.length;i++){
				if(menu[i] > 199){
					var selected = menu[i];
					console.log(selected);
				}
			}
		}else if(type == 'main dish'){
			for(i=0; i<menu.length; i++){
				if(menu[i] < 200 && menu[i] > 99){
					var selected = menu[i];
				}
			}
		}else{
			var selected = menu[i];
		}

		for(key in dishes){
			if(dishes[key].id == selected) {
				//console.log(dishes[key]);
				return dishes[key];
			}
		}
	}*/

	//Return all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	this.getMenuNames = function(){
		return menuNames;
	}

	//Return all ingredients for all the dishes on the menu.
	/*this.getAllIngredients = function() {
		for(i=0; i<menu.length;i++){
			var selected = menu[i];
			for(key in dishes){
				if(dishes[key].id == selected) {
					for(key in dishes[key].ingredients){
					}
					return dishes[key].ingredients;
				}
			}
		}
	}*/

	//Return the total price of the menu (all the ingredients multiplied by number of guests).
	/*this.getTotalMenuPrice = function() {
		var price = 0;
		for(item in menu){
			var selected = menu[item];
			for(key in dishes){
				if(dishes[key].id === selected.id) {
					ingredList=dishes[key].ingredients;
					for(elem in ingredList){
						price += ingredList[elem].price;
					}
				}
			}
		}
		return price*numGuests;
	}*/

	//Add dish to menu.
	this.addDishToMenu = function() {
		var dish = allClickedDishes[allClickedDishes.length - 1] ;
		menu.push(dish);
		console.log(menu)

		/*var dish = allClickedDishes[allClickedDishes.length - 1] ;
		if(allClickedDishes.length > 2){
			if(dish.title === allClickedDishes[allClickedDishes.length - 2].title){

			}else{
		//console.log("dish ")
		//console.log(dish)
				menu.push(dish);
				menuNames.push(dish.title);
				//console.log("menu names " + menuNames[0]);
				notifyObservers();
			}
		}
		else{
			menu.push(dish);
			menuNames.push(dish.title);
				//console.log("menu names " + menuNames[0]);
			notifyObservers();
		}*/
	}

	//Remove dish from menu.
	/*this.removeDishFromMenu = function(id) {
		for(i=0 ; i<menu.length; i++){
			if (menu[i] == id){
				menu.splice(i,1);
			}
		}
		notifyObservers();
	}*/

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned.
	/**this.getAllDishes = function (type,filter) {
	return dishes.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}  */ 

	//main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.

	this.getAllDishes = function (type, filter, callback, errorCallback) {
		$.ajax( {
			// SPECIAL CASE if there is no filter.
		   url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type="' + String(type) + '"&query="' + String(filter) + '"',
		   
		   headers: {
		     'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
		   },
		   success: function(data) {
		   	console.log("success getting att dishes from API")
		    callback(data);
		   },
		   error: function(error) {
		   	console.log("error getting all dishes from API")
		    errorCallback(error)
		   }
		});
	}

	//return a dish of specific ID.
	/*this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}*/

	this.getDish = function(id, callback, errorCallback){
		$.ajax( {
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
			},
			success: function(data) {
				allClickedDishes.push(data);
				allNames.push(data.title);
				allPrices.push(data.pricePerServing);
				//console.log(allNames);
				//console.log(allPrices);
				//console.log(allClickedDishes);
			   	//plocka ut image, description, ingredients osv. appenda här?
				//console.log(data)

				//console.log("success getting one dish from API")
				callback(data)
			},
			error: function(error) {
			   	//console.log("error getting one dish from API")
			    errorCallback(error)
			}
		});
	}





	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

	//this.setNumberOfGuests(4);
	//this.getNumberOfGuests();
	//this.getSelectedDish('dessert');
	//this.getFullMenu();
	//this.getAllIngredients();
	//this.addDishToMenu(3);
	//this.addDishToMenu(100);
	//this.addDishToMenu(202);
	//this.getTotalMenuPrice();
	//this.removeDishFromMenu(3);

}

var numberOfGuests = function(){
	document.getElementById("guests").innerHTML = "Number of Guests: " + numGuests;
	return numGuests;
}

var selectedDishes = function(){
	for (i=0; i<menu.length; i++){
		return menu[i].name;
	}
}