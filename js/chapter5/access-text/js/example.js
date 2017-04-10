var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

function changeIt() {
  var msg = '<p>textContent: ' + showTextContent + '</p>';
      msg +='<p>innerText: ' + showInnerText + '</p>';
  var el = document.getElementById('scriptResults');
  el.innerHTML = msg;

  firstItem.textContent = 'sourdough bread';
  firstItem.className = 'cool';
}
