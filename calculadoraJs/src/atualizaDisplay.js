const [displayNumero, displayOperador, displayAuxiliar, displayResultado] = document.querySelectorAll(".display span");
//const historico = document.querySelector(".historico");

function atualizaDisplay(currentValue) {
    const replace = { "*": "x", "/": "÷", "+": "+", "-": "-", "**": "sub", x: "x" };
    displayNumero.innerText = currentValue.number;
    displayResultado.innerText = currentValue.resultado;
    displayAuxiliar.innerText = currentValue.auxiliar;
    displayOperador.innerText = replace[currentValue.operador] || "";
}
export default atualizaDisplay;
