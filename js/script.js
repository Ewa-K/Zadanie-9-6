var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elements = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + elements.length;
	list.appendChild(element);
});

