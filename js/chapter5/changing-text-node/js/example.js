var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href="http://google.com">' + itemContent + '</a>';
