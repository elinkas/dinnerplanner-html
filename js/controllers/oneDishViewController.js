var OneDishViewController = function(mainView, sidebarView, view, model) {

	view.addButton.on("click", function(){
		// add chosen dish to menu
		//model.setPrice(totalamount);
		var id = model.getClickedDish();
		//model.setAddedDish(id);

		//model.setPrice(totalamount);
		console.log("total " + totalamount);
		//sidebarView.update();
		console.log("id2 " + id);
		model.addDishToMenu(id);

	});
	view.backButton.on("click", function(){
		showAllDishes();
		mainView.searchButton.click();
	});
}