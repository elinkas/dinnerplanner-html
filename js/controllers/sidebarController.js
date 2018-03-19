var SidebarController = function(mainView, view, model ) {
 view.plusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	mainView.searchButton.click();
 });
 
 view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	mainView.searchButton.click();

 });

 view.confirmDinnerButton.click(function(){
 	showConfirmedDinner(); 
 }); 
} 