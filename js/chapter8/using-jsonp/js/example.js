function showEvents(data) {
  var newContent = '';

  for (var i = 0; i < data.events.length; i++) {
    newContent += '<div class="event">';
    newContent += '<img src="' + data.events[i].map + '"';
    newContent += ' alt="' + data.events[i].location + '" />';
    newContent += '<p><b>' + data.events[i].location + '</b><br>';
    newContent += data.events[i].date + '</p>';
    newContent += '</div>';
  }

  document.getElementById('content').innerHTML = newContent;
}

showEvents ({
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1 2017",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15 2017",
      "map": "img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30 2017",
      "map": "img/map-ny.png"
    }
  ]
});
