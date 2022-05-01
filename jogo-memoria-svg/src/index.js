import "../style.css";
import secretsCardsObjs from "./createCarsObj";
import createBoardGame from "./createBoardGame";
import compareCards from "./compareCards";
import activeScreen from "./screens";
import buttons from "./buttons";
import gameScore from "./score";

buttons.selectLevel.addEventListener("click", function ({ target }) {
    if (target.tagName !== "LI") return;
    const LEVELVALUE = target.dataset.level;
    return START_GAME(LEVELVALUE);
});

function START_GAME(LEVELVALUE) {
    const score = gameScore();
    const objCards = secretsCardsObjs(LEVELVALUE);
    score.setLevel(objCards.length);
    const cards = createBoardGame(objCards);
    activeScreen("board");
    cards.addEventListener("click", compareCards.bind(null, score, objCards));
}
buttons.reset.forEach((btn) => btn.addEventListener("click", () => activeScreen("intro")));
