import "/styles/style.css";
import calcular from "./calcular";
import atualizaDisplay from "./atualizaDisplay";
import { teclasNumericas, teclasFuncionais, teclasOperacionais } from "./config";

const currentValue = {
    number: "",
    operador: "",
    auxiliar: "",
    resultado: "",
    historico: "",
};

function limpaDisplay() {
    currentValue.number = "";
    currentValue.operador = "";
    currentValue.auxiliar = "";
    currentValue.resultado = "";
    return atualizaDisplay(currentValue);
}

function backspace() {
    if (currentValue.resultado) return;
    if (currentValue.auxiliar !== "") {
        currentValue.auxiliar = currentValue.auxiliar.replace(/.$/, "");
        return atualizaDisplay(currentValue);
    }
    if (currentValue.operador !== "") {
        currentValue.operador = "";
        return atualizaDisplay(currentValue);
    } else {
        currentValue.number = currentValue.number.replace(/.$/, "");
        return atualizaDisplay(currentValue);
    }
}

function insereNumero(numero) {
    if (currentValue.operador !== "") {
        if (numero === "." && currentValue.auxiliar.includes(".")) return;
        currentValue.auxiliar += numero;
        return atualizaDisplay(currentValue);
    }
    if (numero === "." && currentValue.number.includes(".")) return;
    currentValue.number += numero;
    return atualizaDisplay(currentValue);
}

function insereOperador(operador) {
    if (currentValue.number === "" && operador === "-") {
        currentValue.number = operador;
        return atualizaDisplay(currentValue);
    }
    if (operador === "-" && currentValue.operador.length > 0 && currentValue.auxiliar === "") {
        currentValue.auxiliar = operador;
        return atualizaDisplay();
    }
    if (currentValue.auxiliar !== "") {
        currentValue.resultado = calcular(currentValue);
        return atualizaDisplay(currentValue);
    } else if (currentValue.number !== "" && currentValue.number !== "-") {
        currentValue.operador = operador;
        return atualizaDisplay(currentValue);
    }
}

function calcFuncoes(func) {
    return {
        Backspace: () => backspace(),
        "=": () => {
            if (currentValue.auxiliar === "." || currentValue.auxiliar === "-.") return;
            currentValue.resultado = calcular(currentValue);
            return atualizaDisplay(currentValue);
        },
        Enter: () => {
            if (currentValue.auxiliar === "." || currentValue.auxiliar === "-.") return;
            currentValue.resultado = calcular(currentValue);
            return atualizaDisplay(currentValue);
        },
        Delete: () => limpaDisplay(),
    }[func]();
}

function teclasPressionadas(event) {
    const tecla = event.key || event;
    if (!tecla) return;
    if (currentValue.resultado !== "") {
        limpaDisplay();
        atualizaDisplay(currentValue);
    }
    if (teclasNumericas.includes(tecla)) {
        return insereNumero(tecla);
    }
    if (teclasFuncionais.includes(tecla)) {
        return calcFuncoes(tecla);
    }
    if (teclasOperacionais.includes(tecla)) {
        return insereOperador(tecla);
    }
}

window.addEventListener("keydown", teclasPressionadas);
