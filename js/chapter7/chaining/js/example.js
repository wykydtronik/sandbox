
function dojQuery() {
  $('li em').addClass('seasonal').hide().delay(500).fadeIn(1400);
  $('li.hot').addClass('favorite').hide().delay(500).fadeIn(1400);
  $('li[id!="one"]').hide().delay(500).fadeIn(1400);
}

document.addEventListener("click", dojQuery);
