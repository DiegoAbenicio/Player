function login(){
    var usuario = document.dados.userName.value
    var senha = document.dados.password.value
    
    if(usuario == "root" && senha == "root")
        alert('Sucesso')
    else
        alert('Você deve inserir as informações corretas')
}