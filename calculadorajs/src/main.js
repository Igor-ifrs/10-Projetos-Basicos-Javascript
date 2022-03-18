import "/styles/style.css";
import {
  displayNumero,
  displayOperador,
  displayAuxiliar,
  displayResultado,
  teclasNumericas,
  teclasFuncionais,
} from "./config";

function inputNumber(num) {
  return (displayNumero.innerText += num);
}

const calcFuncoes = {
  "+": function (tecla) {
    console.log(tecla);
  },
  "-": function (tecla) {
    console.log(tecla);
  },
  "*": function (tecla) {
    console.log(tecla);
  },
  "**": function (tecla) {
    console.log(tecla);
  },
  "/": function (tecla) {
    console.log(tecla);
  },
  "=": function (tecla) {
    console.log(tecla);
  },
  Enter: function (tecla) {
    console.log(tecla);
  },
  Backspace: function (tecla) {
    console.log(tecla);
  },
  Delete: function (tecla) {
    console.log(tecla);
  },
};

function dataInput(event) {
  const tecla = event.key || event;
  if (teclasNumericas.includes(tecla)) {
    return inputNumber(tecla);
  }
  if (teclasFuncionais.includes(tecla)) {
    return calcFuncoes[tecla](tecla);
  }
  return;
}

window.addEventListener("keydown", dataInput);
