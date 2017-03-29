
function dojQuery() {
  var $listText = $('ul').text();
  $('ul').append('<p>' + $listText + '</p>');
}

document.addEventListener("click", dojQuery);
