function updateDisplay() {
    const [aux, ope, num, msg] = [...document.querySelectorAll("[data-js]")];
    const status = document.querySelector("[data-status]").dataset;
    const display = { aux, ope, num, msg };
    return {
        get values() {
            return {
                aux: display.aux.innerText,
                ope: display.ope.innerText,
                num: display.num.innerText,
                msg: display.msg.innerText,
                status: status.status,
            };
        },
        set setDisplay({ ...tagValues }) {
            Object.entries(tagValues).forEach(([tag, value]) => {
                return (display[tag].innerText = value);
            });
        },
        setStatus(val) {
            return (status.status = val);
        },
        clearAll() {
            status.status = "wait";
            Object.values(display).forEach((tag) => (tag.innerText = ""));
        },
    };
}
export default updateDisplay;
