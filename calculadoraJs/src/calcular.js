function calcular(current) {
    try {
        const numero = Number(current.numero);
        const auxiliar = Number(current.auxiliar);
        const operador = current.operador;

        const calc = {
            "+": () => numero + auxiliar,
            "/": () => numero / auxiliar,
            "-": () => numero - auxiliar,
            "*": () => numero * auxiliar,
            x: () => numero * auxiliar,
            "**": () => numero ** auxiliar,
        }[operador];

        const resp = calc();
        if (!isNaN(resp)) return resp;
        const _isBigInt = resp > Number.MAX_SAFE_INTEGER || resp < Number.MIN_SAFE_INTEGER;
        if (_isBigInt) {
            return BigInt(resp);
        } else {
            return resp;
        }
    } catch (error) {
        console.error(error);
        return "Erro na expressão!";
    }
}
export default calcular;
