$( document ).ready(function() {
  
  $("#swipe").swipe({  //Opens the menu sidebar with swipe
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

  $(".menu_icon").on("click", function() {  //Opens menu sidebar when menu icon is clicked
    $("#swipe").addClass("open-sidebar");
    $(".menu_icon").delay(150).queue(function (next) {
      $(this).css("visibility", "hidden");
      next();
    });
  });

  document.body.onresize = function(){  //Hides or displays badges when browser is resized
    if((window.innerWidth < 1280 && $("#recipes").css("display") == "block") || $("#createdBy, #Nintendo, #credits, #thanks").css("display") == "block") {  //Display badges on the right if browser size is at least 1280px
        document.getElementById("badges").style.display = "none";
    } else {
        document.getElementById("badges").style.display = "block";
    }
  }
});
