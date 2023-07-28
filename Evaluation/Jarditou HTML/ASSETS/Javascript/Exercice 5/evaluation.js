var filtre = RegExp("^[a-zA-Z0-9]+$");
var filtrepc = RegExp("^[a-zA-Z]+$");
var filtrecp = RegExp('^[0-9]{5}$');
var filtremail = RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
var form=document.getElementById('form1');

form.querySelector('#button1').onclick = function (e) {
    if (form.elements['nom'].value == '') {
        window.alert('Veuillez renseigner votre nom.');
        e.preventDefault();
    }else if(filtrepc.test(form.elements['nom'].value) ==false)
    {
        window.alert('Le nom est mal renseigné');
        e.preventDefault();
    }

    if (form.elements['prénom'].value == '') {
        window.alert('Veuillez renseigner votre prénom.');
        e.preventDefault();
    }else if(filtrepc.test(form.elements['prénom'].value) ==false)
    {
        window.alert('Le prénom est mal renseigné');
        e.preventDefault();
    }

    if (form.elements['sexe'].value == '') {
        window.alert('Veuillez renseigner votre sexe.');
        e.preventDefault();
    }

    if (form.elements['date'].value == '') {
        window.alert('Veuillez renseigner votre date de naissance.');
        e.preventDefault();
    }

    if (form.elements['code'].value == '') {
        window.alert('Veuillez renseigner votre code postal.');
        e.preventDefault();
    }else if(filtrecp.test(form.elements['code'].value) ==false)
    {
        window.alert('Le code postal est mal renseigné');
        e.preventDefault();
    }

    if (form.elements['email'].value == '') {
        window.alert('Veuillez renseigner votre email.');
        e.preventDefault();
    }else if(filtremail.test(form.elements['email'].value) ==false)
    {
        window.alert('L\'adresse mail est mal renseigné');
        e.preventDefault();
    }

    if (form.elements['sujets'].value == '') {
        window.alert('Veuillez renseigner votre sujets.');
        e.preventDefault();
    }

    if (form.elements['question'].value == '') {
        window.alert('Veuillez renseigner votre question.');
        e.preventDefault();
    }

    if (form.elements['tif'].checked == false) {
        window.alert('Veuillez accepter le traitement informatique de ce formulaire.');
        e.preventDefault();
    }
}