
var MainViewController = function(view, model ) {

	view.searchButton.on("click", function(){
		//get the selected type & filter from user input
		var filter = document.getElementById("textField").value;
		var e = document.getElementById("dropdown");
		var type = e.options[e.selectedIndex].text;

		model.setFilter(filter);
		model.setType(type);
		view.update();

		view.dishButton.each(function(i, el){
			el.addEventListener("click", function(){
				//send the id-nr of selected dish to ShowOneDish
				model.setCurrentDish(el.id);
	 			showOneDish(el.id);
	 		})
		});
	});
}