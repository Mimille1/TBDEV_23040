const tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var arret = "";

while (arret != "0") {
    var prenom = window.prompt("Saissisezr un prénom");
    var verif = tableau.indexOf(prenom);
    
    if (verif != -1) {
        tab.splice(verif, 1);
        tab.push(' ');
    }
    if (verif == -1){
        arret = window.prompt('La valeur est incorrect . Ecrivez "0" pour arrêter');
    }
}
console.table(tab);