// JS by Dan Høegh
// UCN MMD 2019

// setup variables for things that are used more than once
let elmBody = document.querySelector('body');
const strActive = 'nav-active';

// Add class "nav-active" to <body> when #menu-btn is clicked
document.querySelector('#menu-btn').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.add(strActive); // add the content of strActive to the class attribute on <body>
});

// remove class "nav-active" from <body> when #menu-btn-close is clicked
document.querySelector('#menu-btn-close').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.remove(strActive); // remove the content of strActive to the class attribute on <body>
});
