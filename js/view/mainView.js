/** MainView Object constructor 
 * 
 * It is responsible for contatiner:
 * - Available dishes
 * - Search result
 * - Chosen menu
 *
 */
var MainView = function (container, model) {

	//var wrapper= container.find("main"); //byt till container

	var starters = [];
	var mains = [];
	var desserts = [];
	//dishes += model.getAllDishes('starter','');


	this.update = function(){
		// we want to get type and filter here
 		//dishes = model.getAllDishes('main dish','');
 		starters = model.getAllDishes('starter','');
 		mains = model.getAllDishes('main dish','');
 		desserts = model.getAllDishes('dessert','');

		container.html("");

 		for(dish in starters){
	 		container.append('<div class="dishButton" id="img' + starters[dish].id + '"><div class="col-md-2"><img src="./images/' + starters[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + starters[dish].name +  ' </figcaption></div></div>');
	 		//wrapper.innerHTML += '<div id="img' + i + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>';

	 	}
	 	 for(dish in mains){
	 		container.append('<div class="dishButton" id="img' + mains[dish].id + '"><div class="col-md-2"><img src="./images/' + mains[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + mains[dish].name +  ' </figcaption></div></div>');
	 		//wrapper.innerHTML += '<div id="img' + i + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>';
	 	}
	 	 for(dish in desserts){
	 		container.append('<div class="dishButton" id="img' + desserts[dish].id + '"><div class="col-md-2"><img src="./images/' + desserts[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + desserts[dish].name +  ' </figcaption></div></div>');
	 		//wrapper.innerHTML += '<div id="img' + i + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>';

	 	}
	}

	this.update();
	this.dishButton = container.find(".dishButton");

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function() {
		var a = document.getElementById("main");
		a.style.display = "none";
	}

	this.show = function(){
		var a = document.getElementById("main");
		a.style.display = "block";	
	}


}
