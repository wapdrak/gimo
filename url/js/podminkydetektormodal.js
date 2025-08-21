var modaldetektorpodminky = document.getElementById('detektorpodminky');
var btndetektorpodminky = document.getElementById("podminkydetektor");
var spandetektorpodminky = document.getElementsByClassName("closedetektorpodminky")[0];

btndetektorpodminky.onclick = function() {
    modaldetektorpodminky.style.display = "block";
}
spandetektorpodminky.onclick = function() {
    modaldetektorpodminky.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modaldetektorpodminky) {
        modaldetektorpodminky.style.display = "none";
    }
} 