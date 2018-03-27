var totalamount = 0;

var OneDishView = function (container, model) {

	this.update = function(){
		if(model.getClickedDish() == null){
			var id = 0;
		}else{ 
			totalamount = 0;
			var id = model.getClickedDish();

			model.getDish(id, function(data){
				var dish = data; // dish = data (search result) from Spoonacular API, accessed from the getDish function in the model, returning a function.

				// image
				oneDishDiv = container.find("#imglist")
				oneDishDiv.html("");
				oneDishDiv.append('<h1>' + dish.title + '</h1>')
				oneDishDiv.append('<div id="image' + dish.id + '"><div class="col-md-2"><img src="' + dish.image + '" alt="Image" width="100" height="100"></div></div>');

				// prints quantity of ingredients
				quantityDiv = container.find("#quantity")
				quantityDiv.html("")
				var quantitylist = [];
				for(var i=0; i< dish.extendedIngredients.length; i++){
					quantitylist = dish.extendedIngredients[i];
					var num = model.getNumberOfGuests();
					var quant = quantitylist.amount * num;
					quantityDiv.append('' + quant.toFixed(2) + ' ' + quantitylist.unit + '<br>');
				}	

				// prints name of ingredients
				ingredDiv = container.find("#ingredients")
				ingredDiv.html("")
				var ingredlist = [];
				for(var i=0; i< dish.extendedIngredients.length; i++){
					ingredlist = dish.extendedIngredients[i]
					ingredDiv.append('' + ingredlist.name + '<br>')
				}	

				//prints the total price of all the ingredients * amount of guests
				totalDiv = container.find("#total")
				totalDiv.html("")

				totalDiv.append("SEK " + dish.pricePerServing * model.getNumberOfGuests());

				// prints the preparation text
				prepDiv = container.find("#preparation")
				prepDiv.html("")
				if(dish.instructions == null){
					dish.instructions = "there are no instructions for this dish"
				}
				prepDiv.append('<h1>Preparation</h1><br>' + dish.instructions)


			}, function(){
				// Do something when error'
			});
		}
	}

	model.addObserver(this);

	this.addButton = container.find("#addButton");
	this.backButton = container.find("#backButton");


	this.show = function(){
		var a = container.find("#oneDish2");
		a.show();
	}

	this.hide = function() {
		var a = container.find("#oneDish2");
		a.hide();
	}
}