//Creates variables for recipes and descriptions. Obtain JSON data for recipe names, descriptions, ingredients.

var allRecipes;
var descriptions;

var recipesURL = 'https://muxinli.github.io/recipes%20(ML).json';  //Request recipe JSON file from URL
var request = new XMLHttpRequest();
request.open('GET', recipesURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var recipes = request.response;
	allRecipes = recipes.data;
	console.log("Testing recipes JSON " + allRecipes[1].item);  //Just checks that JSON was loaded
}


var descURL = 'https://muxinli.github.io/descriptions.json';  //Request descriptions JSON file from URL
var get = new XMLHttpRequest();
get.open('GET', descURL);
get.responseType = 'json';
get.send();
get.onload = function() {
	descriptions = get.response;
	console.log("Testing descriptions JSON " + descriptions[1].Description);  //Just checks JSON was loaded
}