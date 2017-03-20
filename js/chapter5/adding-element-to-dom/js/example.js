var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

function changeIt() {
    position.appendChild(newEl);
}
