
var MainViewController = function(view, model ) {
 	var dishes = [];

 	// we want to get type and filter here
 	dishes = model.getAllDishes('dessert',);
 	console.log();

 	var i=0;
 	for(dish in dishes){
 		var wrapper= document.getElementById("main");
 		wrapper.innerHTML += '<div id="img' + i + '"><div class="col-md-2"><img src="./images/' + dishes[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + dishes[dish].name +  ' </figcaption></div></div>';
 		i++;
 	}
 }
