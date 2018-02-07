$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	console.log("ddd");
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var allDishesView = new AllDishesView($("#allDishesView"), model);
	var oneDishView = new OneDishView($("#oneDishView"), model);
	var menuView = new MenuView($("#menuView"), model);
	var searchView = new SearchView($("#searchView"), model);
	//var controller = new Controller($("#controller"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});