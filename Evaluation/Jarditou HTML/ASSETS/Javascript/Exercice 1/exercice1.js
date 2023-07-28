var age = window.prompt("Veuillez saisir votre aĝe");
var jeune = 0;
var moyen = 0;
var vieux = 0;
var a = 0 ;

while (age < 100) {
    age = window.prompt("veuillez saisir votre âge");
}

for (let i = 0; i < mem.length; i++) {
    if (a < 20) {
        jeune = +jeune + 1;
    }
    else if (a > 40) {
        vieux = +vieux + 1;
    }
    else if (a >= 20 && a <= 40) {
        moyen = +moyen + 1;
    }

}
window.alert('Il y a ' + jeune + 'jeune. Il y a ' + moyen + " personne d'âge moyen. Il y a " + vieux + " personne âgée.")