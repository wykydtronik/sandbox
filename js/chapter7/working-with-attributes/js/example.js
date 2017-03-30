
function dojQuery() {
  $(function() {
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id', 'group');
  });
}

document.addEventListener("click", dojQuery);
