var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href="http://google.com" target="_blank">' + itemContent + '</a>';
