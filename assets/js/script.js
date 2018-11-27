// JS by Dan Høegh
// UCN MMD 2018

window.onload = function(){

	// Add class "nav-active" to <body> when #menu-btn is clicked
	document.getElementById("menu-btn").addEventListener("click", function(event){
	    event.preventDefault(); // stops the element from doing it's usual stuff
	    document.getElementById("body-id").classList.add("nav-active");
	});

	// remove class "nav-active" from <body> when #menu-btn-close is clicked
	document.getElementById("menu-btn-close").addEventListener("click", function(event){
	    event.preventDefault(); // stops the element from doing it's usual stuff
	    document.getElementById("body-id").classList.remove("nav-active");
	});

}