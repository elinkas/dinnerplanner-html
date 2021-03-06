var ConfirmDinnerView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	var totalMenuPrice = container.find("#totalMenuPrice")
	this.goBackButton = container.find("#goBackButton");
	this.printButton = container.find("#printButton");

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
		menu = model.getFullMenu();
		imageListDiv = container.find("#imageList")
		imageListDiv.html("");

		for(key in menu){
			imageListDiv.append('<div id="img"><div class="col-md-2"> <img src="' + menu[key].image + 
				'" alt="Image" width="100" height="100"><figcaption>' + menu[key].title + ' </figcaption></div></div>');
		}

		totalDiv = container.find('#total');
		var totalPrice = 0;
		for (key in menu){
			totalPrice += menu[key].price;
		}

		totalPrice.toFixed(2);
		totalMenuPrice.html(totalPrice * model.getNumberOfGuests()); 
	}

	model.addObserver(this);

	this.hide = function() {
		var a = container.find("#confirmDinner2");
		a.hide();
	}

	this.show = function(){
		var a = container.find("#confirmDinner2");
		a.show();	
	}
}