
var MainViewController = function(view, model ) {

	view.searchButton.on("click", function(){
		//get the selected type & filter from user input
		var filter = document.getElementById("textField").value;
		var e = document.getElementById("dropdown");
		var type = e.options[e.selectedIndex].text;

		model.setFilter(filter);
		model.setType(type);
		view.update();

		view.searchResultsDiv.on('click', '.dishButton', function(){
			//console.log("click");
			var id = this.id.substring(3);
			model.setClickedDish(id);
			//console.log("id for clicked dish: " + id);
	 		showOneDish();
		})

		/*view.dishButton.each(function(i, el){
			el.addEventListener("click", function(){
				//send the id-nr of selected dish to ShowOneDish
				console.log("click");
				var id = el.id.substring(3);
				model.setClickedDish(id);
	 			showOneDish();
	 		})
		});*/
	});
}