let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?"));
const cartas = [];
const gifs = [
    {image:"bobrossparrot"},
    {image:"explodyparrot"},
    {image:"fiestaparrot"},
    {image:"metalparrot"},
    {image:"revertitparrot"},
    {image:"tripletsparrot"},
    {image:"unicornparrot"}
];

function checkCartas(){
    if (qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14){
        inserirGifs();
        let i = 0;
         while(i < qtdCartas){
            inserirCartas(i);
            i++;
        }    
    }else{
        alert("Insira um número par entre 4 e 14 para jogar");
        qtdCartas = Number(prompt("Com quantas cartas deseja jogar?"));
        checkCartas();
    }
}

function comparador(){
    return Math.random() - 0.5;
}

function inserirGifs() {
    for (let i = 0; i < qtdCartas / 2; i++) {
        let aux = 0;
        
        while (aux < 2) {
            cartas.push(gifs[i].image);
            aux++;
        }
    }
    cartas.sort(comparador);
}

function inserirCartas(i){
    let elemento = document.querySelector(".container");
    elemento.innerHTML += 
    `<div class="carta" onclick="viraCartas(this)">
        <div class="face">
            <img src="/images/front.png" alt="">
        </div>
        <div class="back-face face">
            <img src="/images/${cartas[i]}.gif" alt="">
        </div>
    </div>`;
}

let contadorTempo = 0;
let numJogadas = 0;
let acertos = 0;
let intervalo = 0;

function viraCartas(elemento){
    let selecionadoCartaVerso = document.querySelector(".selecionado-verso");
    let selecionadoCartaFrente = document.querySelector(".selecionado-frente")

    elemento.querySelector(".face").classList.add("selecionado-frente");
    elemento.querySelector(".back-face").classList.add("selecionado-verso")

    if(selecionadoCartaVerso !== null) {
        if (elemento.querySelector(".back-face").innerHTML === selecionadoCartaVerso.innerHTML){
            elemento.querySelector(".face").classList.add("match-frente");
            elemento.querySelector(".back-face").classList.add("match-verso");
            selecionadoCartaFrente.classList.add("match-frente");
            selecionadoCartaVerso.classList.add("match-verso");
            acertos++;
        }
        setTimeout(function() {
            elemento.querySelector(".face").classList.remove("selecionado-frente");
            elemento.querySelector(".back-face").classList.remove("selecionado-verso");
            document.querySelector(".selecionado-verso").classList.remove("selecionado-verso");
            document.querySelector(".selecionado-frente").classList.remove("selecionado-frente");
        }, 1000);
    }
    numJogadas++;
    checkGanhou();
}


function checkGanhou(){
    if(acertos === qtdCartas/2) {
        setTimeout( function(){
            alert(`Você ganhou em ${numJogadas} jogadas e levou ${contadorTempo} segundos!`);
        }, 50);
        setTimeout(function (){
            jogarDeNovo();
        }, 2000);
    }
}

function timer() {
    intervalo = setInterval(acrescentaTempo, 1000);
}
  
function acrescentaTempo() {
    contadorTempo++;
    document.querySelector(".timer").innerHTML = contadorTempo + "s";
}
  

function jogarDeNovo() {
    let jogarDeNovo = prompt("Quer jogar mais uma partida? (digite 'sim' ou 'não')");
    jogarDeNovo = jogarDeNovo.toLowerCase();

    if (jogarDeNovo === "sim"){    
        document.location.reload(true);
    }else if (jogarDeNovo === "não"){
        clearInterval(intervalo);
        alert("Obrigado por jogar!");
    }else{
        alert("Resposta inválida!");
        jogarDeNovo();
    }
}

checkCartas();
timer();
