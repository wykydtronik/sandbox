
function dojQuery() {
 var $listItemText = $('li').text();
 $('li').append('<i>' + $listItemText + '</i>');
}

document.addEventListener("click", dojQuery);
