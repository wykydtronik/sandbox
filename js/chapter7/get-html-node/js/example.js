
function dojQuery() {
 var $listItemHTML = $('li').html();
 $('li').append('<i>' + $listItemHTML + '</i>');
}

document.addEventListener("click", dojQuery);
