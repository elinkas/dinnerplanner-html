/** MainView Object constructor 
 * 
 * It is responsible for contatiner:
 * - Available dishes
 * - Search result
 * - Chosen menu
 *
 */ 
var MainView = function (container, model) {

	var starters = [];
	var mains = [];
	var desserts = [];
	var chosenDishes = [];

	this.update = function(){
		searchResultsDiv = container.find("#searchResults")
		searchResultsDiv.html("");

		dishes = model.getAllDishes(model.getType(), model.getFilter());
		//for every dish that matches the type & filter, print out the image & caption.
		for(dish in dishes){
			searchResultsDiv.append('<div class="dishButton" id="img' + dishes[dish].id + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>');
		}
		this.dishButton = container.find(".dishButton");

	}

	this.filter = container.find("");
	this.e = container.find("");

	this.redo = function(){
		
	}

	this.searchButton = container.find("#searchButton");
	//this.update();
	model.addObserver(this);
	//this.update();

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function() {
		var a = container.find("#mainWindow2");
		a.hide();
	}

	this.show = function(){
		var a = container.find("#mainWindow2");
		a.show()	
	}
}
