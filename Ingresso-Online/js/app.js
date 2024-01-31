function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (tipoIngresso == "pista"){
        
        comprarPista(quantidade);
    
    } else if (tipoIngresso == "superior"){

        comprarSuperior(quantidade);

    } else if (tipoIngresso == "inferior"){

        comprarInferior(quantidade);

    }
}

function comprarPista(qtd){

    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qtd > quantidadePista){
        alert("Quantidade indisponível");
    } else {
        quantidadePista = quantidadePista - qtd;
        document.getElementById("qtd-pista").textContent = quantidadePista;
    }

}

function comprarSuperior(qtd){

    let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (qtd > quantidadeSuperior){
        alert("Quantidade indisponível");
    } else {
        quantidadeSuperior = quantidadeSuperior - qtd;
        document.getElementById("qtd-superior").textContent = quantidadeSuperior;
    }

}

function comprarInferior(qtd){

    let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (qtd > quantidadeInferior){
        alert("Quantidade indisponível");
    } else {
        quantidadeInferior = quantidadeInferior - qtd;
        document.getElementById("qtd-inferior").textContent = quantidadeInferior;
    }

}