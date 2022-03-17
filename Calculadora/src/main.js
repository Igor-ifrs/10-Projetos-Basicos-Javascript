const filtraAtributosData = function (data = []) {
  const dataGroups = [...document.querySelectorAll("g")].filter(function (elemet) {
    return elemet.hasAttribute(data);
  });
  return dataGroups;
};

const numerosTecladoVirtual = filtraAtributosData("data-number");
const funcoesTecladoVirtual = filtraAtributosData("data-op");
const abrirLinks = filtraAtributosData("data-link");

const [nb, op] = document.querySelectorAll("span"); //continuar daqui estudar expressão regular e diminuir validação

const visorCalculadora = document.getElementById("input-calc");
const telaOperacao = document.getElementById("input-oper");

const TECLASNUMERICAS = [".", "00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const TECLASOPERACOES = ["+", "-", "*", "/"];
const TECLASFUNCOES = ["=", "Enter", "Backspace", "Delete"];

function atualizaValor(key) {
  return (visorCalculadora.innerText += key);
}
function atuaOP(key) {
  return (telaOperacao.innerText += key);
}

const funcoesEsp = {
  "=": (x) => {
    console.log("resultado");
  },
  Enter: (x) => {
    console.log("resultado");
  },
  Backspace: () => {
    console.log("back");
  },
  Delete: function () {
    return (visorCalculadora.value = "");
  },
};
function usuarioDigitou(e) {
  const _key = e.key || e; // verificar celular
  const _dadoValidos = TECLASNUMERICAS.concat(TECLASOPERACOES, TECLASFUNCOES).includes(_key);
  if (_dadoValidos) {
    const _jaTemPonto = _key === "." && visorCalculadora.innerText.includes(".");
    const _funcoes = TECLASFUNCOES.includes(_key) && visorCalculadora.value.length > 0;
    const _numeros = TECLASNUMERICAS.includes(_key);
    const _operacoes = TECLASOPERACOES.includes(_key);

    if (_funcoes) {
      return funcoesEsp[_key](_key);
    }
    if (_jaTemPonto) return;
    if (_numeros) {
      atualizaValor(_key);
    }
    if (_operacoes) {
      atuaOP(_key);
    }
  } else {
    return 0;
  }
}

window.addEventListener("keydown", usuarioDigitou);

numerosTecladoVirtual.map((e) => {
  e.addEventListener("click", function (n) {
    return usuarioDigitou(this.dataset.number);
  });
});

funcoesTecladoVirtual.map((e) => {
  e.addEventListener("click", function (n) {
    return usuarioDigitou(this.dataset.op);
  });
});

abrirLinks.map(function (g) {
  g.addEventListener("click", function (e) {
    const link = this.dataset.link;
    return window.open(link, "_blank");
  });
});

//tirar o seleção
