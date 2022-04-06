let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?: "))


if (qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14){
    alert("passou!")
    //inserir cartar
}else{
    alert("Insira um número par entre 4 e 14 para jogar")
    //perguntar de novo
}

