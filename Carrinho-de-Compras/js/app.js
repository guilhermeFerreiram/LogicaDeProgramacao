function adicionar(){

    //Assume o valor de preço, nome do produto e quantidade
    let formulario = document.getElementById("produto");
    let produtoSelecionado = formulario.value;
    let quantidade = document.getElementById("quantidade").value;

    let nome = produtoSelecionado.split(" - R$")[0];
    let preco = produtoSelecionado.split(" - R$")[1];

    /*
    let parte = produtoSelecionado.split(" - R$");
    let nome = parte[0];
    let preco = parseFloat(parte[1]);
    */

    if (quantidade == ""){
      alert("Insira uma quantidade válida");
      return;
    }
    
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
  </section>`

    /*
    //Cria o formato HTML para ser adicionado no carrinho
    let listaProdutos = document.getElementById("lista-produtos");
    let produtoAdicionado = document.createElement("section");
    produtoAdicionado.classList.add("carrinho__produtos__produto");

    let spanQuantidade = document.createElement("span");
    spanQuantidade.classList.add("texto-azul");
    spanQuantidade.innerHTML = quantidade + "x";
    let spanPreco = document.createElement("span");
    spanPreco.classList.add("texto-azul");
    spanPreco.innerHTML = "R$" + preco * quantidade;
    let textNome = document.createTextNode(" " + nome + " ");

    //Adiciona no carrinho
    produtoAdicionado.appendChild(spanQuantidade);
    produtoAdicionado.appendChild(textNome);
    produtoAdicionado.appendChild(spanPreco);
    listaProdutos.appendChild(produtoAdicionado);
    */

    //Calcula o Valor Total
    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = "R$" + (parseFloat(valorTotal.textContent.replace("R$", "")) + preco * quantidade).toString();
}

function limpar(){
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = "";

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = "R$0";
}