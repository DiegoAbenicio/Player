<?php
    session_start();
    function verificationName(string $username) : bool{
        if(empty($username)){
            $_SESSION['mensagem-de-erro'] = 'Username invalido';
            return false;
        }
        else if (strlen($username) < 3){
            $_SESSION['mensagem-de-erro'] = 'Username invalido';
            return false;
        }
        else if (strlen($username) > 20){
            $_SESSION['mensagem-de-erro'] = 'Username invalido';
            return false;
        }
        return true;
    }
 
?>