$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create instances of the views
	var startView = new StartView($("#startPage"), model);
	var startViewController = new StartViewController(startView, model);

	var sidebarView = new SidebarView($("#sideBar"), model);;
	var sidebarController = new SidebarController(sidebarView, model);
	
	var mainView = new MainView($("#mainWindow"), model);
	var mainViewController = new MainViewController(mainView,model);

	var oneDishView = new OneDishView($("#oneDish"), model);
	var oneDishViewController = new OneDishViewController(sidebarView, oneDishView,model);

	var confirmDinnerView = new ConfirmDinnerView($("#confirmDinner"), model);
	var confirmDinnerViewController = new ConfirmDinnerViewController(confirmDinnerView,model);

	var printRecipeView = new PrintRecipeView($("#printRecipe"), model);
	var printRecipeViewController = new PrintRecipeViewController(printRecipeView,model);
 

	// Global function, hiding all the views when starting the application
	showWelcomeScreen = function(){
		sidebarView.hide();
		mainView.hide();
		oneDishView.hide();
		confirmDinnerView.hide();
		printRecipeView.hide();
	}
	
	showWelcomeScreen();
	
	// Create new dinner 
	showAllDishes = function(){
		startView.hide();
		sidebarView.show();
		mainView.show();
		oneDishView.hide();
		confirmDinnerView.hide();
		printRecipeView.hide();
	}


	showChosenDishes = function(){
		startView.hide();
		sidebarView.show();
		mainView.show();
		oneDishView.hide();
		confirmDinnerView.hide();
		printRecipeView.hide();
	}

	showOneDish = function(id){
		startView.hide();
		sidebarView.show();
		mainView.hide();
		oneDishView.show(id);
		confirmDinnerView.hide();
		printRecipeView.hide();
	}

	showConfirmedDinner = function(){
		startView.hide();
		sidebarView.hide();
		mainView.hide();
		oneDishView.hide();
		confirmDinnerView.show();
		printRecipeView.hide();
	}

	showPrintedRecipe = function(){
		startView.hide();
		sidebarView.hide();
		mainView.hide();
		oneDishView.hide();
		confirmDinnerView.hide();
		printRecipeView.show();
	}
});

/**
 * IMPORTANT: app.js is the only place where you are allowed to
 * use the $('someSelector') to search for elements in the whole HTML.
 * In other places you should limit the search only to the children 
 * of the specific view you're working with (see exampleView.js).
 */