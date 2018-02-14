

var SearchViewController = function(view, model, chosenView) {
	var dishes = [];
		view.searchButton.click(function(){
			var filter = document.getElementById("textField").value;

		 	// ta fram värdet från drop-down listan
		 	var e = document.getElementById("dropdown");
			var type = e.options[e.selectedIndex].text;

			model.setFilter(filter);
			model.setType(type);

			//hämtar alla rätter som har rätt filter & type
			dishes = model.getAllDishes(type, filter);
			showChosenDishes();
			chosenView.update(dishes);

		});

}
