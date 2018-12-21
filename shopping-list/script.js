// Declaration of DOM Selectors
var button = document.getElementById("enter");
var buttonsDelete = document.querySelectorAll("button.delete")
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

// function of determining length of input field
function inputLength() {
	return input.value.length;
}

// function to create a new List Item
function createListElement() {
	var li = document.createElement("li"); // declares and creates a new li element
	li.addEventListener("click", toggleAfterClick) // immediately adds an event listener and a callback function of toggleAfterClick
		function toggleAfterClick() { // function to toggle .done style class
		li.classList.toggle("done");
		}
	var btn = document.createElement("button"); // declares and creates a new button element
	btn.addEventListener("click", deleteItem) // immediately adds an event listener and a callback function of deleteItem
		function deleteItem() { // function to remove List Item 
			btn.parentElement.remove();
		}
	var t = document.createTextNode("Delete"); // declares and creates a new text node, i.e. the delete wording within the button
	var spacing = document.createTextNode(" "); // declares and creates a  spacing between end of string and button
	li.appendChild(document.createTextNode(input.value)); //append (add) input field text into li element
	li.appendChild(spacing); // append a spacing at the end of the string which is within the li element
	btn.appendChild(t); // append (add) the "Delete" string within the button element
	li.appendChild(btn); // append button to the end of li element + spacing
	ul.appendChild(li); // append li + spacing + button altogther to the end of the ul element
	input.value = ""; // reset input text field
}

// function to create new list element by clicking the enter button
function addListAfterClick() { 
	if (inputLength() > 0) {
		createListElement();
	}
}

// function to create new list element by pressing the enter button
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick) // add event listener to listen for click on the enter button and a callback function of addListAfterClick
	
input.addEventListener("keypress", addListAfterKeypress) // add event listener to listen for any keypress and a callbcak function of addListAfterKeypress

lis.forEach(function(li) {
	li.addEventListener("click", toggleAfterClick) // assign event listener to each of the li element and a callback function of toggleAfterClick
	function toggleAfterClick() {
	li.classList.toggle("done"); // function to toggle .done style class
	}
})

buttonsDelete.forEach(function(btn){
	btn.addEventListener("click", deleteItem) // assign event listener to each of the Delete buttons and a callback function of deleteItem
	function deleteItem() { 
		btn.parentElement.remove(); // function to remove List Item 
	}
})