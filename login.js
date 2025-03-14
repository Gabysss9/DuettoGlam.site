let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let formulário = document.querySelector("form");

inputEmail.addEventListener("focus", ()=>{
  inputEmail.style.backgroundColor = "lightgreen";

});

inputEmail.addEventListener("blur", ()=>{
  e.target.style.backgroundColor = "";
});

formulario.addEventListener("submit", ()=> {
  alert("Dados enviados com sucesso!")

});