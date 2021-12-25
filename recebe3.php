<?php

if ($_POST) {
    $nome = $_POST['nome'];
    $idade = $_POST['idade'];
    $fotografia = $_FILES['fotografia'];

    if (move_uploaded_file($fotografia['tmp_name'], "imagens/" . $fotografia['name'])) {
        echo "Enviado com sucesso!\r\n" . $nome . " - " . $idade . " anos";
    } else {
        echo 'Erro no processo!';
    }
}

?>