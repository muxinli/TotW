$( document ).ready(function() {

document.getElementById("btn").addEventListener("click", function() {  //Confirmation checkbox when clear button is clicked on. Will clear localStorage and refresh if confirmed.
    var txt;
    if (confirm("Hit OK to reset progress (page will reload).")) {
        localStorage.clear();
        txt = "Resetting progress. What's for dinner?";
        setTimeout(function() { location.reload(); }, 500);
    } else {
        txt = "Reset canceled. Happy cooking!";
    }
    document.getElementById("text").innerHTML = txt;
});

});
