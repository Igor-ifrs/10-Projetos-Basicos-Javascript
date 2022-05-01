function cleanBoard(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
function createElement(elementName, attributes) {
    const cardElement = document.createElement(elementName);
    Object.entries(attributes).forEach(([key, value]) => {
        cardElement.setAttribute(key, value);
    });
    return cardElement;
}
function createBoardGame(secretsAttr) {
    const containerCards = document.querySelector(".container-cards");
    cleanBoard(containerCards);
    const secrets = Object.entries(secretsAttr);
    const boardGame = createElement("div", { class: `board-game grid-${secrets.length}` });

    secrets.forEach(([id, attr]) => {
        const card = createElement("div", { class: "card", "data-status": "wait", "data-id": id });
        const cardFront = createElement("div", { class: "card-front" });
        const cardBack = createElement("div", { class: "card-back" });
        const img = createElement("div", { class: "emojis" });
        img.style.backgroundPosition = attr.img;
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        cardBack.appendChild(img);
        boardGame.appendChild(card);
    });

    containerCards.appendChild(boardGame);
    return boardGame;
}
export default createBoardGame;
