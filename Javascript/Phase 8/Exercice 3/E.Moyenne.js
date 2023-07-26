var num1 = window.prompt("Saissisez un nombre 1 ");
var memoire = 0;
var moyenne = 0;
var a = 0;

while (num1 != "") {
    memoire = memoire + Number(num1);
    num1 = window.prompt("Saissisez un nombre 1 ");
    a = a + 1;
}
document.write(memoire + " ");
moyenne = memoire / a,
document.write(moyenne);