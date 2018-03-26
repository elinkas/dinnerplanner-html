var ConfirmDinnerView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	var totalMenuPrice = container.find("#totalMenuPrice")
	this.goBackButton = container.find("#goBackButton");
	this.printButton = container.find("#printButton");

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
		IDmenu = model.getFullMenu();
		//console.log(IDmenu);
		var dishes = [];
		$.each(IDmenu, function(i, el){
		    if($.inArray(el, dishes) === -1) dishes.push(el);
		});
		//console.log(dishes);
		menu=[];

		imageListDiv = container.find("#imageList")
		imageListDiv.html("");
		//här borde vi börja appenda alla titlar, bilder och pris
		// menuDishTitle i sidebar view
		for (key in menuDishImages){
			imageListDiv.append('<div id="img"><div class="col-md-2"> <img src="' + menuDishImages[key] + '" alt="Image" width="100" height="100"><figcaption>' + menuDishTitle[key] + ' </figcaption></div></div>');
		}
		totalDiv = container.find('#total');
		var totalPrice = 0;
		console.log("menu " + menuDishPrice);
		console.log("num" + numberOfGuests)
		for (key in menuDishPrice){
			totalPrice += menuDishPrice[key];
		}
		totalMenuPrice.html(totalPrice * model.getNumberOfGuests()); 
		//console.log("pris " + totalPrice * numberOfGuests);
		//totalDiv.append(totalPrice * numberOfGuests);
	}
	model.addObserver(this);

	this.hide = function() {
		var a = container.find("#confirmDinner2");
		a.hide();
	}

	this.show = function(id){
		var a = container.find("#confirmDinner2");
		a.show();	
	}
}