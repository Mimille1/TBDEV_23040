var multiple = window.prompt("Quelle table de multiplication souhaitez vous affichez ?");

function TableMultiplication(a) {
    for (let i = 1; i < 11; i++) {
        var b = multiple * i;
        document.write(i + "x" + multiple + "=" + b + "<br>");
    }
}

TableMultiplication(multiple);