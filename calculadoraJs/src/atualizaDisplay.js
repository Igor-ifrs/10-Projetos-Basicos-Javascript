const [displayAuxiliar, displayStatus] = document.querySelectorAll(".display span");
const displayInput = document.querySelector(".input-number");
const historico = document.querySelector(".historico");

//const msgs = document.querySelector(".msgs");
const replace = { "*": "x", "/": "÷", "+": "+", "-": "-", "**": "sub", x: "x" };
function atualizaDisplay(current) {
    displayAuxiliar.innerText = `${current.numero} ${replace[current.operador] || ""} ${current.auxiliar}`;
    displayInput.innerText = current.inputText;
    displayStatus.style.backgroundColor = current.isNumber ? "yellowgreen" : "red";
}
function inputHistorico({ numero, operador, auxiliar, inputText }) {
    const resp = `<li>${numero}${replace[operador] || ""}${auxiliar} = ${inputText}</li>`;
    historico.insertAdjacentHTML("afterbegin", String(resp));
    return;
}
export { atualizaDisplay, inputHistorico };
