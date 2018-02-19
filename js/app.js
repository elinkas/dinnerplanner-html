$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create instances of the views
	var startView = new StartView($("#startPage"), model);
	var startViewController = new StartViewController(startView, model);

	var sidebarView = new SidebarView($("#sideBar"), model);;
	var sidebarController = new SidebarController(sidebarView, model);
	
	var mainView = new MainView($("#mainWindow"), model);
	var mainViewController = new MainViewController(mainView,model,);

	var oneDishView = new OneDishView($("#oneDish"), model);
	var oneDishViewController = new OneDishViewController(oneDishView,model);


	// Global function, hiding all the views when starting the application
	showWelcomeScreen = function(){
		sidebarView.hide();
		mainView.hide();
		oneDishView.hide()
	}
	
	showWelcomeScreen();
	
	// Create new dinner 
	showAllDishes = function(){
		startView.hide();
		sidebarView.show();
		mainView.show();
		oneDishView.hide()
	}


	showChosenDishes = function(){
		startView.hide();
		sidebarView.show();
		mainView.show();
		oneDishView.hide()
	}

	showOneDish = function(id){
		startView.hide();
		sidebarView.show();
		mainView.hide();
		oneDishView.show(id);
	}
});

/**
 * IMPORTANT: app.js is the only place where you are allowed to
 * use the $('someSelector') to search for elements in the whole HTML.
 * In other places you should limit the search only to the children 
 * of the specific view you're working with (see exampleView.js).
 */