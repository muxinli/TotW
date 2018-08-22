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
}

    $("#swipe").swipe({  //Opens the menu sidebar
      swipeStatus:function(event, phase, direction, distance, duration, fingers)
          {
              if (phase=="move" && direction =="right") {
                   $("#swipe").addClass("open-sidebar");
                   $(".menu_icon").delay(150).queue(function (next) {
                    $(this).css("visibility", "hidden");
                    next();
                  });
                   return false;
              }
              if (phase=="move" && direction =="left") {
                  $("#swipe").removeClass("open-sidebar");
                  $(".menu_icon").delay(300).queue(function (next) {
                    $(this).css("visibility", "visible");
                    next();
                  });
                  return false;
              }
          }
    });

    $(".menu_icon").on("click", function() {
      $("#swipe").addClass("open-sidebar");
      $(".menu_icon").delay(150).queue(function (next) {
        $(this).css("visibility", "hidden");
        next();
      });
    });
 
    $(".menu_recipes").click(function(){  //Displays recipes section when menu is clicked
      $("#recipes").css("display", "block");      
      if(window.innerWidth >= 1280) {
          document.getElementById("badges").style.display = "block";
      } else {
          $("#badges").css("display", "none");
      }
      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
    });

    $(".menu_badges").click(function(){  //Displays badges section when badges menu is clicked
      $("#recipes").css("display", "none");
      $("#badges").css("display", "block");
      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "none");
    });

    $(".menu_about").click(function(){  //Displays about section when menu option is clicked
      $("#recipes").css("display", "none");
      $("#badges").css("display", "none");
      $("#createdBy, #Nintendo, #credits, #thanks").css("display", "block");
    });

    document.body.onresize = function(){  //Hides or displays badges when browser is resized
      if((window.innerWidth < 1280 && $("#recipes").css("display") == "block") || $("#createdBy, #Nintendo, #credits, #thanks").css("display") == "block") {  //Display badges on the right if browser size is at least 1280px
          document.getElementById("badges").style.display = "none";
      } else {
          document.getElementById("badges").style.display = "block";
      }
    }
});
