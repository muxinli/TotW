$( document ).ready(function() {
 	var url = window.location.pathname;  //Gets the final part of the url... but it's not changing with changes to the url
 	console.log('url last is' + url);

	$(".menu_recipes").click(function () {  //Updates URL without reload upon menu item click... but appears with a hashtag
		history.pushState(null, null, '/recipes');
   		console.log("location is " + url);
   		load(url);  //Trigger function to display content based on url
	});
	$(".menu_badges").click(function () {
		history.pushState(null, null, '/badges');
		console.log("location is " + url);
   		load(url);
	});
	$(".menu_about").click(function () {
		history.pushState(null, null, '/about');
		console.log("location is " + url);
   		load(url);
	});

	window.onload = load(url);  //Triggers load(url) on first load
	
    
    function load(url) {  //Determine which content displays based on URL
	    if (url == "/") {  //If using location.pathname, use '/' for homepage
	    	document.getElementById("badges").style.display = "none";
	        document.querySelector("#createdBy").style.display = "none";
	        document.querySelector("#Nintendo").style.display = "none";
	        document.querySelector("#credits").style.display = "none";
	        document.querySelector("#thanks").style.display = "none";

	        if(window.innerWidth >= 1280) {  //Display badges on the right if browser size is at least 1280px
	            document.getElementById("badges").style.display = "block";
	        }
	    }

	    else if (url == "recipes") {  //Displays recipes section at recipes url
	      $("#recipes").css("display", "block");
	      if(window.innerWidth >= 1280) {
	          document.getElementById("badges").style.display = "block";
	      } else {
	          $("#badges").css("display", "none");
	      }
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    }

	    else if (url == "badges") {  //Displays badges section at badges url
	      $("#recipes").css("display", "none");
	      $("#badges").css("display", "block");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    }

	    else if (url == "about") {  //Displays about section at about url
	      $("#badges").css("display", "none");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "block");
	    }
    }

});