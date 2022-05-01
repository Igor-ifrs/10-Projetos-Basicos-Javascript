import "/style/index.css";
import secrets from "./secrets";
import randomCards from "./randonCards";
import matchCards from "./matchCards";

const cards = [...document.querySelectorAll("[data-secret]")];
const reset = document.querySelector(".btn-reset");
const status = document.querySelector(".status");

const buildGame = function () {
    const secretArrays = secrets(cards.length);
    const cardsCombination = randomCards(cards, secretArrays);

    cards.forEach((card) => card.setAttribute("class", "card"));
    reset.classList.add("block");
    return {
        tentativas: 0,
        acertos: 0,
        isFirstCard: true,
        comparador: [],
        finished: cardsCombination.length,
        timeGame: 0,
        cardsCombination,
    };
};

let gameStatus = buildGame();

reset.addEventListener("click", (e) => (gameStatus = buildGame()));

function cardFlip({ target }) {
    const [firstCard, secondCard] = gameStatus.comparador;
    if (secondCard) return;

    if (!gameStatus.tentativas) {
        gameStatus.timeGame = Date.now();
        reset.classList.remove("block");
    }
    target.classList.add("flip");
    gameStatus.comparador.push(target);

    if (!firstCard) return;

    const _testCards = matchCards(gameStatus);

    if (_testCards) {
        gameStatus.acertos = gameStatus.acertos + 1;
        gameStatus.tentativas = gameStatus.tentativas + 1;
        gameStatus.comparador.forEach((element) => element.classList.add("block"));
        gameStatus.comparador = [];

        const _endGame = gameStatus.acertos === gameStatus.finished;
        if (_endGame) {
            gameStatus.timeGame = (Date.now() - gameStatus.timeGame) / 1000;
            return (gameStatus = buildGame());
        }
        //gameStatus.score();
        return;
    } else {
        gameStatus.tentativas = gameStatus.tentativas + 1;
        setTimeout(() => {
            gameStatus.comparador.forEach((e) => e.classList.remove("flip"));
            gameStatus.comparador = [];
        }, 1000);
        //gameStatus.score();
        return;
    }
}

cards.forEach((card) => card.addEventListener("click", cardFlip));
