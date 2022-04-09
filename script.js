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
    let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?: "));
    if (qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14){
        inserirGifs(qtdCartas);
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

function comparador(){
    return Math.random() - 0.5;
}

function inserirGifs(qtdCartas) {
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
    `<div class="carta" onclick="viraCartas()">
        <div class="verso face">
            <img src="/images/front.png" alt="">
        </div>
        <div class="frente face">
            <img src="/images/${cartas[i]}.gif" alt="">
        </div>
    </div>`;
}

function viraCartas(){
    //viro a primeira carta
    //if (segunda carta %2 === 0){ as duas ficam viradas para cima }
    //else {o usuario errou. aguarde 1 segundo. vire para baixo as duas cartas clicadas}
    
    
    //comparara objetos para saber se o usuario
}

checkCartas();
