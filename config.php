<?php 

session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$verifica = verificationName($username);

if($verifica = true){
    if($username = 'root' || $password = 'root'){
        header('location: Mother_Page/index.html');
        return;
    }
}
    



?>