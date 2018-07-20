//Hides all recipe view cards, and only shows one when its recipe list is clicked on.
$( document ).ready(function() {

	var list = document.querySelectorAll(".recipe_list");
	var view = document.querySelectorAll(".recipe_view");

$(".recipe_list").click(function() {  //Shows correct view card when recipe is clicked on from the list
	var listId = $(this).attr("id");  //Store the id value of the recipe list element clicked on
	document.getElementById("overlay2").style.display = "block";
	for (var x = 0; x < view.length; x++) {  //Go through each view card to find the matching card to display
		var viewId = $(".recipe_view")[x].id;  //Get the id of the view card in list
		if (listId == viewId) {  //Display the view card if its id matches the id of the recipe list that was clicked on
			view[x].className = "recipe_view show";
		} else {
			continue;
		}
	}
});

//Hides view card when 'x' is clicked
$(".exit").click(function() {
	document.getElementById("overlay").style.display = "none";
    document.querySelector(".recipe_view.show").className = "recipe_view hide";
});

//Hides view card when clicking outside the box
$("#overlay2").click(function () {
	document.getElementById("overlay2").style.display = "none";
	document.querySelector(".recipe_view.show").className = "recipe_view hide";
});

});  //End of document ready