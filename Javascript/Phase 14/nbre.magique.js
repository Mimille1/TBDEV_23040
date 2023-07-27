var min = 1;
var max = 100;
var nbreMagique = Math.floor(Math.random() * (max - min) + min);
var afficheT=document.getElementById('label1');
console.log(nbreMagique);

document.querySelector('#button1').onclick = function(){
    var proposition = document.getElementById("textBox1").value;
    if (proposition > nbreMagique) {
        afficheT.innerHTML+='<br> Le nombre magique est plus petit ' +proposition; 
    }
    if (proposition < nbreMagique) {
        afficheT.innerHTML+='<br> Le nombre magique est plus grand ' +proposition; 
    }
    if (proposition == nbreMagique) {
        window.alert("Félicitation, vous avez trouvé le nombre magique !");
    }
}
