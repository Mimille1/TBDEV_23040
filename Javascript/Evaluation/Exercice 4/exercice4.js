var PAP;
var REM = 0;
var PORT = 0;
var TOT = 0;
var QTECOM = 0;
var PU = 0;

PU = window.prompt("Saissisez le prix de l'article");
QTECOM = window.prompt("Saissisez le nombre d'article");
TOT = (PU * QTECOM); 

if (TOT >= 100 && TOT <= 200) {
    REM = TOT * (5 / 100);
    console.log(REM);
    PORT = TOT * (2 / 100);
    console.log(PORT);
}
else if (TOT > 200 && TOT > 500) {
    REM = TOT * (10 / 100);
    console.log(REM);
    PORT = TOT * (2 / 100);
    console.log(PORT);
}

if (TOT < 500) {
    if (PORT > 6) {
        PAP = (TOT-REM) + PORT;
        console.log(PAP);
    }
    else {
        PAP = (TOT-REM) + 6;
    }
    
}else{
    PAP=TOT-REM;
}

window.alert("Le prix total est de " + PAP + "€");