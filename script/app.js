const shoppingList = ['Ugali', 'Chicken', 'Froppy'];

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
	ol.innerHTML = '';
	shoppingList.forEach(createAListItem);
}

function createAListItem(item, index) {
	// const li = document.createElement('li');
	const li = createAnElement('li');

	// li.innerText = item
	addText(li, item);

	const button = createAnElement('button');
	addText(button, 'X');
	appendChild(li, button);

	// button.setAttribute('class', 'del');
	addAttribute(button, 'class', 'del');

	// listen(button, 'click', () => deleteSingleItem(index));

	listen(button, 'click', () => deleteSingleItem(li));

	// ol.appendChild(li)
	appendChild(ol, li);

	// li.addEventListener('click', () => toggleChecked(li));
	listen(li, 'click', () => toggleChecked(li));
}

/*
function deleteSingleItem(arrayIndex) {
	delete shoppingList[arrayIndex];
	
	displayItems();
}
*/

function deleteSingleItem(li) {
	li.remove();
}

function toggleChecked(li) {
	li.classList.toggle('checked');
}

// const form = document.querySelector("form")
const form = select('form');

// form.addEventListener("submit", addItem)
listen(form, 'submit', addItem);

function addItem(event) {
	event.preventDefault();

	shoppingList.push(event.target[0].value);

	displayItems();

	event.target.reset();
}

// const deleteButton = document.querySelector('.delete');
const deleteButton = select('.delete');

// deleteButton.addEventListener("click", clearList)
listen(deleteButton, 'click', clearList);

function clearList() {
	// shoppingList.length = 0

	shoppingList.splice(0);

	displayItems();
}
