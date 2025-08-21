function zdroj() {
    var x = document.getElementById("source").selectedIndex;
    var y = document.getElementsByTagName("option");
        document.getElementById("zdroj").innerHTML = y[x].text; 
} 

function cil() {
    var x = document.getElementById("target").selectedIndex;
    var y = document.getElementsByTagName("option");
        document.getElementById("cilovy").innerHTML = y[x].text; 
}