var OneDishViewController = function(sidebarView, view, model) {

	view.addButton.on("click", function(){
		var id = model.getCurrentDish();
		sidebarView.update(id.substring(3));
		model.addDishToMenu(id.substring(3));

	});
	view.backButton.on("click", function(){
		showAllDishes();
	});
 
}

