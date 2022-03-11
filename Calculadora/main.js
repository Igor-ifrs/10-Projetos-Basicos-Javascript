const dataElement = function (data = "") {
  const dataGroups = [...document.querySelectorAll("g")].filter(function (elemet) {
    return elemet.hasAttribute(data);
  });
  return dataGroups;
};

const numeros = dataElement("data-number");
const operacoes = dataElement("data-op");
const links = dataElement("data-link");
const trocaTema = dataElement("data-tema")[0];

links.map(function (g) {
  g.addEventListener("click", function (e) {
    const link = this.dataset.link;
    window.open(link, "_blank");
  });
});

trocaTema.addEventListener("click", function (e) {
  document.body.classList.toggle("dark");
});
