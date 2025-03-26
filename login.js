const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("senha");
const formulário = document.querySelector("form");
const labelEmail = document.querySelector("label[for='email']");
const labelPassowrd = document.querySelector("label[for='senha']");

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