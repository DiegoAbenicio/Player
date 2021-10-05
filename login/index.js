function login(){

    var usuario = document.dados.userName.value
    var senha = document.dados.password.value
    
    if(usuario == "root" && senha == "root")
        window.location.href = "../playerLand/playerLand.html"
    else
        alert('Você deve inserir as informações corretas')
}

function goToRegister(){
    window.location.href = "../register/register.html"
}