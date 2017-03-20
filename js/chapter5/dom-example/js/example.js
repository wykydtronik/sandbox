// adding items to start and end of list

var list = document.getElementsByTagName('ul')[0]; // reference ul

// add new item to end of list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);

// add new item start of list

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);

function changeIt() {
  list.appendChild(newItemLast);
  list.insertBefore(newItemFirst, list.firstChild);

  var listItems = document.querySelectorAll('li'); // all li

  // add a class of cool to all li

  var i;
  for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
  }

  // add number of items in the list to heading

  var heading = document.querySelector('h2');
  var headingText = heading.firstChild.nodeValue;
  var totalItems = listItems.length;
  var newHeading = headingText + '<span>' + totalItems + '</span>';
  heading.innerHTML = newHeading;
}
