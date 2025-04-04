const inputNome = document.getElementById("nome");
const labelNome = document.querySelector('label[for="nome"]');

inputNome.addEventListener("focus", ()=>{
  labelNome.classList.add("required-popup");
  inputNome.style.backgroundColor = "pink";
});

inputNome.addEventListener("blur", ()=>{
  labelNome.classList.remove("required-popup");
  inputNome.style.backgroundColor = "white";
});

const inputEmail = document.getElementById("email");
const labelEmail = document.querySelector('label[for="email"]');

inputEmail.addEventListener("focus", ()=>{
  labelEmail.classList.add("required-popup");
  inputEmail.style.backgroundColor = "pink";
});

inputEmail.addEventListener("blur", ()=>{
  labelEmail.classList.remove("required-popup");
  inputEmail.style.backgroundColor = "white";
});


const inputEmailConf = document.getElementById("email-conf");
const labelEmailConf = document.querySelector('label[for="email-conf"]');

inputEmailConf.addEventListener("focus", ()=>{
  labelEmailConf.classList.add("required-popup");
  inputEmailConf.style.backgroundColor = "pink";
});

inputEmailConf.addEventListener("blur", ()=>{ 
  labelEmailConf.classList.remove("required-popup");
  inputEmailConf.style.backgroundColor = "white";
});


const inputSenha = document.getElementById("senha");  
const labelSenha = document.querySelector('label[for="senha"]');

inputSenha.addEventListener("focus", ()=>{
  labelSenha.classList.add("required-popup");
  inputSenha.style.backgroundColor = "pink";
});

inputSenha.addEventListener("blur", ()=>{
  labelSenha.classList.remove("required-popup");
  inputSenha.style.backgroundColor = "white";
});

const inputSenhaConf = document.getElementById("senha-conf");
const labelSenhaConf = document.querySelector('label[for="senha-conf"]');

inputSenhaConf.addEventListener("focus", ()=>{
  labelSenhaConf.classList.add("required-popup");
  inputSenhaConf.style.backgroundColor = "pink";
});

inputSenhaConf.addEventListener("blur", ()=>{
  labelSenhaConf.classList.remove("required-popup");
  inputSenhaConf.style.backgroundColor = "white";
});



inputNome.addEventListener("change", (Evento) => {

const regexSomenteLetras = /^[a-zA-Z\s]+$/;
if (!regexSomenteLetras.test(Evento.target.value)) { // Verifica se o nome contém caracteres inválidos
  inputNome.classList.add("error");
  inputNome.classList.remove("correct");
  alert("O nome deve conter apenas letras.");
} else {
  inputNome.classList.remove("error");
  inputNome.classList.add("correct");
    
}

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

inputEmailConf.addEventListener("change", (Evento) => { 

if (Evento.target.value !== inputEmail.value) { 
  inputEmailConf.classList.add("error");
  inputEmailConf.classList.remove("correct");
  alert("Os emails não conferem.");
}else {
  inputSenha.classList.remove("error");
  inputSenha.classList.add("correct");

} 

});

inputSenha.addEventListener("change", (Evento) => {

const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
if (!regexSenha.test(Evento.target.value)) { 
  inputSenha.classList.add("error");
  inputSenha.classList.remove("correct");
  alert("A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");

} else {
  inputSenha.classList.remove("error");
  inputSenha.classList.add("correct");

} 
});

inputEmailConf.addEventListener("change", (Evento) => { 
  if (Evento.target.value !== inputEmail.value) { 
    inputEmailConf.classList.add("error");
    inputEmailConf.classList.remove("correct");
    alert("Os emails não conferem.");
  } else {
    inputEmailConf.classList.remove("error");
    inputEmailConf.classList.add("correct");
  } 
});

inputSenhaConf.addEventListener("change", (Evento) => {  
  if (Evento.target.value !== inputSenha.value) { 
    inputSenhaConf.classList.add("error");
    inputSenhaConf.classList.remove("correct");
    alert("As senhas não conferem.");
  } else {
    inputSenhaConf.classList.remove("error");
    inputSenhaConf.classList.add("correct"); 
  } 
});


const fomulario = document.getElementById("form-cadastro");

fomulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); 

  if(
    inputNome.classList.contains("correct") &&
    inputEmail.classList.contains("correct") &&
    inputEmailConf.classList.contains("correct") &&
    inputSenha.classList.contains("correct") &&
    inputSenhaConf.classList.contains("correct")) {
    alert("Cadastro feito com sucesso!");
    window.location.href = "páginainicial.html";
  } else {
    alert("Por favor, preencha os campos corretamente antes de continuar.");
  }
});


