$( document ).ready(function() {

	// function updateUrl (page, url) {  //Updates URL without reloading
	//       if (typeof (history.pushState) != "undefined") {
	//         var obj = { Page: page, Url: url };
	//         history.pushState(obj, obj.Page, obj.Url);
	//       } else {  //Alerts if browser is not HTML5 compatible
	//         alert("This browser does not support HTML5. Please use the latest version of Chrome.");
	//       }
	//     }

	//    $(function () {  //Changes URL when menu is clicked
	//        $(".menu_recipes").click(function () {
	//            updateUrl('Page1', 'recipes');
	//        });
	//        $(".menu_badges").click(function () {
	//            updateUrl('Page2', 'badges');
	//        });
	//        $(".menu_about").click(function () {
	//            updateUrl('Page3', 'about');
	//        });
	//    });

	$(".menu_recipes").click(function () {  //Updates URL without reload upon menu item click
		window.location.hash = 'recipes';
	});
	$(".menu_badges").click(function () {
		window.location.hash = 'badges';
	});
	$(".menu_about").click(function () {
		window.location.hash = 'about';
	});

	window.onload = load(url);  //Triggers load(url) on first load

	window.onhashchange = load(url);  //Triggers load(url) whenever the URL changes

    function load(url) {  //Determine which content displays based on URL
    	var url = window.location.hash;
    	console.log(url);
	    if (url == "") {
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