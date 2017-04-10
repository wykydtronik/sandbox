(function() {
  var hotel = {
    name:'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();

  // Calculate and write out the expiry details for the offers
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today) {
    // variables
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // add 7 day time
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    //Create arrays to hold names of days / monthNames
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create msg
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

  // Finish
}());
