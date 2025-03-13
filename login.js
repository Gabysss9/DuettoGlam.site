let emailInput = document.getElementById('email'); 
let emailLabel = document.querySelector('label[for="email"]'); 
let emailHelper = document.querySelector('.helper'); 

function togglePopup(input, label) { 
  // Defina a lógica da função
}  

function inputCorreto(input, label, helper) {
  input.classList.remove("error"); 
  input.classList.add("correct"); 
  helper.classList.remove("visible");
} 

function inputIncorreto(input, label, helper) {
  input.classList.add("error"); 
  input.classList.remove("correct"); 
  helper.classList.add("visible");
} 

emailInput.addEventListener('change', (e) => { 
  let valor = e.target.value; 
  if (valor.includes('@') && valor.includes('.com')) { 
    inputCorreto(emailInput, emailLabel, emailHelper); 
  } else { 
    emailHelper.innerText = "Precisa inserir um email válido"; 
    inputIncorreto(emailInput, emailLabel, emailHelper); 
  } 
}); 

let passwordInput = document.getElementById('password'); 
let passwordLabel = document.querySelector('label[for="senha"]'); 
let passwordHelper = document.querySelector('.helper'); 

passwordInput.addEventListener('blur', (e) => { 
  let valor = e.target.value; 
  if (valor.length > 3) { 
    inputCorreto(passwordInput, passwordLabel, passwordHelper); 
  } else { 
    passwordHelper.innerText = "Precisa inserir uma senha válida"; 
    inputIncorreto(passwordInput, passwordLabel, passwordHelper); 
  } 
});  

console.log(emailInput, emailLabel, emailHelper); 
console.log(passwordInput, passwordLabel, passwordHelper);  

let botao = document.querySelector("button"); 
botao.addEventListener('click', (e) => { 
  e.preventDefault(); 
  alert("Login efetuado com sucesso"); 
});