const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome");
const passInput = document.querySelector("#senha");

form.addEventListener("submit", (e) => {
  let envio = true;

  if (!nomeInput.value.trim()) {
    alert("Digite um nome válido!");
    envio = false;
  }

  if (!passInput.value) {
    alert("Digite uma senha válida!");
    envio = false;
  } else if (passInput.value.length < 4 || passInput.value.length > 10) {
    alert("A senha deve conter entre 4 a 10 caracteres!");
    envio = false;
  }

  if (!envio) {
    e.preventDefault();
  }
});
