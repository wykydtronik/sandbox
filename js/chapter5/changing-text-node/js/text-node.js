var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;

function changeIt() {
  elText = elText.replace('pine nuts', 'kale');
  itemTwo.firstChild.nodeValue = elText;
}
