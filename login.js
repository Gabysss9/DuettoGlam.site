let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let formulário = document.querySelector("form");
let labelEmail = document.querySelector("label[for='email']");

inputEmail.addEventListener("focus", ()=>{
  labelEmail.classList.add("required-popup");

});

inputEmail.addEventListener("blur", ()=>{
  inputEmail.style.backgroundColor = "pink";
  labelEmail.classList.remove("required-popup");
});

formulario.addEventListener("submit", ()=> {
  alert("Dados enviados com sucesso!")

});