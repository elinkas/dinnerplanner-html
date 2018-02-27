var OneDishViewController = function(mainView, sidebarView, view, model) {

	view.addButton.on("click", function(){
		// add chosen dish to menu
		var id = model.getCurrentDish();
		sidebarView.update(id.substring(3));
		model.addDishToMenu(id.substring(3));

	});
	view.backButton.on("click", function(){
		showAllDishes();
		mainView.searchButton.click();
	});
}