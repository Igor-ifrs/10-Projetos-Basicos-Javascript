import "/styles/style.css";
import calculatorStrategy from "./calculatorStrategy";
const KEYBOARD = document.querySelector(".keyboard");
const VALIDKEYS = [...KEYBOARD.children].map((key) => [key.type, key.dataset.value]);

function typeOfKey(keyPress) {
    const _keyType = VALIDKEYS.filter((key) => key.includes(keyPress));
    return _keyType;
}
function handleKeyPress(e) {
    e.preventDefault();
    const [keyTypePress] = typeOfKey(e.key);
    if (keyTypePress) return calculatorStrategy(keyTypePress);
    return;
}
window.addEventListener("keydown", handleKeyPress);
KEYBOARD.addEventListener("click", function ({ target }) {
    if (!target.hasAttribute("type")) return;
    return calculatorStrategy([target.type, target.dataset.value]);
});
