var filtre = RegExp("^[a-zA-Z0-9]+$");
var filtrepc = RegExp("^[a-zA-Z]+$");
var filtremail = RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$")
var form = document.getElementById('form1');


form.querySelector('#button1').onclick = function (e) {
    if (form.elements['societe'].value == '') {
        window.alert('Veuillez renseigner la société.');
        e.preventDefault();
    } else if (filtre.test(form.elements['societe'].value) == false) {
        window.alert('La société est mal renseignée');
        e.preventDefault();
    }
    
    if (form.elements['p.contact'].value == '') {
        window.alert('Veuillez renseigner la personne à contacter.');
        e.preventDefault();
    } else if (filtrepc.test(form.elements['p.contact'].value == false)) {
        window.alert('La personne à contacter est mal renseignée.');
        e.preventDefault();
    }

    if (form.elements['code.p'].value == '') {
        window.alert('Veuillez renseigner le code postal.');
        e.preventDefault();
    } else if (filtrepc.test(form.elements['code.p'].value == false)) {
        window.alert('Le code postal est mal renseignée.');
        e.preventDefault();
    }

    if (form.elements['ville'].value == '') {
        window.alert('Veuillez renseigner la ville.');
        e.preventDefault();
    } else if (filtrepc.test(form.elements['ville'].value == false)) {
        window.alert('La ville est mal renseignée.');
        e.preventDefault();
    }

    if (form.elements['email'].value == '') {
        window.alert('Veuillez renseigner votre email.');
        e.preventDefault();
    } else if (filtrepc.test(form.elements['email'].value == false)) {
        window.alert('Votre email est mal renseignée.');
        e.preventDefault();
    }
}