
function dojQuery() {
  $(function() {
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function() {
      return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
  });
}

document.addEventListener("click", dojQuery);
