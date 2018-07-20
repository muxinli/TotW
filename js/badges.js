$( document ).ready(function() {
	var requestURL = 'https://muxinli.github.io/recipes%20(ML).json';  //Request recipe JSON file from URL
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'text';
	request.send();

	request.onload = function() {  //Check if request has loaded, then parse text into JS Object for later use.
	var recipes = JSON.parse(request.response);
	var allRecipes = recipes.data;
	badges(allRecipes);
	}

function badges(allRecipes) {
	var meatTotal = 0;
  	var veggieTotal = 0;
  	var fishTotal = 0;
  	var dessertTotal = 0;
	var allTotal = 0;

	var list = document.getElementsByClassName("recipe_list");

	for (var i = 0; i < allRecipes.length; i++) {  //Count up total number of recipes by their dish types
		var dish = allRecipes[i].dish;  //Find the corresponding dish type in allrecipes

		if (dish == "Meat")	{  //Count up all the meat dishes in allRecipes; store total number
			meatTotal++;
			allTotal++;
		} else if (dish == "Veggies") {
			veggieTotal++;
			allTotal++;
		} else if (dish == "Fish") {
			fishTotal++;
			allTotal++;
		} else if (dish == "Dessert") {
  			dessertTotal++;
  			allTotal++;
  		} else {
  			allTotal++;
  		}
	}

		console.log(localStorage.getItem("meat"));
		console.log(localStorage.getItem("veggie"));
		console.log(localStorage.getItem("fish"));
		console.log(localStorage.getItem("cake"));
		console.log(localStorage.getItem("food"));

	$(".container :checkbox").change(function(){
	  	var meatCount = 0;
	  	var veggieCount = 0;
	  	var fishCount = 0;
	  	var dessertCount = 0;
	  	var allCount = 0;

	  	for (var i = 0; i < list.length; i++) {   //Count how many of each dish type is cooked
			var dish = allRecipes[i].dish;  //Find the corresponding dish type in allrecipes
		  	if (list[i].getAttribute("class") == "recipe_list cooked") {  //If recipe list has the class 'cooked'
		  		if (dish == "Meat") {  //If it's a meat recipe, add to counter
		  			meatCount++;
		  			allCount++;
		  		} else if (dish == "Veggies") {  //If it's a veggie recipe, add etc.
		  			veggieCount++;
		  			allCount++;	
		  		} else if (dish == "Fish") {
		  			fishCount++;
		  			allCount++;
		  		} else if (dish == "Dessert") {
		  			dessertCount++;
		  			allCount++;
		  		} else {
		  			allCount++;
		  		}
		  	}
		}
	
		console.log("Meat Count is " + meatCount + " and meat total is " + meatTotal);
		console.log("Veggie Count is " + veggieCount + " and veggie total is " + veggieTotal);
		console.log("Fish Count is " + fishCount + " and fish total is " + fishTotal);
		console.log("Dessert Count is " + dessertCount + " and dessert total is " + dessertTotal);
		console.log("All Count is " + allCount + " and total is " + allTotal);


		if (meatCount == meatTotal) {  //If all meat dishes are cooked, switch to colored image
			document.getElementById("meatBadge").src = "static/meat.png";
			document.getElementById("meatIcon").src = "static/meat.png";
			localStorage.setItem("meat", "static/meat.png");  //Set local storage value to meat.png for page refreh
		} else {  //If not all cooked, display black/white image
			document.getElementById("meatBadge").src = "static/meatbw.png";
			document.getElementById("meatIcon").src = "static/meatbw.png";
			localStorage.setItem("meat", "static/meatbw.png");//Set local storage value to meatbw.png for page refresh
		}

		if (veggieCount == veggieTotal) {  //Displays a colored veggie image when all veggie recipes are cooked
			document.getElementById("veggieBadge").src = "static/apple.png";  
			document.getElementById("veggieBadge").src = "static/apple.png";  
			localStorage.setItem("veggie", "static/apple.png");
		} else {
			document.getElementById("veggieBadge").src = "static/applebw.png";  
			document.getElementById("veggieBadge").src = "static/applebw.png";  
			localStorage.setItem("veggie", "static/applebw.png");
		}
	
		if (fishCount == fishTotal) {  //Displays a colored fish image when all fish recipes are cooked
			document.getElementById("fishBadge").src = "static/fish.png";  
			document.getElementById("fishIcon").src = "static/fish.png";  
			localStorage.setItem("fish", "static/fish.png");
		} else {
			document.getElementById("fishBadge").src = "static/fishbw.png";  
			document.getElementById("fishIcon").src = "static/fishbw.png";  
			localStorage.setItem("fish", "static/fishbw.png");
		}

		if (dessertCount == dessertTotal) {  //Displays a colored cake image when all dessert recipes are cooked
			document.getElementById("cakeBadge").src = "static/cake.png"; 
			document.getElementById("cakeIcon").src = "static/cake.png"; 
			localStorage.setItem("cake", "static/cake.png");
		} else {
			document.getElementById("cakeBadge").src = "static/cakebw.png"; 
			document.getElementById("cakeIcon").src = "static/cakebw.png"; 
			localStorage.setItem("cake", "static/cakebw.png");
		}

		if (allCount == allTotal) {	 //Displays a colored cooking pot image when all recipes are cooked - huzzah!	  	
			document.getElementById("foodBadge").src = "static/pot.png"; 
			document.getElementById("foodIcon").src = "static/pot.png"; 
			localStorage.setItem("food", "static/pot.png");
		} else {
			document.getElementById("foodBadge").src = "static/potbw.png"; 
			document.getElementById("foodIcon").src = "static/potbw.png"; 
			localStorage.setItem("food", "static/potbw.png");
		}
	});  //End of change()

	if ($(".container :checkbox").is(":checked")) {
		document.getElementById("meatBadge").src = localStorage.getItem("meat");  //Set img src using local storage values
		document.getElementById("veggieBadge").src = localStorage.getItem("veggie");  
		document.getElementById("fishBadge").src = localStorage.getItem("fish");  
		document.getElementById("cakeBadge").src = localStorage.getItem("cake"); 
		document.getElementById("foodBadge").src = localStorage.getItem("food"); 

		document.getElementById("meatIcon").src = localStorage.getItem("meat");  //For about page; set img src using local storage values
		document.getElementById("veggieIcon").src = localStorage.getItem("veggie");  
		document.getElementById("fishIcon").src = localStorage.getItem("fish");  
		document.getElementById("cakeIcon").src = localStorage.getItem("cake"); 
		document.getElementById("foodIcon").src = localStorage.getItem("food"); 
	} else {
		document.getElementById("meatBadge").src = "static/meatbw.png";  //If nothing is checked, set img src
		document.getElementById("veggieBadge").src = "static/applebw.png";  
		document.getElementById("fishBadge").src = "static/fishbw.png";  
		document.getElementById("cakeBadge").src = "static/cakebw.png"; 
		document.getElementById("foodBadge").src = "static/potbw.png"; 

		document.getElementById("meatIcon").src = "static/meatbw.png";  //If nothing is checked, set img src
		document.getElementById("veggieIcon").src = "static/applebw.png";  
		document.getElementById("fishIcon").src = "static/fishbw.png";  
		document.getElementById("cakeIcon").src = "static/cakebw.png"; 
		document.getElementById("foodIcon").src = "static/potbw.png"; 
	}

}  //End of badges()


});  //End of document.ready