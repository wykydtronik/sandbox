// Select the starting point and find its siblings.
var startItem = document.getElementsByTagName('ul')[0];
var prevItem = startItem.firstChild;
var nextItem = startItem.lastChild;

// Change the values of the siblings' class attributes.
prevItem.setAttribute('class', 'complete');
nextItem.setAttribute('class', 'cool');
