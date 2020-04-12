// // DOM Events

// // To listen to a button if it has been pressed or not
// var buttn = document.getElementsByTagName('button')[0]; //Use the [] to access the first element since it is an aarray
// // 2 paramenters, what event we want and the function we want to do
// buttn.addEventListener("click", function() {
// 	console.log("Mouse clicked")
// });


// Code to add something to the shopping list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var delbutton = document.getElementsByClassName("delete");

//Functions
function inputLength() { //This can be needed in the future
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var buttn = document.createElement("button");
	buttn.innerHTML = "Delete"; // add text to button
	buttn.classList.add("delete"); //Attach list to new button
	li.appendChild(document.createTextNode(input.value)); //Create the li element and added the text with text node
	li.appendChild(document.createTextNode(" "));
	li.appendChild(buttn); //Add the button to the li item
	ul.appendChild(li);
	input.value = ""; //To clear the input bar, we attach an empty string
}

function addListAfterClick() {
	// Normally we would want to create an element
	if (inputLength() > 0) { //To avoid adding empty inputs
		createListElement();		
	}
}

function addListAfterKeypress(event) {
	// Normally we would want to create an element
	if (inputLength() > 0 && event.keyCode === 13) { //To avoid adding empty inputs
		createListElement();
	}
}

function strikeThrough(event) {
	if (event.target.tagName === "LI") { //Has to be in caps the tagname
        event.target.classList.toggle("done");
    }
}

function DeleteElementList(event) {
	if (event.target.className === "delete") { //Has to be in caps the tagname
        ul.removeChild(event.target.parentNode);
    }
}

//Imporrtant not to use the () after the function becuase it is a call back function

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); //using thr word event we pass the event informartion

ul.addEventListener("click", strikeThrough);

ul.addEventListener("click", DeleteElementList);