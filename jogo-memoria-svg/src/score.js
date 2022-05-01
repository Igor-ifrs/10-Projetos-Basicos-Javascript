function gameScore() {
    const start = new Date();
    let tentativas = 0;
    let level = "";
    return {
        get _tentativas() {
            return tentativas;
        },
        setTentativa() {
            return ++tentativas;
        },
        setLevel(value) {
            level = {
                8: "easy",
                12: "normal",
                24: "hard",
            }[value];
            return;
        },
        endGame() {
            const end = ((Date.now() - start) / 1000).toFixed(2);
            const formatEnd = end < 60 ? `${end} Segundos` : `${(end / 60).toFixed(2)} Minutos`;
            return {
                tentativas: this._tentativas,
                time: formatEnd,
                level,
            };
        },
    };
}

export default gameScore;
