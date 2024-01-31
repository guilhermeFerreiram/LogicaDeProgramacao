let listaAmigos = [];
let listaDeIndicesGerados = [];
let listaSorteio = [];
let listaStr = document.getElementById("lista-sorteio");
let listaAmg = document.getElementById("lista-amigos");
let botaoSortear = document.getElementById("botao-sortear");
let numeroMinimoParticipantes = 4;

function adicionar(){

    let nomeAmigo = document.getElementById("nome-amigo");

    if (nomeAmigo.value === ""){
        alert("Insira um nome");
        return;
    }

    if (listaAmigos.includes(nomeAmigo.value.trim())){
        alert("Evite colocar nomes repetidos, tente colocar o sobronome se precisar");
        return;
    }

    listaAmigos.push(nomeAmigo.value);
    listaAmg.textContent = listaAmigos;
    nomeAmigo.value = "";

    if (listaAmigos.length >= numeroMinimoParticipantes){
        botaoSortear.classList.remove("disable");
    }
}

function sortear(){

    if (listaAmigos.length < numeroMinimoParticipantes) {
        alert(`Adicione pelo menos ${numeroMinimoParticipantes} amigos`);
        return;
    }

    listaStr.textContent = "";
    listaSorteio = [];
    listaDeIndicesGerados = [];

   embaralha(listaAmigos);

    for (let i = 0; i < listaSorteio.length; i++){

        if (i == listaSorteio.length - 1){
            listaStr.innerHTML = listaStr.innerHTML + listaSorteio[i] + " --> " + listaSorteio[0];
        } else {
            listaStr.innerHTML = listaStr.innerHTML + listaSorteio[i] + " --> " + listaSorteio[i + 1] + "<br>";
        }
    }
}

function embaralha(lista){

    while (listaDeIndicesGerados.length < lista.length){
        let indiceAleatorio = Math.floor(Math.random() * (lista.length));

        if (listaDeIndicesGerados.includes(indiceAleatorio)){
            return embaralha(listaAmigos);
        } else{
            listaSorteio.push(lista[indiceAleatorio]);
            listaDeIndicesGerados.push(indiceAleatorio);
        }
    }
}

function reiniciar(){
    listaStr.textContent = "";
    listaAmg.textContent = "";
    listaAmigos = [];
    botaoSortear.classList.add("disable");
}