var modaldetektornapoveda = document.getElementById('detektornapoveda');
var btndetektornapoveda = document.getElementById("napovedadetektor");
var spandetektornapoveda = document.getElementsByClassName("closedetektornapoveda")[0];

btndetektornapoveda.onclick = function() {
    modaldetektornapoveda.style.display = "block";
}
spandetektornapoveda.onclick = function() {
    modaldetektornapoveda.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modaldetektornapoveda) {
        modaldetektornapoveda.style.display = "none";
    }
}