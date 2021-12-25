document.getElementById("btn_load").onclick = function () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            document.getElementById("retorno").innerHTML = xmlHttp.responseText;
    };
    xmlHttp.open("GET", "arquivos/curso.txt", true);
    xmlHttp.send();
};
