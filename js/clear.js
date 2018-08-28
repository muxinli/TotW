$( document ).ready(function() {

document.getElementById("btn").addEventListener("click", function() {  //Confirmation checkbox when clear button is clicked on. Will clear localStorage and refresh if confirmed.
    var txt;
    if (confirm("Hit OK to reset progress (will redirect to home page).")) {
        localStorage.clear();
        txt = "Resetting progress. What's for dinner?";
        setTimeout(function() { window.location.href = "https://shrouded-earth-77506.herokuapp.com"; }, 500);
    } else {
        txt = "Reset canceled. Happy cooking!";
    }
    document.getElementById("text").innerHTML = txt;
});

});
