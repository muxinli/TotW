$( document ).ready(function(){
	
document.getElementById("sidebar").addEventListener("click", function() {  //Add scroll event to just the about section
	if(document.querySelector("#createdBy").style.display == "block") {
		window.addEventListener("scroll", autoScroll);  //Add event listener to about section when scroll wheel happens
	} else {
		window.removeEventListener("scroll", autoScroll);
	}
});

document.getElementById("sidebar2").addEventListener("click", function() {  //Add scroll event to just the about section
	if(document.querySelector("#createdBy").style.display == "block") {
		window.addEventListener("scroll", autoScroll);  //Add event listener to about section when scroll wheel happens
	} else {
		window.removeEventListener("scroll", autoScroll);
	}
});

var prevScroll = 0,  //For detecting direction of scroll
	targetElement;  //Parameter for animated scroll function

function scrollThere(targetElement) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    60, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition

function autoScroll() {
	var createdBy = $("#createdBy"),
		nintendo = $("#Nintendo"),
		credits = $("#credits"),
		thanks = $("#thanks"),

		//Get the number of pixels from top for each div
		createdY = 0,
		nintendoY = Math.round(nintendo.offset().top),
		creditsY = Math.round(credits.offset().top),
		thanksY = Math.round(thanks.offset().top),
		
		bodyY = Math.abs(document.body.getBoundingClientRect().top);  //Gets top position of body while scrolling




	console.log("createdY: " + createdY + "  | nintendoY: " + nintendoY + "  | creditsY: " + creditsY + "  | thanksY: " + thanksY);
	console.log("bodyY: " + bodyY + " and prevScroll: " + prevScroll);

	if (bodyY < nintendoY && bodyY >= prevScroll) {  //Created by next
		scrollThere(nintendo);
	} else if (bodyY > nintendoY && bodyY < creditsY && bodyY >= prevScroll) {  //Nintendo down
		scrollThere(credits);
	} else if (bodyY > creditsY && bodyY < thanksY && bodyY >= prevScroll) {  //Credits next
		scrollThere(thanks);
	} else if (bodyY < nintendoY && bodyY > createdY && bodyY < prevScroll) {  
	//Nintendo previous
	  	$('html, body').stop().animate({ scrollTop: 0 }, // move window so target element is at top of window
	    60, // speed in milliseconds
	    'swing' // easing
	  	);
		// scrollThere(createdBy);
	} else if (bodyY < creditsY && bodyY > nintendoY && bodyY < prevScroll) {  //Credits previous
		scrollThere(nintendo);
	} else if (bodyY < thanksY && bodyY > creditsY && bodyY < prevScroll) {  //Thanks previous
		scrollThere(credits);
	} else if (bodyY == creditsY) {
		$('html, body').stop();
	} else if (bodyY == nintendoY) {
		$('html, body').stop();
	}
		prevScroll = bodyY;  //Setup prevScroll to detect next scroll direction

};
 

});