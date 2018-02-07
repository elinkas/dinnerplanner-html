$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	console.log("ddd");
	// And create the instance of ExampleView
	var startView = new StartView($("#startPage"), model);
	var sidebarView = new SidebarView($("#sideBar"), model);
	//var allDishesView = new AllDishesView($("#allDishesView"), model);
	// var oneDishView = new OneDishView($("#oneDishView"), model);
	// 
	var mainView = new MainView($("#main"), model);
	var searchView = new SearchView($("#searchView"), model);
	var sidebarController = new SidebarController(sidebarView, model);
	var startViewController = new StartViewController(startView, model);
	//var controller = new Controller($("#controller"), model);

	//global pga används överallt
	showWelcomeScreen = function(){
		sidebarView.hide();
		// allDishesView.hide();
		//oneDishView.hide();
		//menuView.hide();
		mainView.hide();
		searchView.hide();
	}
	
	showWelcomeScreen();
	
	// when clicking on "create new dinner" this should happen
	showAllDishes = function(){
		startView.hide();
		sidebarView.show();
		searchView.show();
		mainView.show();
		// exampleView.hide()
		// sidebarView.show() 
	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */


});