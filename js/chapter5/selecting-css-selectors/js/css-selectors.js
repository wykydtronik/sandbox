function coolDown() {
  var el = document.querySelector('li.hot');

  var els = document.querySelectorAll('li.hot');
  els[1].className = 'cool';
}
