<?php
/* Leva o usuario para a pagina de login caso a senha esteja certa, e leva o usuario
  para uma pagina de erro caso esteja errada */
  $login_cookie = $_COOKIE['login'];
    if(isset($login_cookie)){
      header("Location:Mother_Page/index.html");
    }else{
      echo"Bem-Vindo, convidado <br>";
      echo"Essas informações <font color='red'>NÃO PODEM</font> ser acessadas por você";
      echo"<br><a href='login.html'>Faça Login</a> Para ler o conteúdo";
    }
?>