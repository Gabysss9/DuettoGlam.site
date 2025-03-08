
let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementsByClassName('helper');


togglePopup(emailInput, emailLabel) {
}

function inputCorreto(input, label, helper) {
}

emailInput.addEventListener('change', (e) => {
    let valor = e.target.value
    if(valor.includes('@') && valor.includes('.com')) {
        inputCorreto(emailInput, emailHelper);
    } else {
        emailHelper.innerText = "Precisa inserir um email válido";
        inputIncorreto(emailInput, emailHelper);
    });


    

let passwordInput = document.getElementById('password');
let passwordLabel = document.querySelector('label[for="senha"]');
let passwordHelper = document.getElementsByClassName('helper');

togglePopup(passwordInput, passwordLabel) {
}

passwordInput.addEventListener('blur', (e) => {
    let valor = e.target.value

    if(valor.length <= 3) {
        inputCorreto(passwordInput,passwordLabel, passwordHelper);
    } else {
        passwordHelper.innerText = "Precisa inserir uma senha válida";
        inputIncorreto(passwordInput,passwordLabel, passwordHelper);
    }
}

function inputCorreto(input, label, helper) {
    input.classList.remove = ("correct");
    input.classList.add = ("error");
    helper.classList.add = ("visible");
}
console.log(emailInput, emailLabel, emailHelper);
console.log (passwordInput, passwordLabel, passwordHelper);
