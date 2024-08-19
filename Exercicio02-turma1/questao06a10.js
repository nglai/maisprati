const prompt = require("prompt-sync")();

/**
 * 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/

// let valorAleatorio = Math.floor(Math.random() * 5 + 1);
// let jogador = parseInt(prompt("Escolha um número entre 1 e 5: "));
// console.log(`O número sorteado foi ${valorAleatorio} e você escolheu ${jogador}.`)
// if (valorAleatorio == jogador){
//     console.log("Parabéns, você acertou!")
// } else {
//     console.log("Que pena, você errou.")
// }


/**
 * 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:
 * Carros populares
 * - Até 100 Km percorridos: R$ 0,20 por Km
 * - Acima de 100 Km percorridos: R$ 0,10 por Km
 * Carros de luxo
 * - Até 200 Km percorridos: R$ 0,30 por Km
 * - Acima de 200 Km percorridos: R$ 0,25 por Km
*/

// let tipoCarro = prompt("Digite o tipo de carro escolhido (popular ou luxo): ");
// let dias = parseInt(prompt("Por quantos dias será o aluguel? "));
// let kmPercorridos = parseFloat(prompt("Quantos km foram percorridos? "));
// let total;
// if (tipoCarro === "popular" || tipoCarro === "Popular") {
//     if (kmPercorridos <= 100) {
//         total = (90 * dias) + (kmPercorridos * 0.2);
//     } else {
//         total = (90 * dias) + (kmPercorridos * 0.1);
//     }
//     console.log(`Para o carro popular, por ${dias} dias, com ${kmPercorridos} km percorridos, sairá um total de ${total.toFixed(2)} reais.`); 
// } else if(tipoCarro === "luxo" || tipoCarro === "Luxo") {
//     if (kmPercorridos <= 200) {
//         total = (150 * dias) + (kmPercorridos * 0.3);
//     } else {
//         total = (150 * dias) + (kmPercorridos * 0.25);
//     }
//     console.log(`Para o carro de luxo, por ${dias} dias, com ${kmPercorridos} km percorridos, sairá um total de ${total.toFixed(2)} reais.`)
// } else {
//     console.log("Tipo de carro inexistente, tente de novo digitando popular ou luxo.")
// }


/**
 * 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
 * - até 10 h de atividade no mês: ganha 2 pontos por hora
 * - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
 * - acima de 20 h de atividade no mês: ganha 10 pontos por hora
 * - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
 * Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
 * Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

// let horasNoMes = parseInt(prompt("Quantas horas de atividade física você fez no mês? "));
// let pontos;
// if (horasNoMes < 10){
//     pontos = horasNoMes * 2;
// } else if (horasNoMes <= 20){
//     pontos = horasNoMes * 5;
// } else {
//     pontos = horasNoMes * 10;
// }
// let fatura = pontos * 0.05;
// console.log(`Você fez ${pontos} pontos e faturou ${fatura.toFixed(2)} reais.`)


/**
 * 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

// let continuar = "s";
// let salMulher = 0;
// let salHomem = 0;
// do {
//     let salario = parseFloat(prompt("Digite o salário: "));
//     let sexo = prompt("Digite o sexo, 'f' para feminino ou 'm' para masculino: ");
//     if(sexo === "f" || sexo === "F"){
//         salMulher += salario;
//     } else if (sexo === "m" || sexo === "M"){
//         salHomem += salario;
//     } else {
//         console.log("Sexo inválido, digite 'f' para feminino ou 'm' para masculino.")
//     }
//     continuar = prompt("Que continuar? Digite 's' para sim e 'n' para não: ")
// } while (continuar === "s" || continuar === "S");
// console.log(`O salário pago para as mulheres foi de ${salMulher.toFixed(2)} e para os homens foi de ${salHomem.toFixed(2)}.`);


/**
 * 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
 * a) O somatório entre todos os valores;
 * b) Qual foi o menor valor digitado;
 * c) A média entre todos os valores;
 * d) Quantos valores são pares.
*/

// let continuar = 's';
// let soma = 0;
// let menor;
// let qntValores = 0;
// let pares = 0;
// do {
//     let numero = parseInt(prompt("Digite um número: "));
//     if (qntValores == 0){
//         menor = numero;
//     } else {
//         if(numero < menor){
//             menor = numero;
//         }
//     }
//     if(numero % 2 == 0){
//         pares += 1;
//     }
//     qntValores += 1;
//     soma += numero;
//     continuar = prompt("Quer continuar? Digite 's' para sim ou 'n' para não: ")
// } while (continuar === "s" || continuar === "S");
// console.log(`Foram digitados ${qntValores} números, com o somatório de ${soma}, com o menor número sendo ${menor}, com média de ${(soma/qntValores).toFixed(2)} e com ${pares} números pares.`)