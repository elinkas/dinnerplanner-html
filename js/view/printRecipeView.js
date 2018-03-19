var PrintRecipeView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	this.goBackButton = container.find("#goBackButton2");

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
		alldishes = model.getFullMenu(); // collect all dishes from menu

		var dishes = [];
		$.each(alldishes, function(i, el){
		    if($.inArray(el, dishes) === -1) dishes.push(el);
		});
		//console.log(dishes);

		divDiv = container.find("#recipeList");
		divDiv.html("");
		divDiv.html("");
		divDiv.html("");


		for(dish in dishes){ // for each dish in menu
			dishObject = model.getDish(dishes[dish]); // collect details about this dish and append to html
			divDiv.append('<div class="row">' + 
						'<div class ="col-md-2">' +
							'<div id="image">' +
								'<br><div id="image' + dishObject.id + '">' + 
									'<img src="./images/' + dishObject.image + '" alt="Image" width="100" height="100">' +
								'</div>' +
							'</div>' +
						'</div>' +
						
						'<div class="col-md-4">' + 
							'<div id="description">' +
								'<h4>' + dishObject.name + '</h4>' +
								'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.' +
							'</div>' +
						'</div>' +
						
						'<div class="col-md-6">' +
							'<div id="preparation">' +
								'<h4>PREPARATION </h4>' + 
								dishObject.description +
							'</div>' +
						'</div>' +
					'</div><br><br><br>');
		}
	}

	model.addObserver(this);

	this.show = function(id){
		this.update(id);
		var a = container.find("#printRecipe2");
		a.show();
	}
	this.hide = function() {
		var a = container.find("#printRecipe2");
		a.hide();
	}
}