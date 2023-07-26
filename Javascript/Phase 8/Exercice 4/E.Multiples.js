var n = window.prompt("Saissisez un nombre 1") ;
var x = window.prompt("Saissisez un nombre 2") ;
var multiple = 0 ;
var a = 0;

for (let i = 0; i < n; i++) {
    a = a+1;
    multiple = a * Number(x) ;
    document.write(a + " * " + x + " = " + multiple + "<br>") ;
}
