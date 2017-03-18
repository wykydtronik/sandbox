var elements = document.getElementsByTagName('li');

function coolDown() {
  if(elements.length > 0) {
    var el = elements[2];
    el.className = 'cool';
  }
}
