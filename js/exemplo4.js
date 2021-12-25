formData = new FormData();

document.getElementById("ficheiro").onchange = function (e) {
    if(e.target.files != null && e.target.files.length != 0) {
        formData.append("fotografia", e.target.files[0]);
    }
};

document.getElementById("btn_enviar").onclick = function () {
    var tbNome = document.getElementById("tbNome");
    var nIdade = document.getElementById("nIdade");
    if(tbNome.value != "" && nIdade.value != ""){
        formData.append("nome", tbNome.value);
        formData.append("idade", nIdade.value);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
          if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
              alert(xmlhttp.responseText);
          }  
        };
        xmlhttp.open("POST","recebe3.php",true);
        xmlhttp.send(formData);
    } else {
        alert("Informe todos os campos!");
    }
};