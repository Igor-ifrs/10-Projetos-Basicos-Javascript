const calcular = function (currentValue) {
    const numero = Number(currentValue.number);
    const auxil = Number(currentValue.auxiliar);
    const operador = currentValue.operador;
    const calc = {
        "+": () => numero + auxil,
        "/": () => numero / auxil,
        "-": () => numero - auxil,
        "*": () => numero * auxil,
        x: () => numero * auxil,
        "**": () => numero ** auxil,
    };
    return calc[operador]();
};
export default calcular;
