const filtraAtributosData = function (data = []) {
  const dataGroups = [...document.querySelectorAll("g")].filter(function (elemet) {
    return elemet.hasAttribute(data);
  });
  return dataGroups;
};

const numeros = filtraAtributosData("data-number");
const operacoes = filtraAtributosData("data-op");
const abrirLinks = filtraAtributosData("data-link");
const msgsHover = filtraAtributosData("data-msg");
const msg = document.getElementById("msg");
const visorInput = document.getElementById("input-calc");

//let valores = [];
numeros.map((e) => {
  e.addEventListener("click", function (n) {
    //valores.push(this.dataset.number);
    visorInput.value += eval(this.dataset.number);
    console.log(typeof visorInput.value);
  });
});

const dicionarioFuncoes = {
  clear: () => (visorInput.value = ""),
};

operacoes.map((e) => {
  e.addEventListener("click", function (n) {
    return dicionarioFuncoes[this.dataset.op]();
  });
});

msgsHover.map(function (btn) {
  btn.addEventListener("mouseenter", function (e) {
    msg.innerText = e.target.dataset.msg;
  });
  btn.addEventListener("mouseleave", function () {
    msg.innerText = "Menssagem padrão";
  });
});

abrirLinks.map(function (g) {
  g.addEventListener("click", function (e) {
    const link = this.dataset.link;
    window.open(link, "_blank");
  });
});
export { visorInput };
