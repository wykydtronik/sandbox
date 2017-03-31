
function dojQuery() {
  $(function() {

  });
}

// document.addEventListener("click", dojQuery);

$(function() {
  $('li').on('click', function(e){
    $('li space').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });
});
