//Whitelist or disable ad blockers if recipe_list div is not visible -->

$(document).ready(function() {
	if (document.querySelector('.recipe_list') == null) {
		alert("If content does not load, please whitelist this site or disable your ad blocker.");
	}

});