function dojQuery() {
  $(function() {
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');
  });
}

document.addEventListener("click", dojQuery);
