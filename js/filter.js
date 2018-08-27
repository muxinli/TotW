//Filters recipe list for cooked/uncooked, hearts, rupees, and food types
$( document ).ready(function() {

document.getElementById("filter").addEventListener("click", filter);

function filter() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("options").style.display = "block";
}  //End of filter()

//Hides options when 'x' is clicked, or when outside the filter window is clicked
document.getElementById("exit2").addEventListener("click", close);
document.getElementById("overlay").addEventListener("click", close);

function close() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("options").style.display = "none";
}  //End of close()

//Filters by cooked/uncooked
document.getElementById("all").addEventListener("click", cooked);
document.getElementById("cooked").addEventListener("click", cooked);
document.getElementById("uncooked").addEventListener("click", cooked);

function cooked() {
	var list = document.getElementsByClassName("recipe_list");

    if (document.getElementById("all").checked) {  //If "All" option is selected
    	for (i = 0; i < list.length; i++) {
	    	list[i].style.display = "block";  //For each recipe_list element, set display to "block" (show it)
    	}
    } else if (document.getElementById("cooked").checked) {  //If 'Cooked' option is selected
    	for (i = 0; i < list.length; i++) {
	    	if (list[i].getAttribute("class") == "recipe_list cooked") {  //Find each recipe_list element that has the class 'cooked'
	    		list[i].style.display = "block";
	    	} else {
	    		list[i].style.display = "none";
	    	}
    	}  //End of for

    } else if (document.getElementById("uncooked").checked) {
    	for (i = 0; i < list.length; i++) {
	    	if (list[i].getAttribute("class") == "recipe_list cooked") {
	    		list[i].style.display = "none";
	    	} else {
	    		list[i].style.display = "block";
	    	}
    	}  //End of for    
    }  //End of if/else

}  //End of cooked()

//Start of filter by hearts, rupees, type
heartFilter(allRecipes);
rupeeFilter(allRecipes);
typeFilter(allRecipes);


//Filters by hearts 0.25-28
function heartFilter(allRecipes){
//Displays value of hearts in filter slider
	var slider = document.querySelector("#heartRange");
	var output = document.querySelector("#heartValue");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
		//Grab the min and max heart data
	for (i = 0; i < allRecipes.length; i++) {
		var min = allRecipes[i].minHeartsRestored;
		var max = allRecipes[i].maxHeartsRestored;
		var list = document.getElementsByClassName("recipe_list");
		var select = Number(output.textContent);

		//Get the value of hearts from input slider, and check if it's within or equal to the min/max hearts
		if (min <= select && select <= max || select <= min || min == "Full") {
		//Display only the recipe_list results that match
			list[i].style.display = "block";
		} else {
			list[i].style.display = "none";
		}
	}  //End of for loop

	}


}  //End of heartFilter()

//Filters by rupees 2 - 490
function rupeeFilter(allRecipes) {
//Displays value of rupees in filter slider
	var slider = document.querySelector("#rupeeRange");
	var output = document.querySelector("#rupeeValue");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
	

	//Grab the min and max rupees data
	for (i = 0; i < allRecipes.length; i++) {
		var min = allRecipes[i].minSellingPrice;
		var max = allRecipes[i].maxSellingPrice;
		var list = document.getElementsByClassName("recipe_list");
		var select = Number(output.textContent);

		//Get the value of rupees from input slider, and check if it's within or equal to the min/max rupees
		if (min <= select && select <= max || select <= min) {
		//Display only the recipe_list results that match
			list[i].style.display = "block";
		} else {
			list[i].style.display = "none";
		}
	}  //End of for loop
	}
}  //End of rupeeFilter()


//Filters by food type Meat Veggies Fish Dessert
//All things hidden if anything is checked
//


function typeFilter(allRecipes) {
	$("#meat, #veggies, #fish, #dessert").change(function(){
		var list = document.getElementsByClassName("recipe_list");
		for (i = 0; i < list.length; i++) {
			list[i].style.display = "none";
		}

		if ($("#meat, #veggies, #fish, #dessert").is(":checked")) {
			for (i = 0; i < allRecipes.length; i++) {
				var dish = allRecipes[i].dish;
				if (dish == "Meat" && $("#meat").is(":checked")) {
					list[i].style.display = "block";
				} else if (dish == "Veggies" && $("#veggies").is(":checked")) {
					list[i].style.display = "block";
				} else if (dish == "Fish" && $("#fish").is(":checked")) {
					list[i].style.display = "block";
				} else if(dish == "Dessert" && $("#dessert").is(":checked")) {
					list[i].style.display = "block";
				} 
			}
		} else if ($("#meat, #veggies, #fish, #dessert").not(":checked")) {
			for (i = 0; i < list.length; i++) {
				list[i].style.display = "block";
			}
		}
	});  //End of veggies filter

};  //End of typeFilter()


//Resolves conflict between all filters - find the result that is a combination of ALL these filters
//Apply cooked/uncooked filter, then heart filter on the resulting cooked/uncooked filter, then rupee filter on the resulting heart filters, then type filter on the resulting rupee filter
//Run filters based on what's displayed, if another filter is already on
//Do a check and see if the all recipes are displayed. If so, then run a 'clean' filter. If not, then run filter on what's still displayed. 
//Do a check to see if all filters are at their defaults - 'all' for cooked, '0.25' for hearts, '2' for rupees, not checked for all types. If all these conditions are true, run a 'clean' filter. Otherwise run the filter on what's still displayed.

});  //End of document.ready