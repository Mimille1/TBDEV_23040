var filtre = RegExp("^[a-zA-Z0-9]+$");
var filtrepc= RegExp("^[a-zA-Z]+$");
var form = document.getElementById('form1');

/*var societe = document.getElementById("société").value ;

var pers = document.getElementById("p.contact").value ;

var code = document.getElementById("code.p").value ;

var vil = document.getElementById("ville").value ;

var em = document.getElementById("email").value ;*/
form.querySelector('#button1').onclick = function (e) {
    if (form.elements['societe'].value == '') {
        window.alert('Veuillez renseigner la société.');
        e.preventDefault();
    } else if (filtre.test(form.elements['societe'].value) == false) {
        window.alert('La société est mal renseignée');
        e.preventDefault();
    }
    if(form.elements['p.contact'].value=='')
    {
        window.alert('Veuillez renseigner la personne à contacter.');
        e.preventDefault();
    }else if (filtrepc.test(form.elements['p.contact'].value==false))
    {
        window.alert('La personne à contacter est mal renseignée.');
        e.preventDefault();
    }
}