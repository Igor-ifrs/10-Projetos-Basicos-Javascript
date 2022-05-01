function calculate(display) {
    try {
        const numero = Number(display.values.aux);
        const auxiliar = Number(display.values.num);
        const operator = display.values.ope;

        const calc = {
            "+": () => numero + auxiliar,
            "÷": () => numero / auxiliar,
            "-": () => numero - auxiliar,
            x: () => numero * auxiliar,
            "**": () => numero ** auxiliar,
        }[operator]();
        const isBigInt = (calc > Number.MAX_SAFE_INTEGER || calc < Number.MIN_SAFE_INTEGER) && calc !== Infinity;
        if (isBigInt) return { resp: BigInt(calc), msg: "BIG INTEGER" };
        if (calc === Infinity) return { resp: calc, msg: "AO INFINITO E ALÉM!" };
        return { resp: calc, msg: "INTEGER" };
    } catch (error) {
        console.error(error);
        return "Erro na expressão!";
    }
}

export default calculate;
