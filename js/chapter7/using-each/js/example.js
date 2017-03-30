
function dojQuery() {
  $(function() {
    $('li').each(function() {
      var ids = this.id;
      $(this).append(' <span class="order">' + ids + '</span>');
    });
  });
}

document.addEventListener("click", dojQuery);
