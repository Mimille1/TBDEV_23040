var anneenaissance = window.prompt("Saissisez votre année de naissance");
var date = new Date();
var annee = date.getFullYear();
var age = annee - anneenaissance;

window.alert(age);
if (age >= 18) {
    window.alert("Majeur");
}
else if (age < 18) {
    window.alert("Mineur")
}