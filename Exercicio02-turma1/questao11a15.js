const prompt = require("prompt-sync")();

/**
 * 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

// let pt = parseInt(prompt("Digite o primeiro termo: "));
// let razao = parseInt(prompt("Digite a razao da progressão aritmetica: "));
// let contador = 0;
// let soma = 0
// for (let i = pt; contador < 10; i += razao){
//     contador ++;
//     soma += i;
//     console.log(i);
// }
// console.log(`A soma dos 10 primeiros números da P.A. foi ${soma}.`);


/**
 * 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

// let penultimo = 1;
// let ultimo = 1;
// let n;
// for (let i = 0; i < 10; i++){
//     if (i < 2){
//        console.log(ultimo); 
//     } else {
//         n = penultimo + ultimo;
//         console.log(n);
//         penultimo = ultimo;
//         ultimo = n;
//     }
// }
    

/**
 *  13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
*/

// let array = []
// let penultimo = 1;
// let ultimo = 1;
// let n;
// for (let i = 0; i < 15; i++){
//     if (i < 2){
//        array[i] = ultimo;
//     } else {
//         n = penultimo + ultimo;
//         array[i] = n
//         penultimo = ultimo;
//         ultimo = n;
//     }
// }
// console.log(array);


/**
 * 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
*/

// let vetor = []
// for (let i = 0; i < 7; i++){
//     vetor[i] = prompt(`Digite o ${i+1} nome: `);
// }
// let vetor1 =  vetor.reverse();
// console.log(vetor1);


/**
 * 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/
 
// let vetor = [];
// for (let i = 0; i < 10; i++){
//     vetor[i] = parseInt(prompt(`Digite o ${i+1} número: `));
// }
// console.log(`O vetor foi: ${vetor}`);
// vetor.forEach((item, index)=>{
//     if(item % 2 == 0){
//         console.log(`O número ${item} é par e está na posição ${index}`);
//     }
// })