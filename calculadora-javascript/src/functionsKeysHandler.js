import calculate from "./calculate";
function functionsKeysHandler(display, funcKey) {
    return {
        Enter: function () {
            if (display.values.aux === "") return;
            if (!isNaN(display.values.num) && display.values.aux !== "") {
                const { resp } = calculate(display);
                const respText = `${display.values.aux} ${display.values.ope} ${display.values.num} = ${resp}`;
                display.setDisplay = {
                    num: resp,
                    aux: respText,
                    ope: "",
                };
                display.setStatus("success");
                console.log("HISTORY: " + respText);
            }
        },
        Delete: function () {
            display.clearAll();
            return;
        },
        Backspace: function () {
            display.setDisplay = { num: display.values.num.replace(/.$/, "") };
            return;
        },
        "=": function () {
            return this.Enter();
        },
    }[funcKey]();
}

export default functionsKeysHandler;
