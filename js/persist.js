//Keeps checkbox states after page refresh. Concepts: Objects, adding/referencing to properties in objects, localStorage, adding new properties, checkbox properties, jQuery selectors

$( document ).ready(function() {
	var values = {};  //Create an empty object called 'values', which will get properties later on. Keep it global as it will be used in different functions.
	var $checkbox = $('.container :checkbox');
	$checkbox.attr('id', function(i) {  //Adds a unique id to all checkbox elements (i is the counter).
		return 'option'+(i+1);  //Output of function becomes the value of 'id' attribute above e.g. option1, option2, etc. for all checkbox elements
	});

	$checkbox.change(function(){  //Detect if checkbox changes, then runs the code. Without this, nothing happens.
		$checkbox.each(function(){  //Go through each checkbox element
			values[this.id] = this.checked;  //Populates the 'values' object, using obj.property = propertyvalue; technique for adding properties and their values.
			//JavaScript 'this' just selects whatever it's in; the object or 'owner' of the function. Used here, 'this' selected a checkbox - on the first run of $(':checkbox').each(), 'this' selected the first checkbox. On the next run of .each(), 'this' selected the second checkbox, and so on.
			//< values[this.id] /> Create a property using the id of each checkbox. Manually, you can write values.option1 and then values.option2 etc. to create each property, but that's slow so we're using 'this.id' to get the id of the currently selected checkbox. Since you're using an expression 'this.id', you can't use dot notation for creating a property; you'll need to use brackets (from W3 JS Properties lesson, objectName[expression] ex: x = "age"; person[x] instead of person.age).
			//< = this.checked /> Runs a 'is this checked?' test on the selected checkbox, returns true or false. Output of test becomes the property value and gets added to the 'values' object. 
		});  //End of .each()

		localStorage.setItem('checker', JSON.stringify(values));  //Stores the populated values object into a localStorage entry called 'checker'. Must convert object into a string.
	});  //End of .change()

	$.each(JSON.parse(localStorage.getItem('checker')), function(key,value){  //Run through each key:value pair in localStorage, and use the stored values to add the property 'checked', true or false to each checkbox element. 
		$('#' + key).prop('checked', value);  //Select #option1, assign checked value true or false
	//What the localStorage looks like (ex: {"option1":true,"option2":false,"option3":false})
	});  //End of assign stored value of checkbox
	
	function cooked(){  //Please don't delete. It adds the class 'cooked', which gets used by filter.js and badges.js 
		//If it is checked, then assign a class 'cooked' to the matching recipe_list. 
		//If it is not checked, leave the matching recipe_list alone.
		$checkbox.each(function(){
		var viewId = $(this).closest('.recipe_view').attr('id');  //Get the id of recipe_view, the checkbox's great grandparent
		var list = $(".recipe_list");  //Get all the recipe_lists

		if (this.checked) {  //If it is checked
			list.each(function() {  //Go through the id of every recipe_list, and see if there's a match
				var listId = this.id;  //Get the id of the current recipe_list in loop to compare
				if (viewId == listId) {  //If the ids match, assign a flag to the current recipe_list
					$(this).addClass("cooked");  //Add the class 'cooked' to that recipe_list
				}
			});  //End of each()

		} else {  //If it is not checked, set the recipe_list class to just recipe_list
			list.each(function() {  //Go through the id of every recipe_list, and see if there's a match
				var listId = this.id;  //Get the id of the current recipe_list in loop to compare
				if (viewId == listId) {  //If the ids match, assign a flag to the current recipe_list
					$(this).removeClass("cooked");
					//Add the class 'cooked' to that recipe_list
				}
			});  //End of each()

		} //End of if/else
		});  //End of .each()

	}

	cooked();
	
	$checkbox.change(function() {
		cooked();
	});  //End of .change()

});