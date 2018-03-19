var ConfirmDinnerViewController = function(mainView, view, model) {

 view.goBackButton.click(function(){
 	showAllDishes();
 	mainView.searchButton.click();
 }); 

 view.printButton.click(function(){
 	showPrintedRecipe();
 });
}  