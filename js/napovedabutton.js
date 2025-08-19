var modalbuttonnapoveda = document.getElementById('buttonnapoveda');
var btnbuttonnapoveda = document.getElementById("napovedabutton");
var spanbuttonnapoveda = document.getElementsByClassName("closebuttonnapoveda")[0];

btnbuttonnapoveda.onclick = function() {
    modalbuttonnapoveda.style.display = "block";
}
spanbuttonnapoveda.onclick = function() {
    modalbuttonnapoveda.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbuttonnapoveda) {
        modalbuttonnapoveda.style.display = "none";
    }
}