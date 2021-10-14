function login(){

    var usuario = document.dados.userName.value
    var senha = document.dados.password.value
    
    if(usuario == "root" && senha == "root")
        window.location.href = "../Mother_Page/index.html"
    else
        alert('Você deve inserir as informações corretas')
}

function goToRegister(){
    window.location.href = "index.html"
}