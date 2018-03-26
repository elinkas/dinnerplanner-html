var OneDishViewController = function(mainView, sidebarView, view, model) {

	view.addButton.on("click", function(){
		var id = model.getClickedDish();
		//console.log("id " + id)
		//console.log("saved id " + id)
		//totalamount per person
		//model.addDishToMenu(id);
		model.addDishToMenu();
		//console.log(model.getFullMenu()); 

	});
	view.backButton.on("click", function(){
		showAllDishes();
		mainView.searchButton.click();
	});
}