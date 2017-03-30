
function dojQuery() {
  $(function() {
    var backgroundColor = $('li').css('background-color');
    // alert(backgroundColor);
    $('ul').append('<p>Background color was: ' + backgroundColor + '</p>');
    $('li').css({
      'background-color': '#c5a996',
      'border': '1px solid #fff',
      'color': '#000',
      'font-family': 'Georgia',
      'padding-left': '+=75'
    });
  });
}

document.addEventListener("click", dojQuery);
