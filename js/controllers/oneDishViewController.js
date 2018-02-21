var OneDishViewController = function(sidebarView, view, model) {

	view.addButton.on("click", function(){
		sidebarView.append1();
		model.addDishToMenu()
		showAllDishes();

		//lägg till namn & pris genom model.getDish(id) osv
		//model.setName(name) och model.setPrice(price) osv
	});
	view.backButton.on("click", function(){
		showAllDishes();
	});

}

