var table = 3; // unit of table
var operator = 'addition'; // type of calulation
var i = 1;
var msg = '';

if (operator === 'addition') {
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// write
var el = document.getElementById('blackboard');
el.innerHTML = msg;
