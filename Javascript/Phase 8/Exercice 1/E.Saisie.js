var prenom = window.prompt("Saissisez votre prénom");
var a = 0;
while (prenom != "") {
    document.write(prenom+' ');
    prenom = window.prompt('Saissisez votre prénom');
    a = a + 1;
}
document.write('il y a '+ a + ' prenoms');