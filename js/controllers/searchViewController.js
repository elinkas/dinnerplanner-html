

var SearchViewController = function(view, model ) {
	var dishes = [];
	view.searchButton.click(function(){
	 	// ta fram värdet från textfältet
	 	var filter = document.getElementById("textField").value;

	 	// ta fram värdet från drop-down listan
	 	var e = document.getElementById("dropdown");
		var type = e.options[e.selectedIndex].text;

		dishes = model.getAllDishes(type, filter);
		console.log(dishes);

		showChosenDishes();
	 });

}
