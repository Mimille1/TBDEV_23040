var age = 0;
var jeune = 0;
var moyen = 0;
var vieux = 0;


while (age < 100) {
    age = window.prompt("veuillez saisir votre âge");


    if (age < 20) {
        jeune = +jeune + 1;
    }
    else if (age > 40) {
        vieux = +vieux + 1;
    }
    else if (age >= 20 && age <= 40) {
        moyen = +moyen + 1;
    }

}
window.alert('Il y a ' + jeune + ' jeune. Il y a ' + moyen + " personne d'âge moyen. Il y a " + vieux + " personne âgée.")