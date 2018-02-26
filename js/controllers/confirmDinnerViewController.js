var ConfirmDinnerViewController = function(view, model) {

 view.goBackButton.click(function(){
 	showAllDishes();
 }); 

 view.printButton.click(function(){
 	showPrintedRecipe();
 });
} 