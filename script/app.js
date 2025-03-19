const shoppingList = ['Yeezy', 'Mrenda', 'Matumbo'];

//  Utility functions for DOM manipulation
function createAnElement(element) {
	return document.createElement(element);
}

function addText(element, text) {
	return (element.innerText = text);
}

function appendChild(parentElement, childElement) {
	return parentElement.appendChild(childElement);
}

function select(selector) {
	return document.querySelector(selector);
}

function listen(element, event, callback) {
	return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
	return element.setAttribute(attribute, content);
}

const ol = select('ol');

listen(document, 'DOMContentLoaded', displayItems);

function displayItems() {
	shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
	const li = createAnElement('li');
	addText(li, item);
	appendChild(ol, li);

	listen(li, 'click', toggleChecked);

	function toggleChecked() {
		li.classList.toggle('checked');
	}
}
