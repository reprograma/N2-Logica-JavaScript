var botao = document.querySelector ('.button')
var senha = document.formulario.senha;
if (document.formulario.senha.value.length < 6) {
    alert("A senha deve conter no minímo 6 digitos!");
    document.formulario.senha.focus();
    return false;
}