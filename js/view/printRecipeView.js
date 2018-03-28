var PrintRecipeView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	this.goBackButton = container.find("#goBackButton2");

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
		menu = model.getFullMenu(); // collect all dishes from menu

		var dishes = [];
		$.each(menu, function(i, el){
		    if($.inArray(el, dishes) === -1) dishes.push(el);
		});
		divDiv = container.find("#recipeList");
		divDiv.html("");
		divDiv.html("");
		divDiv.html("");
		
		for(dish in menuDishImages){
			divDiv.append('<div class="row">' + 
						'<div class ="col-md-2">' +
							'<div id="image">' +
								'<br><div id="image">' + 
									'<img src="' + menuDishImages[dish] + '" alt="Image" width="100" height="100">' +
								'</div>' +
							'</div>' +
						'</div>' +
						
						'<div class="col-md-4">' + 
							'<div id="description">' +
								'<h4>' + menuDishTitle[dish] + '</h4>' +
								'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.' +
							'</div>' +
						'</div>' +
						
						'<div class="col-md-6">' +
							'<div id="preparation">' +
								'<h4>PREPARATION </h4>' + 
								menuDishPrep[dish] +
							'</div>' +
						'</div>' +
					'</div><br><br><br>');
		}
	}

	model.addObserver(this);

	this.show = function(){
		//this.update(id);
		var a = container.find("#printRecipe2");
		a.show();
	}
	this.hide = function() {
		var a = container.find("#printRecipe2");
		a.hide();
	}
}