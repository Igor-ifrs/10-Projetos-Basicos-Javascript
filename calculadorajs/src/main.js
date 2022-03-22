import "/styles/style.css";
import calcular from "./calcular";
import {
    displayNumero,
    displayOperador,
    displayAuxiliar,
    displayResultado,
    teclasNumericas,
    teclasFuncionais,
    teclasOperacionais,
    historico,
} from "./config";

const currentValue = {
    number: "",
    operador: "",
    auxiliar: "",
    resultado: "",
    // historico: "",
};

function atualizaDisplay() {
    displayNumero.innerText = currentValue.number;
    displayAuxiliar.innerText = currentValue.auxiliar;
    displayResultado.innerText = currentValue.resultado;
    //substituir expressao regular
    const replace = { "*": "x", "/": "÷" };
    if (replace[currentValue.operador]) {
        return (displayOperador.innerText = replace[currentValue.operador]);
    } else {
        return (displayOperador.innerText = currentValue.operador);
    }
}

function limpaDisplay() {
    currentValue.number = "";
    currentValue.operador = "";
    currentValue.auxiliar = "";
    currentValue.resultado = "";
    return atualizaDisplay();
}

function backspace() {
    if (currentValue.resultado) return;
    if (currentValue.auxiliar !== "") {
        currentValue.auxiliar = currentValue.auxiliar.replace(/.$/, "");
        return atualizaDisplay();
    }
    if (currentValue.operador !== "") {
        currentValue.operador = "";
        return atualizaDisplay();
    } else {
        currentValue.number = currentValue.number.replace(/.$/, "");
        return atualizaDisplay();
    }
}

function insereNumero(numero) {
    if (currentValue.resultado !== "") {
        limpaDisplay();
        currentValue.number += numero;
        return atualizaDisplay();
    }
    if (currentValue.operador !== "") {
        if (numero === "." && currentValue.auxiliar.includes(".")) return;
        currentValue.auxiliar += numero;
        return atualizaDisplay();
    }
    if (numero === "." && currentValue.number.includes(".")) return;
    currentValue.number += numero;
    return atualizaDisplay();
}

function insereOperador(operador) {
    if (currentValue.number === "" && operador === "-") {
        currentValue.number = "-";
        return atualizaDisplay();
    }
    if (currentValue.auxiliar !== "") {
        calcular(currentValue);
        return atualizaDisplay();
    } else if (currentValue.number !== "" && currentValue.number !== "-") {
        currentValue.operador = operador;
        return atualizaDisplay();
    }
}

const calcFuncoes = {
    Backspace: () => backspace(),
    "=": () => {
        if (currentValue.auxiliar === "." || currentValue.auxiliar === "-.") return;
        currentValue.resultado = calcular(currentValue);
        return atualizaDisplay();
    },
    Enter: () => {
        if (currentValue.auxiliar === "." || currentValue.auxiliar === "-.") return;
        currentValue.resultado = calcular(currentValue);
        return atualizaDisplay();
    },
    Delete: () => limpaDisplay(),
};

function dataInput(event) {
    const tecla = event.key || event;
    if (!tecla) return;
    if (teclasNumericas.includes(tecla)) {
        return insereNumero(tecla);
    }
    if (teclasFuncionais.includes(tecla)) {
        return calcFuncoes[tecla](tecla);
    }
    if (teclasOperacionais.includes(tecla)) {
        return insereOperador(tecla);
    }
}

window.addEventListener("keydown", dataInput);
