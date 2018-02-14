$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create instances of the views
	var startView = new StartView($("#startPage"), model);
	var startViewController = new StartViewController(startView, model);

	var sidebarView = new SidebarView($("#sideBar"), model);;
	var sidebarController = new SidebarController(sidebarView, model);
	
	var searchView = new SearchView($("#selectDish"), model);
	var searchViewController = new SearchViewController(searchView,model, chosenView);

	var mainView = new MainView($("#main"), model);
	var mainViewController = new MainViewController(mainView,model);

	var chosenView = new ChosenView($("#chosen"), model);
	var chosenViewController = new ChosenViewController(chosenView,model);

	var oneDishView = new OneDishView($("#oneDish"), model);
	var oneDishViewController = new OneDishViewController(oneDishView,model);


	// Global function, hiding all the views when starting the application
	showWelcomeScreen = function(){
		sidebarView.hide();
		mainView.hide();
		searchView.hide();
		chosenView.hide();
	}
	
	showWelcomeScreen();
	
	// Create new dinner
	showAllDishes = function(){
		startView.hide();
		sidebarView.show();
		searchView.show();
		mainView.show();
		chosenView.hide();
	}


	showChosenDishes = function(){
		chosenView.show();
		startView.hide();
		sidebarView.show();
		searchView.show();
		mainView.hide();
	}

	showOneDish = function(id){
		chosenView.hide();
		startView.hide();
		sidebarView.show();
		searchView.hide();
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