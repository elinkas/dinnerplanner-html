var OneDishViewController = function(sideBarView, view, model) {

	view.addButton.on("click", function(){
		console.log("hej")
		//console.log('id ' + model.getCurrentDish());
		//sidebarView.update(model.getCurrentDish());
		//showAllDishes();

	});
	view.backButton.on("click", function(){
		showAllDishes();
	});
 
}

