import numbersKeysHandler from "./numbersKeysHandler";
import functionsKeysHandler from "./functionsKeysHandler";
import operatorsKeysHandler from "./operatorsKeysHandler";
import updateDisplay from "./updateDisplay";

function calculator([keyType, keyPress]) {
    const display = updateDisplay();
    if (display.values.status === "success") {
        display.clearAll();
    }
    if (!isNaN(display.values.num) && display.values.aux !== "" && display.values.num !== "" && keyType === "ope") {
        return functionsKeysHandler(display, "Enter");
    }
    return {
        num(key) {
            return numbersKeysHandler(display, key);
        },
        fun(key) {
            return functionsKeysHandler(display, key);
        },
        ope(key) {
            return operatorsKeysHandler(display, key);
        },
        link() {
            return;
        },
    }[keyType](keyPress);
}
export default calculator;
