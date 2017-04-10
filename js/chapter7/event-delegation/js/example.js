
function dojQuery() {
  $(function() {

  });
}

// document.addEventListener("click", dojQuery);

$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#five)',
    {status: 'important'},
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );
});
