function calcular(current) {
    try {
        const numero = Number(current.number);
        const auxil = Number(current.auxiliar);
        const operador = current.operador;

        const calc = {
            "+": () => numero + auxil,
            "/": () => numero / auxil,
            "-": () => numero - auxil,
            "*": () => numero * auxil,
            x: () => numero * auxil,
            "**": () => numero ** auxil,
        }[operador];

        const resultado = calc();
        const _isBignt = Number.MAX_SAFE_INTEGER <= resultado;
        console.log("O resultado é um BigInt " + _isBignt);
        return resultado;
    } catch (error) {
        console.warn(error.name);
        return "Erro na expressão!";
    }
}
export default calcular;
//Number.MAX_SAFE_INTEGER
