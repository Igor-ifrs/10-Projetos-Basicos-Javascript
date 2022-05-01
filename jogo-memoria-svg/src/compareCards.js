import activeScreen from "./screens";
function compareCards(score, objCards, { target }) {
    if (!target.classList.contains("card")) return;
    if (target.classList.contains("blocked")) return;
    const _firstCard = document.querySelector("[data-status=firstCard]");
    const _cards = [...document.querySelectorAll("[data-status]")];
    const _waitCars = [...document.querySelectorAll("[data-status=wait]")];
    const _comparCards = [...document.querySelectorAll("[data-status=compar]")];
    const currentCardStatus = target.dataset.status;

    if (currentCardStatus === "wait") {
        _waitCars.forEach((e) => (e.dataset.status = "compar"));
        target.dataset.status = "firstCard";
        target.classList.add("flipped");
        return;
    }

    if (currentCardStatus === "compar") {
        _cards.forEach((e) => e.classList.add("blocked"));
        const exact = _firstCard.dataset.id === objCards[target.dataset.id].pair;
        target.classList.add("flipped");
        score.setTentativa();
        if (exact) {
            _comparCards.forEach((e) => (e.dataset.status = "wait"));
            _firstCard.dataset.status = "macth";
            target.dataset.status = "macth";
            _cards.forEach((e) => e.classList.remove("blocked"));
            const macths = [...document.querySelectorAll("[data-status=macth]")];
            if (macths.length === _cards.length) {
                const finalScore = score.endGame();
                macths.forEach((e, i) => (e.style = `transform: rotateY(1260deg);transition : ${i * 0.6}s `));
                console.log(finalScore);
                //return activeScreen("score");
            }
            return;
        } else {
            setTimeout(() => {
                target.classList.remove("flipped");
                _firstCard.dataset.status = "wait";
                _firstCard.classList.remove("flipped");
                _cards.forEach((e) => e.classList.remove("blocked"));
                _comparCards.forEach((e) => (e.dataset.status = "wait"));
            }, 600);
            return;
        }
    }
}
export default compareCards;
//const img = objCards.find((e) => e.id === target.dataset.id).background;
//const cardBack = current.children[1];
// if (currentCardStatus === "firstCard") return;
