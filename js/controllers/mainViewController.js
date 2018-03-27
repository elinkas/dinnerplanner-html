
var MainViewController = function(view, model) {

	view.searchButton.on("click", function(){
		//get the selected type & filter from user input
		var filter = document.getElementById("textField").value;
		var e = document.getElementById("dropdown");
		var type = e.options[e.selectedIndex].text;

		model.setFilter(filter);
		model.setType(type);
		view.update();

		view.searchResultsDiv.on('click', '.dishButton', function(){
			var id = this.id.substring(3);
			model.setClickedDish(id);
	 		showOneDish();
		})
	});
}