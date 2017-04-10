function billingFunction() {
  // document.write("get rekt m8");
  var shipsName = document.getElementById('shippingName');
  var shipsZip = document.getElementById('shippingZip');
  if(document.getElementById('same').checked) {
    document.getElementById('billingName').value = shipsName.value;
    document.getElementById('billingZip').value = shipsZip.value;
  } else {
    document.getElementById('billingName').value = '';
    document.getElementById('billingZip').value = '';
  }
}
