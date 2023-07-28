var form=document.getElementById('form1');

form.querySelector('#button1').onclick = function (e) {
    if (form.elements['nom'].value == '') {
        window.alert('Veuillez renseigner votre nom.');
        e.preventDefault();
    }

    if (form.elements['prénom'].value == '') {
        window.alert('Veuillez renseigner votre prénom.');
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
    }

    if (form.elements['email'].value == '') {
        window.alert('Veuillez renseigner votre email.');
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

    if (form.elements['checkbox'].value == '') {
        window.alert('Veuillez accepter le traitement informatique de ce formulaire.');
        e.preventDefault();
    }
}