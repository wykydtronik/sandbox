var firstItem = document.getElementById('one');

function changeIt() {
  if (firstItem.hasAttribute('class')) {
    firstItem.removeAttribute('class');
  }
}
