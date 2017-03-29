
function dojQuery() {
  var $listHTML = $('ul').html();
  $('ul').append($listHTML);
}

document.addEventListener("click", dojQuery);
