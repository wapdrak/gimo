var modalbuttonpodminky = document.getElementById('buttonpodminky');
var btnbuttonpodminky = document.getElementById("podminkybutton");
var spanbuttonpodminky = document.getElementsByClassName("closebuttonpodminky")[0];

btnbuttonpodminky.onclick = function() {
    modalbuttonpodminky.style.display = "block";
}
spanbuttonpodminky.onclick = function() {
    modalbuttonpodminky.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbuttonpodminky) {
        modalbuttonpodminky.style.display = "none";
    }
} 