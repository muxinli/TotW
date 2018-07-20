//Search bar - filters results automatically while typing
$( document ).ready(function() {

document.getElementById("myInput").addEventListener("keyup", search);

function search() {
    var input, filter, list;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();  //Removes case sensitivity by turning value of search into uppercase 
    list = document.getElementsByClassName("recipe_list");

    for (i = 0; i < list.length; i++) {  //Go through each recipe list
        var name = list[i].getElementsByTagName("h2")[0];  //Gets the first 'h2' element of the current list in loop. Without [0] it's not specific enough to select?
        var result = name.innerHTML.toUpperCase();  //Convert string inside h2 into upper case for case-insensitive search
        if (result.indexOf(filter) > -1) {  //Checks if the search matches a value in the current list (is > -1, meaning a search has occurred). 
            list[i].style.display = "";  //Display the list item using the default settings. By end of for loop, multiple list items may be displayed.
        } else {  //If no matches
            list[i].style.display = "none";  //Displays nothing
        }
    }
}

});  //End of document.ready