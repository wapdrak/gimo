function barcode() {
  var x = document.getElementById("newbarcode").value;
  var url = "https://barcode.tec-it.com/barcode.ashx?data=";
  var url2 = "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Jpg&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0&download=true";
  var y = document.getElementById("hidden").value;
   
  document.getElementById("hidden").value=x;
  document.getElementById("imagebarcode").src=url+y+url2;
  document.getElementById("imagebarcode").alt="ברקוד: "+y;
  document.getElementById("imagebarcode").title="ברקוד: "+y;  
  document.getElementById("linkbarcode").href=url+y+url2;
  document.getElementById("linkbarcode").title="הורדת ברקוד: "+y;
}
function barcodelink() {
  var x = document.getElementById("newbarcode").value;
  var url = "https://barcode.tec-it.com/barcode.ashx?data=";
  var url2 = "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Jpg&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0&download=true";
  var y = document.getElementById("hidden").value;

  window.location=url+y+url2;
}