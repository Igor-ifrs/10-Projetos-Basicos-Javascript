const [displayNumero, displayOperador, displayAuxiliar, displayResultado] = document.querySelectorAll(".display span");
//hitory
const teclasNumericas = [".", "00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const teclasFuncionais = ["+", "-", "*", "**", "/", "=", "Enter", "Backspace", "Delete"];

displayNumero.style.background = "red";
displayOperador.style.background = "blue";
displayAuxiliar.style.background = "yellow";
displayResultado.style.background = "green";

export { displayNumero, displayOperador, displayAuxiliar, teclasNumericas, teclasFuncionais, displayResultado };

//github linkedin home tema mensseger
