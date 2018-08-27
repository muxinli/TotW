$( document ).ready(function() {
	var menu = document.querySelectorAll(".menu_recipes, .menu_badges, .menu_about");

	for (var i = 0; i < menu.length; i++) {  //Add click event listener to each of the menu buttons
		menu[i].addEventListener('click', clickHandler, true);  
	}

	function clickHandler(event) {  //Updates URL without reload upon menu item click
	   	var url = event.target.getAttribute('href').split('/').pop() || null;
   		load(url);  //Trigger function to display content based on url

		history.pushState(url, event.target.textContent, event.target.href);  //Updates URL address and stores it into browser history

   		return event.preventDefault();  //Prevents default actions, like adding a '#' at the end of URL
	};

	window.onload = load("");  //Loads home page
	
	window.addEventListener('popstate', function(event) {  //Allows for users to use browser navigation buttons to go back and forth between the content they've visited
      console.log('popstate fired!');  //Just a test that the popstate event listener is working
      load(event.state);  //The event.state here is the pushState command's 'url' in the clickHandler function
    });
    
	document.addEventListener('keydown', function(event) {
		if (event.which == '37') {
	    window.history.back();
		} else if (event.which == '39') {
		window.history.forward();
		} else if (event.which == '27') {
		    document.getElementById("overlay").style.display = "none";
		    document.getElementById("overlay2").style.display = "none";
		    document.getElementById("options").style.display = "none";
			document.querySelector(".recipe_view.show").className = "recipe_view hide";
		}
	});

    function load(url) {  //Determine which content displays based on URL
		if (url == "" || url == null) {  //Displays home page (recipes)
			document.getElementById("recipes").style.display = "block";
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
	          document.getElementById("badges").style.display = "block";  //Displays badges if screen size is large
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
	      $("#badges, #recipes").css("display", "none");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "block");
	    }
    }

});