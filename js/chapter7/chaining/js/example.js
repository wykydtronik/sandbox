
function dojQuery() {
  $('li em').addClass('seasonal');
  $('li.hot').addClass('favorite');
  $('li[id!="one"]').hide().delay(500).fadeIn(1400);
}

document.addEventListener("click", dojQuery);
