const gifs = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

function checkCartas(){
    let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?: "));
    if (qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14){
         let i = 0;
         while(i < qtdCartas){
            inserirCartas(i);
            i++;
        }    
    }else{
        alert("Insira um número par entre 4 e 14 para jogar");
        checkCartas();
    }
}

function inserirCartas(i){
    let elemento = document.querySelector(".container");
    elemento.innerHTML += 
    `<div class="carta" onclick="viraCartas()">
        <div class="verso face">
            <img src="/images/front.png" alt="">
        </div>
        <div class="frente face">
            <img src="/images/${gifs[i]}.gif" alt="">
        </div>
    </div>`;
}

function viraCartas(){

}

function comparador(){
    return Math.random() - 0.5;
}

function misturaCartas(){
    const listaCarta = document.querySelectorAll(".carta")
    listaCarta.slice.call().sort(comparador)
}

checkCartas();
// misturaCartas();