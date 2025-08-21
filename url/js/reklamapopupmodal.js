var modalbuttonreklamapopup = document.getElementById('buttonreklamapopup');
var btnbuttonreklamapopup = document.getElementById("reklamapopupbutton");
var spanbuttonreklamapopup = document.getElementsByClassName("closebuttonreklamapopup")[0];

btnbuttonreklamapopup.onclick = function() {
    modalbuttonreklamapopup.style.display = "block";
}
spanbuttonreklamapopup.onclick = function() {
    modalbuttonreklamapopup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbuttonreklamapopup) {
        modalbuttonreklamapopup.style.display = "none";
    }
} 
function zmanreklamapopupbutton() {
 modalbuttonreklamapopup.style.display = "block";
}
setInterval("zmanreklamapopupbutton();",900000); 