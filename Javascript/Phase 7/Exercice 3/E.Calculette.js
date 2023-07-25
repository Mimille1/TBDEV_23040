var nombre1 = window.prompt("Saissisez un nombre 1 ") ;
var nombre2 = window.prompt("Saissisez un nombre 2 ") ;
var operateur = window.prompt('Saisir l\'opérateur');
var calcul ;

if(operateur == '+')
{
    calcul = (Number(nombre1) + Number(nombre2)) ;
    window.alert("calcul : " + calcul) ;
}
else if(operateur == '-')
{
    calcul = (Number(nombre1) - Number(nombre2)) ;
    window.alert("calcul : " + calcul) ;
}
else if(operateur == '*')
{
    calcul = (Number(nombre1) * Number(nombre2)) ;
    window.alert("calcul : " + calcul) ;
}
else if(operateur == '/')
{
    calcul = (Number(nombre1) / Number(nombre2)) ;
    window.alert("calcul : " + calcul) ;
}
else
{
    window.alert("Erreur") ;
}






