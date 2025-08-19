    var jazyktitle = navigator.language;
    switch (jazyktitle) {
       case "cs":
		        vystitle = "Poznámka";
             break;
       case "he":
		        vystitle = "הערה";
             break;
       case "ru":
		        vystitle = "Сообшение";
             break;
       case "es":
		        vystitle = "Nota";
             break;
       default:
                vystitle = "Note";
} 
var ALERT_TITLE = vystitle;

    var jazykbtn = navigator.language;
    switch (jazykbtn) {
       case "cs":
		        vysbtn = "Rozumím";
             break;
       case "he":
		        vysbtn = "הבנתי";
             break;
       case "ru":
		        vysbtn = "Понятно";
             break;
       case "es":
		        vysbtn = "Ok";
             break;
       default:
                vysbtn = "Ok";
} 
var ALERT_BUTTON_TEXT = vysbtn;



if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	msg.className = 'over';
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}