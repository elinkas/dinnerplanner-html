var ConfirmDinnerView = function (container, model) {

	var numberOfGuests = container.find("#numberOfGuests");
	var totalMenuPrice = container.find("#totalMenuPrice")
	this.goBackButton = container.find("#goBackButton");
	this.printButton = container.find("#printButton");

	this.update = function(){
		numberOfGuests.html(model.getNumberOfGuests()); 
		IDmenu = model.getFullMenu();
		menu=[];

		imageListDiv = container.find("#imageList")
		imageListDiv.html("");
		for (dish in IDmenu) { 
			menu.push(model.getDish(IDmenu[dish]));
		}
		for (dish in menu){
			imageListDiv.append('<div id="img' + menu[dish].id + '"><div class="col-md-2"> <img src="./images/' + menu[dish].image + '" alt="Image" width="100" height="100"><figcaption>' + menu[dish].name +  ' </figcaption></div></div>');
		}
		 

		totalMenuPrice.html(model.getTotalMenuPrice()); 
	}

	//this.update();
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