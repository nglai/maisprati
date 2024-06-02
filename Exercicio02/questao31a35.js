/**
 * 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
*/

// let matrizV = [];
// for(let i = 0; i < 30; i++){
//     matrizV[i] = [];
//     for(let j = 0; j < 30; j++){
//         matrizV[i][j] = Math.floor((Math.random() * 100) + 1);
//     };
// };
// console.log(matrizV);
// let number = 10;
// let count = 0;
// for(let i = 0; i < matrizV.length; i++){
//     for(let j = 0; j < matrizV[i].length; j++){
//         if(matrizV[i][j] == number){count++}
//     };
// };
// console.log(`Os números iguais a ${number} foi ${count}.`);
// let matrizX = [];
// for (let i = 0; i < 30; i++) {
//     matrizX[i] = [];
//     for (let j = 0; j < 30; j++) {
//         if (matrizV[i][j] !== number) {
//             matrizX[i][j] = matrizV[i][j];
//         }
//     }
// }
// console.log(matrizX);


/**
 * 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.
*/

// let matriz = [];
// for(let i = 0; i < 12; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 13; j++){
//         matriz[i][j] = Math.floor((Math.random() * 101) - 50);
//     };
// };
// console.log("Matriz lida: ");
// console.log(matriz);
// let matrizModificada = [];
// for(let i = 0; i < matriz.length; i++){
//     matrizModificada[i] = [];
//     let maior = 0;
//     for(let j = 0; j < matriz[i].length; j++){
//         if(Math.abs(matriz[i][j]) > maior){maior = Math.abs(matriz[i][j])}
//         matrizModificada[i][j] = matriz[i][j] / maior;
//     };
//     console.log(`Maior elemento da linha ${i+1}: ${maior}`)
// };
// console.log("Matriz modificada: ");
// console.log(matrizModificada);


/**
 * 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

// let matriz = [];
// for(let i = 0; i < 3; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 3; j++){
//         matriz[i][j] = Math.floor(Math.random() * 10);
//     };
// };
// console.log(matriz)
// let soma = 0;
// for (let i = 0; i < 3; i++) {
//     soma += matriz[i][2 - i];
// }
// let mediaDiagonalSecundaria = soma/3;
// console.log(`Média dos elementos da diagonal secundária: ${mediaDiagonalSecundaria}`);
// let multiplicacaoDiagonalPrincipal = 1;
// for (let i = 0; i < 3; i++) {
//     multiplicacaoDiagonalPrincipal *= matriz[i][i];
// }
// console.log(`Multiplicacao dos elementos da diagonal principal: ${multiplicacaoDiagonalPrincipal}`)
// console.log(`Resultado da multiplicacao da média dos elementos da diagonal secundária pelos elementos da diagonal principal: ${(mediaDiagonalSecundaria * multiplicacaoDiagonalPrincipal).toFixed(2)}`);


/**
 * 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.
*/

// let matriz = [];
// for(let i = 0; i < 50; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 50; j++){
//         matriz[i][j] = Math.floor(Math.random() * 10 + 1);
//     };
// };
// let matrizNova = [];
// for(let i = 0; i < 50; i++){
//     matrizNova[i] = [];
//     for(let j = 0; j < 50; j++){
//         matrizNova[i][j] = matriz[i][j] * matriz[i][i];
//     };
// };
// console.log("Matriz Original",matriz);
// console.log("Matriz Nova", matrizNova);


/**
 * 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/

// const prompt = require("prompt-sync")();
// let vetorImpar = [];
// let vetorPar = [];
// function verificaCheio (vetor) {
//     if (vetor.length >= 5){
//         console.log("vetor está cheio!")
//         return true;
//     } else {return false;}
// }

// for (let i = 0; i < 30; i++) {
//     let valor = parseInt(prompt(`Digite o ${i + 1}º valor:`));

//     if (valor % 2 === 0) {
//         if (!verificaCheio(vetorPar)) {
//             vetorPar.push(valor);
//         } else {
//             console.log("Vetor de pares está cheio:", vetorPar);
//             vetorPar = [];
//         }
//     } else {
//         if (!verificaCheio(vetorImpar)) {
//             vetorImpar.push(valor);
//         } else {
//             console.log("Vetor de ímpares está cheio:", vetorImpar);
//             vetorImpar = []
//         }
//     }
// }
// console.log("Vetor de pares:", vetorPar);
// console.log("Vetor de impares:", vetorImpar);