const btnTrocaTema = document.getElementById("btn-tema");
const html = document.querySelector("html");
const verificaTemaAtual = (tema) => localStorage.getItem(tema);

const defineTemaEscuro = () => {
  localStorage.setItem("tema", "dark");
  html.setAttribute("class", "dark");
};

const trocaTema = () => {
  const tema = verificaTemaAtual("tema");
  if (tema === "default" || tema === null) {
    defineTemaEscuro();
  } else {
    localStorage.setItem("tema", "default");
    html.setAttribute("class", "default");
  }
};

// A página sempre vai carregar o tema default como padrão
// então se faz necessaria essa verificação no localstorage (ponto que melhorar)

const verificaTemaNoCarregamento = verificaTemaAtual("tema") === "dark";
if (verificaTemaNoCarregamento) {
  defineTemaEscuro();
}

btnTrocaTema.addEventListener("click", trocaTema);
