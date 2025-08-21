$(document).ready(function(){
var sluzba = document.getElementsByTagName('html')[0].getAttribute("id");
		
var lang = document.getElementsByTagName('a')[0].getAttribute("id");

var langurl;

    switch (lang) {
       case "cs":
		        langurl = "/cs/";
             break;
       case "he":
		        langurl = "/he/";
             break;
       case "ru":
		        langurl = "/ru/";
             break;
       case "es":
		        langurl = "/es/";
             break;
       case "en":
		        langurl = "/en/";
             break;
       default:
                langurl = "/cs/";
} 
		
var sluzbaurl;
	
if (sluzba==detektorpage && lang==cs) sluzbaurl = "/cs/detektor/";
else if (sluzba==detektorpage && lang==en) sluzbaurl = "/en/detector/";
else if (sluzba==detektorpage && lang==ru) sluzbaurl = "/ru/detektor/";
else if (sluzba==detektorpage && lang==he) sluzbaurl = "/he/galai-tirgum/";
else if (sluzba==detektorpage && lang==es) sluzbaurl = "/es/detector/";
else if (sluzba==prekladacpage && lang==cs) sluzbaurl = "/cs/prekladac/";
else if (sluzba==prekladacpage && lang==en) sluzbaurl = "/en/free-translation/";
else if (sluzba==prekladacpage && lang==es) sluzbaurl = "/es/traduccioon-gratis/";
else if (sluzba==prekladacpage && lang==ru) sluzbaurl = "/ru/onlajn-perevodchik/";
else if (sluzba==prekladacpage && lang==he) sluzbaurl = "/he/tirgum-mekuvan/";
else if (sluzba==radiopage && lang==cs) sluzbaurl = "/cs/radio/";
else if (sluzba==radiopage && lang==es) sluzbaurl = "/es/radio/";
else if (sluzba==radiopage && lang==en) sluzbaurl = "/en/radio/";
else if (sluzba==radiopage && lang==ru) sluzbaurl = "/ru/radio/";
else if (sluzba==radiopage && lang==he) sluzbaurl = "/he/radio/";
else if (sluzba==prepispage && lang==cs) sluzbaurl = "/cs/online-prepis/";
else if (sluzba==prepispage &&lang==es) sluzbaurl = "/es/online-transcripcion/";
else if (sluzba==prepispage &&  lang==en) sluzbaurl = "/en/online-transcription/";
else if (sluzba==prepispage && lang==ru) sluzbaurl = "/ru/onlajn-transkripcia/";
else if (sluzba==prepispage && lang==he) sluzbaurl = "/he/timlul-mekuvan/";
else sluzbaurl = langurl;

$('a[id="cs"]').each(function(){ 
var oldUrl = $(this).attr("href");
var newUrl = oldUrl.replace("/cs/", sluzbaurl);
$(this).attr("href", newUrl);
});
		
$('a[id="en"]').each(function(){ 
var oldUrl = $(this).attr("href");
var newUrl = oldUrl.replace("/en/", sluzbaurl);
$(this).attr("href", newUrl);
});
		
$('a[id="es"]').each(function(){ 
var oldUrl = $(this).attr("href");
var newUrl = oldUrl.replace("/es/", sluzbaurl);
$(this).attr("href", newUrl);
});
		
$('a[id="ru"]').each(function(){ 
var oldUrl = $(this).attr("href");
var newUrl = oldUrl.replace("/ru/", sluzbaurl);
$(this).attr("href", newUrl);
});
		
$('a[id="he"]').each(function(){ 
var oldUrl = $(this).attr("href");
var newUrl = oldUrl.replace("/he/", sluzbaurl);
$(this).attr("href", newUrl);
});
});