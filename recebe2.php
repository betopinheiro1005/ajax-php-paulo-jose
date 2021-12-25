<?php
if($_FILES):
    $arquivo = $_FILES['fotografia'];
endif;

if(move_uploaded_file($arquivo['tmp_name'], "imagens/".$arquivo['name'])){
    echo 'Imagem enviada com sucesso!';
} else {
    echo 'Erro ao enviar a imagem!';
}
    

?>