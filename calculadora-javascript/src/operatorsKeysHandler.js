function operatorsKeysHandler(display, opeKey) {
    const symbols = { "*": "x", "/": "÷" }[opeKey] || opeKey;
    if (display.values.num === "" && opeKey === "-") {
        display.setDisplay = { num: opeKey };
        return;
    }
    if (display.values.num === "") return;

    if (!isNaN(display.values.num) && display.values.aux === "") {
        display.setDisplay = {
            aux: display.values.num,
            ope: symbols,
            num: "",
        };
        return;
    }
    console.log("Expressão mal formulada");
}
export default operatorsKeysHandler;
