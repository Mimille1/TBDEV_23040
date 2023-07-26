
function cacheImage(papillon) {
    document.getElementById("papillon").style.display = "none";
}

function produit(x, y) {
    var x = 0;
    var y = 0;
    var b = 0;
    x = window.prompt("Entrez un nombre");
    y = window.prompt("Entrez un multiplicateur");
    b = x * x * x;
    document.write("Le cube de " + x + " est" + b + "<br>")
    var a = x * y;
    document.write("Le produit de " + x + "x" + y + " est égal à " + a + "<br>")

}


function afficheImg(papillon) {
    document.getElementById("papillon").style.display = "block";
}

cacheImage();
produit();
afficheImg();
