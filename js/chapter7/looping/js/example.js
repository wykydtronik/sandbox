
function dojQuery() {
  $('li em').addClass('seasonal');
  $('li.hot').addClass('favorite');
}

document.addEventListener("click", dojQuery);
