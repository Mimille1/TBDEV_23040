const str1 = "robert ;dupont ;amiens ;80000 ";
const str2 = ";";
var n = window.prompt("Emplacement du mot souhaiter");

function strtok(str1, str2, n) {
    const a = str1.split(str2);
    window.alert(a[n-1]);
}

strtok(str1,str2,n);