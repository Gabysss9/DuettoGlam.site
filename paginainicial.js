const formPesq = document.getElementById("barra-pesquisa");
const inputPesq = document.getElementById("text");
const resultados = document.getElementById("resultados-pesquisa")

formPesq.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (barraPesquisa.value.trim() === "") {
        alert("Por favor, digite algo na barra de pesquisa.");
      } else {
    alert(`Você pesquisou por: ${barraPesquisa.value}`);
    window.location.href = 'descriçãoproduto.html';
  }
});


const barraPesquisa = document.getElementById("barra-pesquisa");
const resultadosPesquisa = document.getElementById("resultados-pesquisa");

const produtos = [
  { nome: "img1", preco: "R$494,31" },
  { nome: "img2", preco: "R$280,62" },
  { nome: "img03", preco: "R$157,70" },
  { nome: "img005", preco: "R$203,60" },
  { nome: "img01", preco: "R$301,81" },
];

barraPesquisa.addEventListener("input", (evento) => {
  const termo = evento.target.value.toLowerCase();
  resultadosPesquisa.innerHTML = "";

  if (termo.trim() === "") {
    resultadosPesquisa.style.display = "none"; 
    return;
  }

  
  const resultados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termo)
  );

  if (resultados.length > 0) {
    resultadosPesquisa.style.display = "block";
    resultados.forEach((produto) => {
      const div = document.createElement("div");
      div.textContent = `${produto.nome} - ${produto.preco}`;
      div.addEventListener("click", () => {
        alert(`Você selecionou: ${produto.nome}`);
        resultadosPesquisa.style.display = "none"; 
      });
      resultadosPesquisa.appendChild(div);
    });
  } else {
    resultadosPesquisa.style.display = "block";
    resultadosPesquisa.innerHTML = "<div>Nenhum produto encontrado.</div>";
  }
});