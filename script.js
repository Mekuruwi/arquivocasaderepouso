const carrossel = document.querySelector(".carrossel");
const btnEsquerda = document.querySelector(".esquerda");
const btnDireita = document.querySelector(".direita");

let scrollInterval;

function iniciarScroll(direcao) {
  scrollInterval = setInterval(() => {
    carrossel.scrollLeft += direcao === "direita" ? 1.5 : -1.5;
  }, 10);
}

function pararScroll() {
  clearInterval(scrollInterval);
}

btnDireita.addEventListener("mouseover", () => iniciarScroll("direita"));
btnDireita.addEventListener("mouseout", pararScroll);
btnEsquerda.addEventListener("mouseover", () => iniciarScroll("esquerda"));
btnEsquerda.addEventListener("mouseout", pararScroll);
