$( document ).ready(function() {
	window.onload = function() {
      document.getElementById("badges").style.display = "none";
      document.querySelector("#createdBy").style.display = "none";
      document.querySelector("#Nintendo").style.display = "none";
      document.querySelector("#credits").style.display = "none";
      document.querySelector("#thanks").style.display = "none";

      if(window.innerWidth >= 1280) {  //Display badges on the right if browser size is at least 1280px
          document.getElementById("badges").style.display = "block";
      }

      window.location.hash = "#";  //Sets url to home page "/#"
	}


	// function updateUrl (url) {  //Updates URL without reloading
	//       if (typeof (history.pushState) != "undefined") {
	//         var obj = { Url: url };
	//         history.pushState(obj, obj.Page, obj.Url);
	//       } else {  //Alerts if browser is not HTML5 compatible
	//         alert("This browser does not support HTML5. Please use the latest version of Chrome.");
	//       }
	//     }

    $(function () {  //Changes URL when menu is clicked
        $(".menu_recipes").click(function () {
        	window.location.hash = "#recipes";
            // updateUrl('#recipes');
        });
        $(".menu_badges").click(function () {
        	window.location.hash = "#badges";
            // updateUrl('#badges');
        });
        $(".menu_about").click(function () {
         	window.location.hash = "#about";
           // updateUrl('#about');
        });
    });

    $(window).on('hashchange', function() {  //Runs render() whenever the URL changes (detects with hashchange). 
    	render(decodeURI(window.location.hash));  //Runs render() on the current URL. Use decodeURI to get a valid hash without special characters; needed for browser compatibility.
    });

    function render(url) {
	    if (window.location.hash == "#recipes") {  //Displays recipes section at recipes url
	      $("#recipes").css("display", "block");
	      if(window.innerWidth >= 1280) {
	          document.getElementById("badges").style.display = "block";
	      } else {
	          $("#badges").css("display", "none");
	      }
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    };

	    if (window.location.hash == "#badges") {  //Displays badges section at badges url
	      $("#recipes").css("display", "none");
	      $("#badges").css("display", "block");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
	    };

	    if (window.location.hash == "#about") {  //Displays about section at about url
	      $("#badges").css("display", "none");
	      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "block");
	    };
    }

});
