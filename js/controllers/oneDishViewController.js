var OneDishViewController = function(mainView, sidebarView, view, model) {

	view.addButton.on("click", function(){
		model.addDishToMenu();
	});

	view.backButton.on("click", function(){
		showAllDishes();
	});
}