function numbersKeysHandler(display, numKey) {
    if (numKey === "." && display.values.num.includes(".")) return;
    display.setDisplay = {
        num: display.values.num.concat(numKey).replace(/^\./, "0."),
    };
    return;
}
export default numbersKeysHandler;
