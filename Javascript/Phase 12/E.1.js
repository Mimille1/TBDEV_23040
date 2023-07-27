var a = 0 ;
var b = 0 ;
var somme = 0 ;
var tableau = Array(a) ;

while(stop != 0) {
    window.prompt("Saissisez une valeur") ;
    a = a + 1 ;
    stop = window.prompt("Saissisez 0 pour arrêter la saisie de valeur") ;
}


for (let i = 0; i < a; i++) {
    var somme = Number(b) + Number(somme) ;
    console.log(somme) ;
}

console.table(tableau) ;
var moyenne = Number(somme) / Number(a) ;
document.write("Vous avez saisie " + Number(a) + "valeurs" + "<br>") ;
document.write("La somme des valeurs est égales à " + Number(somme) + "<br>") ;
document.write("La moyenne des valeurs est " + Number(moyenne) + "<br>") ;