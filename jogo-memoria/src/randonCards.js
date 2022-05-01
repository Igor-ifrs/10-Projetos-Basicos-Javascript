const randomCards = function (cards, secretArray) {
    const cardsOdd = [];
    const cardsEven = [];
    secretArray.forEach((e, i) => {
        if (i % 2) {
            cards[i].dataset.secret = `${e}`;
            cardsOdd.push(`${e}`);
        } else {
            cards[i].dataset.secret = `${e}e`;
            cardsEven.push(`${e}e`);
        }
    });
    const cardsCombination = cardsEven.map((e, i) => e.concat(cardsOdd[i]));

    return cardsCombination;
};
export default randomCards;
