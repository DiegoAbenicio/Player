<?php
//Captura as informaçãoes que o usario colocar
$login = $_POST['login'];
$entrar = $_POST['entrar'];
$senha = md5($_POST['senha']);
/*Faz a conexão com o banco de daos, as informações 'localhost', 'root' e 'null' 
  devem ser trocadas pelas informações pessoais da sua máquina */
$connect = mysqli_connect('localhost', 'root', null);
$db = mysqli_select_db($connect, 'songlib');
  
if (isset($entrar)) {
    /*
      Verica as informações de login, caso esteja certo move o usuario para o site
    */
    $verifica = mysqli_query($connect, "SELECT * FROM usuarios WHERE login =
    '$login' AND senha = '$senha'") or die("erro ao selecionar");
      if (mysqli_num_rows($verifica)<=0){
        echo"<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos');window.location
        .href='index.html';</script>";
        die();
      }else{
        setcookie("login",$login);
        header("Location:index.php");
      }
  }
?>