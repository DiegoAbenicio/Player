<?php

$login = $_POST['login'];
$senha = MD5($_POST['senha']);
$senha2= $_POST['senha'];
/*Faz a conexão com o banco de daos, as informações 'localhost', 'root' e 'null' 
  devem ser trocadas pelas informações pessoais da sua máquina */
$connect = mysqli_connect('localhost', 'root', null);
$db = mysqli_select_db($connect, 'songlib');
$query_select = "SELECT login FROM usuarios WHERE login = '$login'";
$select = mysqli_query($connect, $query_select);


if($senha2 == '' || $senha2 == null){
  echo "<script language='javascript' type='text/javascript'>alert('O campo senha deve ser preenchido');window.location.href='register.html';</script>";
}
elseif($login == '' || $login == null){
  echo "<script language='javascript' type='text/javascript'>alert('O campo login deve ser preenchido');window.location.href='register.html';</script>";
}
else{
  $verificarusuario = mysqli_query($connect, "SELECT*FROM usuarios WHERE login='$login'"); 
  $verificar = mysqli_fetch_array($verificarusuario);
  $senha2 == null;
  if($verificar > 1){
    echo"<script language='javascript' type='text/javascript'>alert('Esse login já existe');window.location.href='register.html';</script>"; die();
  }
  else{
    mysqli_query($connect, "INSERT INTO usuarios (login, senha) VALUES ( '$login', '$senha')");
    echo"<script language='javascript' type='text/javascript'>alert('Usuário cadastrado com sucesso!');window.location.href='index.html'</script>";
      
          }
      }
?>