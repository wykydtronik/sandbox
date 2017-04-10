var msg = '<div style=\"width:450px; margin:0 auto;\" class=\"header"\><a id=\"close\" href="#">close X</a></div>';
msg += '<div style=\"width:450px; margin:0 auto;\"><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4am. <br />';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
  document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);

// other functions from last example

function checkUsername() {
  var username = el.value;
  if (username.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}
function tipUsername() {
  elMsg.className = 'tip';
  elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
