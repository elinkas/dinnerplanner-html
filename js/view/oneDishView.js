var OneDishView = function (container, model) {

   /** 
	*
	* show&hide-functions
	*
	*/


	//input type number!!

	this.show = function(id){
		console.log("this is id " + id);
		this.update(id);
		var a = document.getElementById("oneDish");
		a.style.display = "block";		
	}
		this.hide = function() {
		var a = document.getElementById("oneDish");
		a.style.display = "none";
	}


	this.update = function(id){
		if(id == null){
			id = 0;
		}else{
			//appends the image of the chosen dish to html-div "imglist"
			dish = model.getDish(id.substring(3));
			oneDishDiv = container.find("#imglist")
			oneDishDiv.html("");
			oneDishDiv.append('<h1>' + dish.name + '</h1>')
			oneDishDiv.append('<div id="image' + dish.id + '"><div class="col-md-2"><img src="./images/' + dish.image + '" alt="Image" width="100" height="100"></div></div>');

			//prints quantity of ingredients
			quantityDiv = container.find("#quantity")
			quantityDiv.html("")
			var quantitylist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				quantitylist = dish.ingredients[i]
				quantityDiv.append('' + quantitylist.quantity + ' ' + quantitylist.unit + '<br>');
			}	

			// prints name of ingredients
			ingredDiv = container.find("#ingredients")
			ingredDiv.html("")
			var ingredlist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				ingredlist = dish.ingredients[i]
				ingredDiv.append('' + ingredlist.name + '<br>')
			}	

			//prints the price of the ingredients
			priceDiv = container.find("#price")
			priceDiv.html("")
			var pricelist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				pricelist = dish.ingredients[i]
				var num = model.getNumberOfGuests();
				priceDiv.append('SEK ' + pricelist.price * num + '<br>');
			}		

			//prints the total price of all the ingredients * amount of guests
			totalDiv = container.find("#total")
			totalDiv.html("")
			var totalamount = 0;
			var totallist = [];
			for(var i=0; i< dish.ingredients.length; i++){
				totallist = dish.ingredients[i];
				totalamount += totallist.price * model.getNumberOfGuests();
				
			}
			totalDiv.append("SEK " + totalamount)
			console.log(totalamount)

			// prints the preparation text
			prepDiv = container.find("#preparation")
			prepDiv.html("")
			prepDiv.append('<h1>Preparation</h1><br>' + dish.description)
		}
	}

	this.addButton = container.find("#addButton");
	this.backButton = container.find("#backButton");

	this.update();

}