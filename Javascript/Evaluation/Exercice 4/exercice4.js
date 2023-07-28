var PAP = 0 ;
var REM = 0 ;
var PORT = 0 ;
var TOT = 0 ;
var QTECOM = 0 ;
var ARRET = "" ;
var PU = 0 ;

//while (ARRET != "STOP") {
    PU = window.prompt("Saissisez le prix de l'article") ;
    QTECOM = window.prompt("Saissisez le nombre d'article") ;
    TOT = (PU * QTECOM) ;
    document.write(TOT1) ;
   // ARRET = window.prompt("Si il n'y a plus d'article, Saissisez 'STOP'") ;
//}

if (TOT >= 100 && TOT <= 200) {
    TOT = TOT * 95/ 100 ;
    PORT = TOT * 2/100
}
else if (TOT > 200 && TOT > 500) {
    TOT = TOT * 90 / 100 ;
    PORT = TOT * 2 / 100 ;    
}

if (PORT > 6 ) {
    TOT = TOT + PORT
}
else{
    TOT = TOT + 6 ;
}

window.alert("Le prix total est de " + TOT + "€")