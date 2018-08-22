$( document ).ready(function() {
	function updateUrl (page, url) {  //Updates URL without reloading
	      if (typeof (history.pushState) != "undefined") {
	        var obj = { Page: page, Url: url };
	        history.pushState(obj, obj.Page, obj.Url);
	      } else {  //Alerts if browser is not HTML5 compatible
	        alert("This browser does not support HTML5. Please use the latest version of Chrome.");
	      }
	    }

    $(function () {  //Changes URL when menu is clicked
        $(".menu_recipes").click(function () {
            updateUrl('Page1', '/recipes.htm');
        });
        $(".menu_badges").click(function () {
            updateUrl('Page2', '/badges.htm');
        });
        $(".menu_about").click(function () {
            updateUrl('Page3', '/about.htm');
        });
    });

    $(window).on('hashchange', function() {  //Runs render() whenever the URL changes (detects with hashchange). 
    	render(decodeURI(window.location.search));  //Runs render() on the current URL. Use decodeURI to get a valid hash without special characters; needed for browser compatibility.
    });

    function render(url) {
	    if (window.location.search == "recipes#") {  //Displays recipes section at recipes url
	      $("#recipes").css("display", "block");
	      if(window.innerWidth >= 1280) {
	          document.getElementById("badges").style.display = "block";
	      } else {
	          $("#badges").css("display", "none");
	      }
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    };

	    if (window.location.search == "badges#") {  //Displays badges section at badges url
	      $("#recipes").css("display", "none");
	      $("#badges").css("display", "block");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    };

	    if (window.location.search == "about#") {  //Displays about section at about url
	      $("#badges").css("display", "none");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "block");
	    };
    }

});