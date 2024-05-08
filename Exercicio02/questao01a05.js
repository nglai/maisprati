const prompt = require("prompt-sync")();

/**
 * 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
 * Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
 * Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. 
*/

/**
 * Se 1h tem 60 minutos, a cada 1 cigarro perde 10 minutos de vida, 6 cigarros perde 1 hora de vida.
 * 1 dia tem 24 horas, entao 6 * 24 = 144 cigarros para perder 1 dia de vida.
*/

// let qntCigarrosDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
// let anosFumou = parseFloat(prompt("Por quantos anos você fumou? "));
// let totalCigarrosFumados = qntCigarrosDia * (anosFumou * 360);
// let diasPerdidos = Math.floor(totalCigarrosFumados / 144);
// console.log(`Você fumou um total de ${totalCigarrosFumados} cigarros e perdeu em média ${diasPerdidos} dias de vida.`);


/**
 * 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

// let velocidade = parseFloat(prompt("Qual a velocidade do carro? "));
// if (velocidade > 80){
//     let multa = (velocidade - 80) * 5;
//     console.log(`Você foi multado! E a multa foi de ${multa.toFixed(2)} reais`);
// }


/**
 * 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

// let distancia = parseFloat(prompt("Quantos km deseja percorrer? "));
// let passagem;
// if (distancia <= 200){
//     passagem = distancia * 0.5;
// } else {
//     passagem = distancia * 0.45;
// }
// console.log(`O preço da passagem de ${distancia} km será ${passagem.toFixed(2)} reais.`)


/**
 * 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
 * Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

// let l1 = parseFloat(prompt("Digite o valor do lado 1: "));
// let l2 = parseFloat(prompt("Digite o valor do lado 2: "));
// let l3 = parseFloat(prompt("Digite o valor do lado 3: "));
// if (l1 < (l2 + l3) && l2 < (l1 + l3) && l3 < (l1 + l2)){
//     console.log("Os três segmentos formam um triangulo.")
// }else{
//     console.log("Os três segmentos NÃO forma um triangulo.")
// }


/**
 * 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

// let computador = Math.floor(Math.random() * 3);
// let suaEscolha = parseInt(prompt("Digite o número correspondente - 0 (pedra), 1 (papel), 2 (tesoura): "));
// console.log(`O computador jogou ${computador} e você jogou ${suaEscolha}`);
// if ((computador == 0 && suaEscolha == 2) || (computador == 1 && suaEscolha == 0) || (computador == 2 && suaEscolha == 1)) {
//     console.log(`Portanto, computador ganhou!`)
// } else if ((suaEscolha == 0 && computador == 2) || (suaEscolha == 1 && computador == 0) || (suaEscolha == 2 && computador == 1)){
//     console.log(`Portanto, você ganhou!`)
// } else {
//     console.log(`Portanto, empatou!`)
// }
