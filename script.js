// JavaScript
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  total += calcularPreco(produto);

  const listaCarrinho = document.getElementById("lista-carrinho");
  const itemCarrinho = document.createElement("li");
  itemCarrinho.textContent = produto;
  listaCarrinho.appendChild(itemCarrinho);

  const totalCarrinho = document.getElementById("total-carrinho");
  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function calcularPreco(produto) {
  // Implemente a lógica para calcular o preço do produto
  // Retorne o valor correspondente ao preço do produto
  // Por exemplo, se o produto for "batom", retorne 10.00
  // Se o produto for "base", retorne 15.00
  // Se o produto for "paleta", retorne 25.00
  switch (produto) {
    case "batom":
      return 10.0;
    case "base":
      return 15.0;
    case "paleta":
      return 25.0;
    default:
      return 0.0;
  }
}
