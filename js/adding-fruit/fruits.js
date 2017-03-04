var fruits = ["Banana", "Orange", "Apple", "Kiwi"];

function loadFruits() {
  document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your flavor favor?");

  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}
