const forms = document.querySelector("#forms");
const inputBox = document.querySelectorAll(".inputBox");
const spanMsg = document.querySelectorAll(".spanMsg");
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  validarNome();
  validarE_Mail();
  validarSenha();
  confirmarSenha();
});

function turnErrorOn(index) {
  inputBox[index].classList.add("error");
  spanMsg[index].style.display = "block";
}

function turnErrorOff(index) {
  inputBox[index].classList.remove("error");
  spanMsg[index].style.display = "none";
}

function validarNome() {
  if (inputBox[0].value.length < 3) {
    turnErrorOn(0);
  } else {
    turnErrorOff(0);
  }
}

function validarE_Mail() {
  if (!regexEmail.test(inputBox[1].value)) {
    turnErrorOn(1);
  } else {
    turnErrorOff(1);
  }
}

function validarSenha() {
  if (inputBox[2].value.length < 8) {
    turnErrorOn(2);
  } else {
    turnErrorOff(2);
  }
}

function confirmarSenha() {
  if (inputBox[3].value !== inputBox[2].value) {
    turnErrorOn(3);
  } else {
    turnErrorOff(3);
  }
}
