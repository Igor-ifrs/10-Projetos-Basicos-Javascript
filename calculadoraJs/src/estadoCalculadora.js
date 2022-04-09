import { atualizaDisplay } from "./atualizaDisplay";

const initialState = {
    numero: "",
    operador: "",
    auxiliar: "",
    inputText: "",
    resultado: false,
    isNumber: false,
};

const ESTADO = (function () {
    const currentValues = { ...initialState };
    return {
        get value() {
            return currentValues;
        },
        setValue(type, value) {
            currentValues[type] = value;
            const padrao = /^-?\d*\.?\d+$/g;
            currentValues.isNumber = padrao.test(currentValues.inputText);
            return atualizaDisplay(currentValues);
        },
        clearAll() {
            Object.keys(currentValues).forEach((key) => (currentValues[key] = initialState[key]));
            return atualizaDisplay(currentValues);
        },
    };
})(initialState);

export default ESTADO;

/*
D-P 🤯
FAKE STATE?
Pensei em centralizar as mudanças de valores 
de forma parecida do "useState".

*/
