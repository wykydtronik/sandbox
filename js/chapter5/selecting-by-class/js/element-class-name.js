var elements = document.getElementsByClassName('hot');

function coolDown() {
  // just using onmouseover to trigger the function to see the difference in an interactive way
  if (elements.length > 2) {
    var el = elements[2];
    el.className = 'cool';
  }
}
