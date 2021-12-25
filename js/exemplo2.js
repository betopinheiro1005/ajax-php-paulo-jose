nomeUsuario = prompt("Informe o seu nome: ");
idadeUsuario = prompt("Informe a sua idade: ");
window.onload = function () {
    document.getElementById("btn_load").onclick = function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                document.getElementById("retorno").innerHTML = xmlHttp.responseText;
        };
        var url = "recebe.php?nome="+nomeUsuario+"&idade="+idadeUsuario;
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    };
};
