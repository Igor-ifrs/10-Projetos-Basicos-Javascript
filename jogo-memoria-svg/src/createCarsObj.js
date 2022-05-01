import imgMap from "./imgMap";

function secretsCardsObjs(LEVEL_NUMBER = 0) {
    const tempObjCards = {};
    const imgSort = imgMap.sort((a, b) => 0.5 - Math.random());
    const getRnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let index = 0; index < LEVEL_NUMBER; index++) {
        const secret = `secret${getRnd(0, 9999999)}#secret${getRnd(0, 9999999)}`.split("#");
        tempObjCards[secret[0]] = { pair: secret[1], img: imgSort[index] };
        tempObjCards[secret[1]] = { pair: secret[0], img: imgSort[index] };
    }
    const objCards = {};
    const objSort = Object.entries(tempObjCards).sort((a, b) => 0.5 - Math.random());
    objSort.forEach(([key, value]) => {
        objCards[key] = value;
    });
    return objCards;
}
export default secretsCardsObjs;
