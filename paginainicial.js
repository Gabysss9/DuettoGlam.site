const setaDireita = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");
const produtos = document.querySelectorAll(".profissionais01, .promocao01, .maisvendidos01");

if (setaEsquerda && setaDireita && produtos.length > 0) {
    setaEsquerda.addEventListener("click", () => {
        produtos.forEach((produto) => {
            produto.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        });
    });

    setaDireita.addEventListener("click", () => {
        produtos.forEach((produto) => {
            produto.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        });
    });
}