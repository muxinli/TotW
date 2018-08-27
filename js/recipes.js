//Creates variables for recipes and descriptions. Obtain JSON data for recipe names, descriptions, ingredients.

var allRecipes;
var descriptions;

var requestURL = 'https://muxinli.github.io/recipes%20(ML).json';  //Request recipe JSON file from URL
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

var getURL = 'https://muxinli.github.io/descriptions.json';  //Request descriptions JSON file from URL
var get = new XMLHttpRequest();
get.open('GET', getURL);
get.responseType = 'text';
get.send();

request.onload = function() {
	var recipes = JSON.parse(request.response);
 	allRecipes = recipes.data;
}

get.onload = function() {
	descriptions = JSON.parse(get.response);
}