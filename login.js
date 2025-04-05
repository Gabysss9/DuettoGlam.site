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

inputEmail.addEventListener("change", (Evento) => {

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(Evento.target.value)) { 
    inputEmail.classList.add("error");
    inputEmail.classList.remove("correct");
    alert("O email deve ser válido.");
  
  } else {
    inputEmail.classList.remove("error");
    inputEmail.classList.add("correct");
  
  }
  
});



inputPassword.addEventListener("change", (Evento) => {

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!regexSenha.test(Evento.target.value)) { 
    inputPassword.classList.add("error");
    inputPassword.classList.remove("correct");
    alert("A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");
  
  } else {
    inputPassword.classList.remove("error");
    inputPassword.classList.add("correct");
  
  } 
  });


  formulário.addEventListener("submit", (evento) => {
    evento.preventDefault(); 
  
    if (inputEmail.classList.contains("correct") && inputPassword.classList.contains("correct")) {
      alert("Login feito com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("Por favor, preencha os campos corretamente antes de continuar.");
    }
  });