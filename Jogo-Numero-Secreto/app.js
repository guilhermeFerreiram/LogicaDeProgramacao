let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Escolha um número de 0 a ${numeroLimite}`);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == ""){
        alert("Insira um número");
        return;
    }

    if (chute > numeroLimite){
        alert(`Escolha um número de 0 a ${numeroLimite}`);
        return;
    }
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentaivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentaivas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {

        exibirTextoNaTela("p", "Verificando...");

        setTimeout(function(){
            if (chute > numeroSecreto){
                exibirTextoNaTela("p", "O número secreto é menor");
            } else {
                exibirTextoNaTela("p", "O número secreto é maior");
            }
        }, 1000);

        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemntosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElemntosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //inclui sempre ao final da lista
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}