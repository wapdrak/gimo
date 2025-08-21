var interval = setInterval(acas, 1000);
function acas() {

var datum = new Date();
var den = datum.getDay();
var mesic = datum.getMonth();
var rok = datum.getFullYear();
var pcas = datum.toLocaleTimeString();

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 6);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}
var ctydnu = (new Date()).getWeek(); 
	
var sden = new Array("ראשון","שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת");
var smesic = new Array("ינואר","פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",);

var h = datum.getHours(); 

if(h>=0&&h<4) {t="לילה טוב לנמצאים כרגע בחצי הכדור השקוע בחשכה"}; 	
if(h>=4&&h<7) {t="לילה טוב וחלומות מתוקים"}; 
if(h>=4&&h<7) {t="בוקר טוב לכל ציפורי הבוקר"};
if(h>=7&&h<9) {t="בוקר טוב ויום נעים"};
if(h>=9&&h<12) {t="יום טוב לכל המבקרים"}; 
if(h>=12&&h<13) {t="צהריים טובים לכולם וארוחת צהריים טעימה :-)"}; 
if(h>=13&&h<17) {t="צהריים טובים לכל האנשים הנחמדים"}; 
if(h>=17&&h<19) {t="ערב נעים"}; 
if(h>=19&&h<22) {t="ערב טוב"};
if(h>=23&&h<0) {t="ערב טוב לכל מי שעדיין לא ישן"}; 			  
					  
var dnes = "<b>"+t+"</b>, "; 
dnes +=  "הים <b>יום "; 
dnes += sden[den] + ", "; 
dnes += datum.getDate() + ". "; 
dnes += smesic[mesic] + " ("; 
dnes += (1 + mesic) + "),</b> ";
dnes += "שבוע מס' <b>" + ctydnu + "</b>, "; 
dnes += "שנת <b>" + rok + "</b>, "; 
dnes += "השעה היא: <b>" + pcas + "</b>, ";

document.getElementById("cas").innerHTML = dnes ;
}