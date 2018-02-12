/** MainView Object constructor 
 * 
 * It is responsible for contatiner:
 * - Available dishes
 * - Search result
 * - Chosen menu
 *
 */
var MainView = function (container, model) {

   /** 
	*
	* Hide and show functions
	*
	*/
	this.hide = function() {
		var a = document.getElementById("main");
		a.style.display = "none";
	}

	this.show = function(){
		var a = document.getElementById("main");
		a.style.display = "block";	
	}


}
