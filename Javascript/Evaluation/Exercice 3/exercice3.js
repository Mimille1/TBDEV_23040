const tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var arret = "";
var prenom = 1;

while (prenom != "0") {
    prenom = window.prompt("Saissisezr un prénom\n0 Pour arrêter la recherche");
    if (prenom != 0) {
        if (tableau.indexOf(prenom) != -1) {
            tableau.splice(tableau.indexOf(prenom), 1);
            tableau.push(' ');
        }
        console.table(tableau);
    }
}
    console.table(tableau);