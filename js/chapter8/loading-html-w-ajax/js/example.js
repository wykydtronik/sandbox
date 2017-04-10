var xhr = new XMLHttpRequest();

xhr.onload = function() {
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {
    document.getElementById('content').innerHTML = xhr.responseText; // update
  }
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);
