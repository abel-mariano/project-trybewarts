// -----Selection of Elements-----

const btnLogin = document.querySelector('#btn-login');
const inputHeaderEmail = document.querySelector('#email-header');
const inputHeaderPassword = document.querySelector('#password-header');
const formInfos = document.querySelector('#evaluation-form');
const formName = document.querySelector('#input-name');
const formLastName = document.querySelector('#input-lastname');
const formEmail = document.querySelector('#input-email');
const formSelect = document.querySelector('#house');
const textarea = document.querySelector('#textarea');
const counterNumber = document.querySelector('#counter');
const inputCheack = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const radioFamilyInfo = document.querySelectorAll('.infoFamilia');
const radioRateInfo = document.querySelectorAll('.infoRadio');
const newFormData = document.querySelector('#form-data');

// -----Login test function-----

btnLogin.addEventListener('click', () => {
  if (inputHeaderEmail.value === 'tryber@teste.com' && inputHeaderPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// -----Button enable and disable function-----

function btnDisable() {
  if (inputCheack.value === 'off') {
    btnSubmit.disabled = true;
  } else if (inputCheack.value === 'on') {
    btnSubmit.disabled = false;
  }
} btnDisable();

inputCheack.addEventListener('click', () => {
  if (inputCheack.value === 'off') {
    inputCheack.value = 'on';
  } else if (inputCheack.value === 'on') {
    inputCheack.value = 'off';
  }
  btnDisable();
});

// -----Text area counter function-----

textarea.addEventListener('input', () => {
  counterNumber.innerHTML = 500 - textarea.value.length;
});

// -----Student form function-----

// Function return radio family
const radioFamily = () => {
  for (let index = 0; index < radioFamilyInfo.length; index += 1) {
    if (radioFamilyInfo[index].checked) {
      return radioFamilyInfo[index].value;
    }
  }
};

// Function return checkbox - Poderia ter usado essa função, mas no final da palavra iria mostrar uma vírgula, não fazendo sentido.

/* const checkboxLearn = () => {
  let checkboxList = '';
  for (let index = 0; index < checkboxInfo.length; index += 1) {
    if (checkboxInfo[index].checked) {
      checkboxList += `${checkboxInfo[index].value}, `;
    }
  }
  return checkboxList;
}
 */

// Function return radio assessment
const radioAssessment = () => {
  for (let index = 0; index < radioRateInfo.length; index += 1) {
    if (radioRateInfo[index].checked) {
      return radioRateInfo[index].value;
    }
  }
};

// Function New Form
newFormData.style.display = 'none';

const newFormStudant = (event) => {
  event.preventDefault();

  const checkboxInfo = document.querySelectorAll('.subject:checked');// Aqui eu usei o atributo :checked que retorna o checkbox selecionado.
  newFormData.style.display = 'flex';
  formInfos.style.display = 'none';
  newFormData.innerText = `
  Nome: ${formName.value} ${formLastName.value}
  Email: ${formEmail.value}
  Casa: ${formSelect.value}
  Família: ${radioFamily()}
  Matérias: ${[...checkboxInfo].map((content) => content.value).join(', ')} 
  Avaliação: ${radioAssessment()}
  Observações: ${textarea.value}`;
};
btnSubmit.addEventListener('click', newFormStudant);
