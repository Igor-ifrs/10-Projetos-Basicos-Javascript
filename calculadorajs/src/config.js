const [displayNumero, displayOperador, displayAuxiliar, displayResultado] = document.querySelectorAll(".display span");
const historico = document.querySelector(".historico");
const teclasNumericas = [".", "00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const teclasFuncionais = ["Enter", "=", "Backspace", "Delete"];
const teclasOperacionais = ["+", "-", "*", "**", "/", "x"];

displayNumero.style.background = "green";
displayOperador.style.background = "blue";
displayAuxiliar.style.background = "yellow";
displayResultado.style.background = "tomato";

export {
  displayNumero,
  displayOperador,
  displayAuxiliar,
  displayResultado,
  teclasNumericas,
  teclasFuncionais,
  teclasOperacionais,
  historico,
};

//github linkedin home tema mensseger
