
function dojQuery() {
  $(function() {
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');
  });
}

document.addEventListener("click", dojQuery);
