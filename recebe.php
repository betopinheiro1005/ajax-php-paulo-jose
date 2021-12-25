<?php
if($_GET):
    $nomeUsr = $_GET['nome'];
    $idade = $_GET['idade'];
endif;

if($idade > 18){
    echo 'O usuário '. $nomeUsr . ' é maior de idade!';
} else {
    echo 'O usuário '. $nomeUsr . ' é menor de idade!';
}
    

?>