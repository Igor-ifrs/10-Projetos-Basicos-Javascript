import "/styles/style.css";
import ESTADO from "./estadoCalculadora";
import calcular from "./calcular";
import { inputHistorico } from "./atualizaDisplay";

function insereNumero(numero) {
    const _ponto = numero === "." && ESTADO.value.inputText.includes(".");
    if (_ponto) return;
    const input = ESTADO.value.inputText.concat(numero).replace(/^\./, "0.");
    return ESTADO.setValue("inputText", input);
}
function insereOperador(operador) {
    const _result = ESTADO.value.isNumber && ESTADO.value.operador !== "" && ESTADO.value.numero !== "";
    if (_result) return result();

    const _negativo = operador === "-" && ESTADO.value.inputText === "";
    if (_negativo) {
        return ESTADO.setValue("inputText", operador);
    }
    if (ESTADO.value.isNumber) {
        ESTADO.setValue("operador", operador);
        ESTADO.setValue("numero", ESTADO.value.inputText);
        ESTADO.setValue("inputText", "");
        return;
    }
    const _changeOperator = !ESTADO.value.isNumber && ESTADO.value.operador !== "" && ESTADO.value.inputText === "";
    if (_changeOperator) {
        return ESTADO.setValue("operador", operador);
    }
}
function result() {
    if (ESTADO.value.operador === "") return;
    if (ESTADO.value.isNumber) {
        ESTADO.setValue("auxiliar", ESTADO.value.inputText);
        const resultado = calcular(ESTADO.value);
        ESTADO.setValue("inputText", resultado);
        ESTADO.setValue("resultado", true);
        return inputHistorico(ESTADO.value);
    }
}
function calcFuncoes(func) {
    return {
        Enter: () => result(),
        Backspace: () => {
            const corrigir = ESTADO.value.inputText.replace(/.$/, "");
            return ESTADO.setValue("inputText", corrigir);
        },
        Delete: () => ESTADO.clearAll(),
        "=": () => result(),
    }[func]();
}
const teclasNumericas = [".", "00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const teclasFuncionais = ["Enter", "=", "Backspace", "Delete"];
const teclasOperacionais = ["+", "-", "*", "**", "/", "x"];

function teclasPressionadas(event) {
    const tecla = event.key || event;
    if (!tecla) return;

    if (ESTADO.value.resultado) {
        ESTADO.clearAll();
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

/*
D-P 🤯
Quando for refatorar tente diminuir a quantidade de " ifs "
*/
