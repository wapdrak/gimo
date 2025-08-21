   function radiookno2(width, height){
var left = (screen.width / 2) - (width / 2);
var top = (screen.height / 2) - (height / 2);
	   
var uri = "http://www.prekladac.co/cs/radio/okno/";

var url = uri;

window.open(url,'_blank','scrollbars=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,width='+width+',height='+height+',top='+top+',left='+left);

return false
}