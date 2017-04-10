var firstItem = document.getElementById('one');
var fourthItem = document.getElementsByTagName('li').item(3);

function changeIt() {
  firstItem.className = 'complete';
  fourthItem.setAttribute('class', 'cool');
}
