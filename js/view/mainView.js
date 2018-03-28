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
	var self = this;

	this.searchResultsDiv = container.find("#searchResults")

	this.updateSearchResults = function(type, filter){
		console.log("update main")
		self.searchResultsDiv.html("");

		// show loading indicator
		//$("#loading").show();
		model.getAllDishes(type, filter, function(data){
			//$("#loading").hide();
			self.searchResultsDiv.html("");
			for(key in data.results){
				self.searchResultsDiv.append('<div class="dishButton" id="img' + data.results[key].id + '"><div class="col-md-2"><img src="https://spoonacular.com/recipeImages/' + data.results[key].image + '" alt="Image" width="100" height="100"><figcaption>' + data.results[key].title +  ' </figcaption></div></div>');
			}
		}, function(){
			//$("#loading").hide();
			alert("mainView");
		});
		//for every dish that matches the type & filter, print out the image & caption.
		this.dishButton = container.find(".dishButton");

	}

	this.filter = container.find("textField");
	this.e = container.find("dropdown");

	this.searchButton = container.find("#searchButton");

	//model.addObserver(this);

	this.hide = function() {
		var a = container.find("#mainWindow2");
		a.hide();
	}

	this.show = function(){
		var a = container.find("#mainWindow2");
		a.show();	
	}
}