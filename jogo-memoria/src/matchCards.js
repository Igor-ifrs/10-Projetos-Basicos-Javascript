const matchCards = function ({ comparador, cardsCombination }) {
    const cards = /e$/.test(comparador[0].dataset.secret)
        ? comparador[0].dataset.secret.concat(`${comparador[1].dataset.secret}`)
        : comparador[1].dataset.secret.concat(`${comparador[0].dataset.secret}`);
    return cardsCombination.includes(cards);
};

export default matchCards;
