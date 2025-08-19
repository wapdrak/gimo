var modalbacklinksbutton = document.getElementById('backlinksbutton');
var btnbacklinksbutton = document.getElementById("buttonbacklinks");
var spanbacklinksbutton = document.getElementsByClassName("closebacklinksbutton")[0];

btnbacklinksbutton.onclick = function() {
    modalbacklinksbutton.style.display = "block";
}
spanbacklinksbutton.onclick = function() {
    modalbacklinksbutton.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbacklinksbutton) {
        modalbacklinksbutton.style.display = "none";
    }
 } 