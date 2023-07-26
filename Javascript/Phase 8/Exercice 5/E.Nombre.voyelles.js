var mot = window.prompt("Ecrire un mot");
var sauvegarde = mot;
var tableau = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", 'Y'];
var a = 0;
var b = ""; // début mot 
var c = ""; // fin de mot 

for (var x in tableau) { // parcourir le tableau 
    for (let i = 0; i < sauvegarde.length; i++) { // parcourir taille mot 
        if (mot.indexOf(tableau[x]) != -1) { // si il trouve une voyelle il l'a retire
            {
                b = mot.substring(0, mot.indexOf(tableau[x])); // récupère avant lettre trouvée 
                console.log(b);
                c = mot.substring(mot.indexOf(tableau[x]) + 1, mot.length); //récupère après lettre trouvée
                console.log(c);
                mot = b + c; // assemble les deux
                console.log(mot);
                a = a + 1;
            }
        }
    }
}
document.write('j\'ai trouvé ' + a + ' de voyelles');
