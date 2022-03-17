const visor = document.getElementById("visor");
const visorPosition = () => document.getElementById("icc_visor").getBoundingClientRect();
{
  const { top, height, left, width } = visorPosition();
  visor.style = `top:${parseInt(top)}px; height:${parseInt(height)}px; left:${parseInt(left)}px; width:${parseInt(
    width
  )}px;`;
}
window.addEventListener("resize", function () {
  const { top, height, left, width } = visorPosition();
  visor.style = `top:${parseInt(top)}px; height:${parseInt(height)}px; left:${parseInt(left)}px; width:${parseInt(
    width
  )}px;`;
});

/*
DIÁRIO DO PROGRAMADOR 
como a calculadora foi feita em SVG NÃO conseguimos posicionar div ou input 
como elemeto filho de um rect por exemplo, então copiamos a posição via js 
para sobrepor o input com a tela da calculadora
*/
