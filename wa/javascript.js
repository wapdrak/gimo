  
<script>
function wa() {
  var x = "Platform: " + navigator.userAgent;
  
var x = navigator.userAgent.toLowerCase();
var w = x.indexOf("windows") > -1; //&& x.indexOf("mobile");
if(w) {
    document.getElementById('u').value = ("https://wa.me/");
}

var a = x.indexOf("android") > -1; //&& x.indexOf("mobile");
if(a) {
    document.getElementById('u').value = ("whatsapp://send?phone=");
}

var i = x.indexOf("iphone") > -1; //&& x.indexOf("mobile");
if(i) {
  document.getElementById('u').value = ("whatsapp://send?phone=");
}

}
</script>  
  

  <input type="hidden" id="u" name="u" value="">
  
  
  
  var y = document.getElementById("countries");
  var i = y.selectedIndex;
  document.getElementById("totallabel").innerHTML = y.options[i].label;
  document.getElementById("totaltext").innerHTML = y.options[i].text;
  document.getElementById("totaltitle").innerHTML = y.options[i].title;
