// Creates all HTML tags, classes, text content, images, and pulls data from the JSON files. Anything that pulls from JSON goes here.
// $( document ).ready(function() {  

//Adding document.ready in this file may override the code for showing and hiding detailed views. That code depends on this code to run first. Making this code file depend on other documents to load first before running will run the code out of order.

var requestURL = 'https://muxinli.github.io/recipes%20(ML).json';  //Request recipe JSON file from URL
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

// var getURL = 'https://muxinli.github.io/descriptions.json';  //Request descriptions JSON file from URL
// var get = new XMLHttpRequest();
// get.open('GET', getURL);
// get.responseType = 'text';
// get.send();

request.onload = function() {  //Check if request has loaded, then parse text into JS Object for later use.
  var recipes = JSON.parse(request.response);
  var allRecipes = recipes.data;
  console.log("Testing recipes JSON " + allRecipes[1].item);  //Can remove, just checks that JSON was loaded
  list(allRecipes);
  viewCard(allRecipes);
  imgSrc(allRecipes);
  hearts(allRecipes);
  addEffect(allRecipes, effectRecipes);
  rupees(allRecipes);
  ingredients(allRecipes);
  notes(allRecipes);
  console.log("Testing descriptions JSON " + descriptions[1].Description);  //Optional; checks JSON was loaded
  describing(allRecipes, descriptions);  //Runs function for adding descriptions to each recipe

  // get.onload = function() {  //Check if request has loaded, then parse text into JS Object for later use.
  //   // var descriptions = JSON.parse(get.response);
  //   console.log("Testing descriptions JSON " + descriptions[1].Description);  //Optional; checks JSON was loaded
  //   describing(allRecipes, descriptions);  //Runs function for adding descriptions to each recipe
  // }
}


function list(allRecipes) {  //Dynamically creates HTML tags for the recipe list.
  for (var i = 0; i < allRecipes.length; i++) {  //Creates and adds a new div with an img and h2 tag for each recipe, along with their classes.
    var list = document.querySelector("#main_list");  //Select body
    var divCreate = document.createElement("div");  //Create div tag for each recipe
    list.appendChild(divCreate);  //Add to body
    $("#main_list div").addClass("recipe_list remove");  //Add recipe_list class to each div. The class 'remove' is used later to get our querySelector to select each div one at a time, then move to the next div.	

  }

  
  for (var i = 0; i < allRecipes.length; i++) {  //Creates recipe list
    var divList = document.querySelector('.remove');  //Store value to select only the first div with class 'remove' as that's just how querySelector works.
    
    var imgDiv = document.createElement("div"); //Image div for recipe list
    divList.appendChild(imgDiv);  //Add img div to divView
    imgDiv.setAttribute("class", "d-inline-block imgDiv");  //Set the class attribute to img div container
        
    var imgTag = document.createElement("img");  //Image tag for recipe list
    imgDiv.appendChild(imgTag);  //Add img tag to divList
    $(".recipe_list img").addClass("imgList d-inline-block");  //Add classes to all img tags in divList
    $(".recipe_list img").attr("src", "img");  //Sets src to "img" - sets up a workaround in order to load a different img src for each tag. Other methods just populate the first img tag, or assigns the last img file path in allRecipes to all img src attributes.

//     var h2Div = document.createElement("div");  //Title div for recipe list
//     divList.appendChild(h2Div);
//     h2Div.setAttribute("class", "d-inline-block h2Div");

    var h2 = document.createElement("h2");  //Title for recipe list
    divList.appendChild(h2);
    h2.setAttribute("class", "h2List d-inline-block");  //Add class to h2 for styling
    h2.textContent = allRecipes[i].item;  //Sets h2 text to the allRecipes item
    
    $(".remove").attr("id", allRecipes[i].item);  //Adds a unique ID to each recipe list div, using the name of the recipe. Need IDs later for displaying the right recipe card content based on the list item selected.

    $(divList).removeClass("remove");  //Drops the class 'remove' from the current div so that the loop can continue with the next div. querySelector will again choose the first element with the class 'remove,' which is now the next div.

  }

  imgSrc(allRecipes);  //Runs function imgSrc on allRecipes to return file path value for img src attribute

}

function viewCard(allRecipes) {  //Creates recipe cards
  for (var i = 0; i < allRecipes.length; i++) {  //Creates divs for recipe card
    var card = document.querySelector("#recipe_cards");  //Select body
    var divCreate = document.createElement("div");  //Create div for each recipe
    card.appendChild(divCreate);  //Add div to body
    divCreate.setAttribute("class", "recipe_view remove hide");  //Add class to div; 'temp' is used later for applying changes to each element instead of applying all changes to just the last element. Putting 'hide' here keeps hidden elements from briefly flashing on the screen before being hidden.
  }

  for (var i = 0; i < allRecipes.length; i++) {  //Creates and adds all elements to recipe cards
    var divView = document.querySelector('.remove');  //Variable to temporarily store div with id 'recipe_view'
    
    //Cooked checkbox
    var checkDiv = document.createElement("div");  //Create new div for checkbox
    divView.appendChild(checkDiv);  //Add div to detailed views
    checkDiv.setAttribute("class", "checkDiv");    

    var checkLabel = document.createElement("label"); //Create new checkbox label container
    checkDiv.appendChild(checkLabel); //Add checkbox label to divView
    checkLabel.setAttribute("class", "container"); //Set label class to 'container'
    checkLabel.textContent = "Cooked";

    var checkBox = document.createElement("input"); //Create input tags
    checkLabel.appendChild(checkBox); //Add input tag to label container
    checkBox.setAttribute("type", "checkbox"); //Set input type to checkbox

    var checkMark = document.createElement("span"); //Create span tags for checkmarks
    checkLabel.appendChild(checkMark); //Add span to label container
    checkMark.setAttribute("class", "checkmark"); //Add class 'checkmark'

    var close = document.createElement("div");
    divView.appendChild(close);
    close.setAttribute("class", "exit");

    var x = document.createElement("span");
    close.appendChild(x);
    x.textContent = "x";
    x.setAttribute("id", "exit");

    //Image and title of recipe
    var title = document.createElement("div");
    divView.appendChild(title);
    title.setAttribute("class", "title");

    var imgDiv = document.createElement("div"); //Create new img div container
    title.appendChild(imgDiv);  //Add img div to divView
    imgDiv.setAttribute("class", "d-inline-block img");  //Set the class attribute to img div container

    var imgTag = document.createElement("img");  //Create new img tag
    imgDiv.appendChild(imgTag);  //Add img tag to img div
    imgTag.setAttribute("class", "view");  //Add classes to all img tags in divList
    $(".view").attr("src", "img");  //Sets src to "img" - sets up a workaround in order to load a different img src for each tag. Other methods just populate the first img tag, or assigns the last img file path in allRecipes to all img src attributes.

    var h2 = document.createElement("h2");  //Create a new h2 element for the div
    title.appendChild(h2);  //Add h2 to the div
    h2.setAttribute("class", "d-inline-block titleTxt");  //Add class to h2 for styling
    h2.textContent = allRecipes[i].item;  //Sets h2 text to the allRecipes item

    //Stats
    var statsDiv = document.createElement("div");
    divView.appendChild(statsDiv);
    statsDiv.setAttribute("class", "statsDiv container-fluid");

    var flex = document.createElement("div");
    statsDiv.appendChild(flex);

    //Heart values
    var heart = document.createElement("div");
    flex.appendChild(heart);
    heart.setAttribute("class", "d-inline-block heart");

    var imgHeart = document.createElement("img");
    heart.appendChild(imgHeart);
    imgHeart.setAttribute("class", "d-inline-block heartIcon");
    $(".heartIcon").attr("src", "static/heart.png");

    var txtHeart = document.createElement("p");
    heart.appendChild(txtHeart);
    txtHeart.setAttribute("class", "d-inline-block heartTxt tmpheartTxt");

    //Rupees
    var rupees = document.createElement("div");
    flex.appendChild(rupees);
    rupees.setAttribute("class", "d-inline-block rupees");

    var imgRupees = document.createElement("img");
    rupees.appendChild(imgRupees);
    imgRupees.setAttribute("class", "d-inline-block rupeeIcon");
    $(".rupeeIcon").attr("src", "static/rupee.png");

    var txtRupees = document.createElement("p");
    rupees.appendChild(txtRupees);
    txtRupees.setAttribute("class", "d-inline-block rupeesTxt tmprupeesTxt");
    
    //Effects
    var effects = document.createElement("div");
    flex.appendChild(effects);
    effects.setAttribute("class", "d-inline-block effects");

    var imgEffects = document.createElement("img");
    effects.appendChild(imgEffects);
    imgEffects.setAttribute("class", "d-inline-block effectIcon");
    $(imgEffects).attr("src", "null");

    var txtEffects = document.createElement("p");
    effects.appendChild(txtEffects);
    txtEffects.setAttribute("class", "d-inline-block effectTxt tmpeffectTxt");


    //Ingredients
    var ingredients = document.createElement("div");
    divView.appendChild(ingredients);
    ingredients.setAttribute("class", "ingredients");

    // var hdrIngredients = document.createElement("h3");
    // ingredients.appendChild(hdrIngredients);
    // hdrIngredients.setAttribute("class", "d-inline-block ingredientsHdr");
    // hdrIngredients.textContent = "Ingredients: ";
    
    //Images of ingredients?    
//     var imgDiv = document.createElement("div");
//     ingredients.appendChild(imgDiv);
//     imgDiv.setAttribute("class", "ingImgDiv");

//     var imgIng = document.createElement("img");
//     imgDiv.appendChild(imgIng);
//     imgIng.setAttribute("class", "ingImg tmpingImg");

    var txtDiv = document.createElement("div");
    ingredients.appendChild(txtDiv);
    txtDiv.setAttribute("class", "ingTxtDiv");

    var txtIngredients = document.createElement("p");
    txtDiv.appendChild(txtIngredients);
    txtIngredients.setAttribute("class", "ingredientsTxt tmpingredientsTxt");

    //Description
    var description = document.createElement("div");
    divView.appendChild(description);
    description.setAttribute("class", "description");

    var txtDescription = document.createElement("p");
    description.appendChild(txtDescription);
    txtDescription.setAttribute("class", "descTxt tmpdescTxt");

    //Notes about recipe
    var notes = document.createElement("div");
    divView.appendChild(notes);
    notes.setAttribute("class", "notes");

    var hdrNotes = document.createElement("h5");
    notes.appendChild(hdrNotes);
    hdrNotes.setAttribute("class", "d-inline-block notesHdr");
    hdrNotes.textContent = "Notes: ";

    var txtNotes = document.createElement("p");
    notes.appendChild(txtNotes);
    txtNotes.setAttribute("class", "notesTxt tmpnotesTxt");

    $(".remove").attr("id", allRecipes[i].item);  //Adds a unique ID to each recipe list div, using the name of the recipe. Need IDs later for displaying the right recipe card content based on the list item selected.

    $(divView).removeClass("remove");  //Drops the class 'remove' from the current div so that the loop can continue with the next div. querySelector will again choose the first element with the class 'remove,' which is now the next div.

  }

  imgSrc(allRecipes);  //Runs function imgSrc on allRecipes to return file path value for img src attribute

}

function imgSrc(allRecipes) {  //Create the img file path using recipe name, and sets img src value to the img file path
  for (var i = 0; i < allRecipes.length; i++) {
    allRecipes[i].img = "static/" + allRecipes[i].item + ".png";
    var imgSrc = document.querySelector('img[src="img"]');
    $(imgSrc).attr("src", allRecipes[i].img);
  }
}



function hearts(allRecipes) {  //Pulls hearts data from JSON and adds to HTML
  for (var i = 0; i < allRecipes.length; i++) {
    var heart = document.querySelector('.tmpheartTxt');
    heart.textContent = "x" + allRecipes[i].minHeartsRestored + "-" + allRecipes[i].maxHeartsRestored;
    $(heart).removeClass("tmpheartTxt");
  }
}

function addEffect(allRecipes, effectRecipes) {  //Checks if recipe has a default effect, and adds effect property, duration, and img source.
  for (var i = 0; i < allRecipes.length; i++) {  //Checks if a recipe is in the array of effectRecipes shortlisted for having a default effect.
    
    for (var x = 0; x < effectRecipes.length; x++) {  //Check every recipe against shortlist of effect default recipes
      if (allRecipes[i].item == effectRecipes[x].name) {  //If true, then add the effect and effect duration to allRecipes. If false (not in shortlist), then just add effect = "N/A" to it.
        allRecipes[i].effect = effectRecipes[x].effect;
        allRecipes[i].effectDuration = effectRecipes[x].effectDuration;
      } else {
        continue;
      }
    }

    if (allRecipes[i].effectDuration === undefined) {
      allRecipes[i].effectDuration = "No effect";
    }
  }

  for (var i = 0; i < allRecipes.length; i++) {  //Add effect duration text
    var txt = document.querySelector('.tmpeffectTxt');
    txt.textContent = allRecipes[i].effectDuration;
    $(txt).removeClass("tmpeffectTxt");
  }

  for (var i = 0; i < allRecipes.length; i++) {  //Add file path to effects img src attribute
    var img = document.querySelector('img[src="null"]');

    if (allRecipes[i].effect == "Electro") {  //Checks what effect a recipe has, and assigns the correct img to represent it
      $(img).attr("src", "static/electro.png");
    } else if (allRecipes[i].effect == "Energizing") {
      $(img).attr("src", "static/energy.png");
    } else if (allRecipes[i].effect == "Hearty") {
      $(img).attr("src", "static/hearty.png");
    } else if (allRecipes[i].effect == "Enduring") {
      $(img).attr("src", "static/enduring.png");
    } else if (allRecipes[i].effect == "Spicy") {
      $(img).attr("src", "static/spicy.png");
    } else if (allRecipes[i].effect == "Chilly") {
      $(img).attr("src", "static/chilly.png");
    } else if (allRecipes[i].effect == "Hasty") {
      $(img).attr("src", "static/hasty.png");
    } else if (allRecipes[i].effect == "Sneaky") {
      $(img).attr("src", "static/sneaky.png");
    } else if (allRecipes[i].effect == "Mighty") {
      $(img).attr("src", "static/mighty.png");
    } else if (allRecipes[i].effect == "Tough") {
      $(img).attr("src", "static/tough.png");
    } else {
      $(img).removeAttr("src");
    }
  }

}

function rupees(allRecipes) {  //Pulls rupees min and max from JSON and adds to HTML
  for (var i = 0; i < allRecipes.length; i++) {
    var rupees = document.querySelector('.tmprupeesTxt');
    rupees.textContent = allRecipes[i].minSellingPrice + "-" + allRecipes[i].maxSellingPrice;
    $(rupees).removeClass("tmprupeesTxt");
  }
}

function describing(allRecipes, descriptions) {  //Pulls descriptions from JSON and adds to HTML
  for (var i = 0; i < allRecipes.length; i++) {  //Go through each recipe
    
    for (var x = 0; x < allRecipes.length; x++) {  //For each recipe, check if recipe name matches any of the names in the descriptions array
      if (allRecipes[i].item == descriptions[x].Item) {
        allRecipes[i].description = descriptions[x].Description;
      } else { continue; }
      
      if (allRecipes[i].description === undefined) {  //If there's no match, then set description to N/A
        allRecipes[i].description = "N/A";
      }
    }

  
  var desc = document.querySelector(".tmpdescTxt"); //Code section updates HTML with the appropriate descriptions
  desc.textContent = allRecipes[i].description;
  $(desc).removeClass("tmpdescTxt");

  }
}

function ingredients(allRecipes) {  //Pulls requirements/recipe from JSON and adds to HTML as a column
  for (var i = 0; i < allRecipes.length; i++) {  //Runs commands for each recipe
    var ingredients = document.querySelector('.tmpingredientsTxt');  //Uses temporary class to get querySelector to go down the list one by one
    var y = "";

    for (var x = 0; x < allRecipes[i].requirements.length; x++) {  //Adds requirements to each recipe and assigns new line break to make it into a column
      y = allRecipes[i].requirements.join("<br>");
    }
    
    ingredients.innerHTML = y;  //HTML displayed as a column of text
    $(ingredients).removeClass("tmpingredientsTxt");  //Removes temporary class once code is done on that recipe
  }
}

function notes(allRecipes) {  //Pulls footNotes text from JSON and adds to HTML as a column
  for (var i = 0; i < allRecipes.length; i++) {
    var notes = document.querySelector('.tmpnotesTxt');  //Uses temporary class to run querySelector through each tag
    var y = "";

    for (var x = 0; x < allRecipes[i].footNotes.length; x++) {  //Add requirements and create line breaks to make a column
      var txt = allRecipes[i].footNotes;
      y += txt[x] + "." + "<br>";
    }

    notes.innerHTML = y;  //Displayed as a column of text
    $(notes).removeClass("tmpnotesTxt");  //Removes temporary class
  }
}


// });  //End of document ready load
