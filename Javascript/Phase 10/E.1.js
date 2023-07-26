var n = window.prompt("Quelle est la taille du tableau ?") ;
var tableau = Array(n) ;

for (let i = 0; i < n; i++) {
    tableau[i] = window.prompt("Quelle valeur a ajouter au tableau ? ");
}

console.table(tableau);