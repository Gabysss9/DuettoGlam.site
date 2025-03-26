const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("senha");
const formulário = document.querySelector("form");
const labelEmail = document.querySelector("label[for='email']");
const labelPassowrd = document.querySelector("label[for='senha']");

const inputName = document.getElementById("nome");
const labelName = document.querySelector("label[for='nome']");

const inputConfEmail = document.getElementById("email-conf");
const labelConfEmail = document.querySelector("label[for='email-conf']");
const inputConfSenha = document.getElementById("senha-conf");
const labelConfSenha = document.querySelector("label[for='senha-conf']");

inputEmail.addEventListener("focus", ()=>{
  labelEmail.classList.add("required-popup");
  inputEmail.style.backgroundColor ="pink";

});

inputEmail.addEventListener("blur", ()=>{
  labelEmail.classList.remove("required-popup");
  inputEmail.style.backgroundColor = "";
});

inputPassword.addEventListener("focus", ()=>{
  labelPassowrd.classList.add("required-popup");
  inputPassword.style.backgroundColor = "pink";

});

inputPassword.addEventListener("blur", ()=>{
    labelPassowrd.classList.remove("required-popup");
    inputPassword.style.backgroundColor = "";
});

inputConfSenha.addEventListener("focus", ()=>{
    labelConfSenha.classList.add("required-popup");
    inputConfSenha.style.backgroundColor = "pink";
});

  inputConfSenha.addEventListener("blur", ()=>{
    labelConfSenha.classList.remove("required-popup");
    inputConfSenha.style.backgroundColor = "";
});
  
 
inputName.addEventListener("focus", ()=>{
    labelName.classList.add("required-popup");
    inputName.style.backgroundColor ="pink";
  
});

inputName.addEventListener("blur", ()=>{
    labelName.classList.remove("required-popup");
    inputName.style.backgroundColor = "";
});
