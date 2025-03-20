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

// const ol = document.querySelector("ol")
const ol = select('ol');

// document.addEventListener('DOMContentLoaded', displayItems);
listen(document, 'DOMContentLoaded', displayItems);

function displayItems() {
	shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
	// const li = document.createElement('li');
	const li = createAnElement('li');

	// li.innerText = item
	addText(li, item);

	// ol.appendChild(li)
	appendChild(ol, li);

	// li.addEventListener('click', () => toggleChecked(li));
	listen(li, 'click', () => toggleChecked(li));
}

function toggleChecked(li) {
	li.classList.toggle('checked');
}
