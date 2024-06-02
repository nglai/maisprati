/**
 * 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
*/

// let vetorResposta = [12, 18, 25, 34, 47, 53, 59, 68, 70, 72, 84, 86, 97];
// for(let i = 0; i < 100; i++){
//     let apostador = []
//     for(let j = 0; j < 13; j++){
//         let numeroRandom = Math.floor(Math.random() * 90 + 10);
//         if(!apostador.includes(numeroRandom)){
//             apostador.push(numeroRandom);
//         } else {j--};
        
//     };
//     apostador.sort();
//     console.log(apostador)

//     let acertos = 0;
//     for (let k = 0; k < 13; k++) {
//         if (apostador.includes(vetorResposta[k])) {
//             acertos++;
//         }
//     }
//     console.log("Apostador número:", i+1);
//     console.log("Acertos: ", acertos);
//     if(acertos == 13){console.log("Parabéns, tu foi o GANHADOR")};
// }


/**
 * 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

// let vetorG = ["a", "b", "e", "c", "a", "d", "e", "d", "c", "c", "a", "e", "b", "c", "b", "e", "d", "a", "a", "e"];
// const alfabeto = 'abcde';
// for(let i = 0; i < 50; i++){
//     let vetorAluno = [];
//     for (let j = 0; j < 20; j++) {
//         const indiceAleatorio = Math.floor(Math.random() * 5);
//         const letraAleatoria = alfabeto[indiceAleatorio];
//         vetorAluno.push(letraAleatoria);
//     }
//     console.log(vetorAluno)

//     let acertos = 0;
//     for(let k = 0; k < 20; k++){
//         if (vetorAluno[k] === vetorG[k]) {
//             acertos++;
//         }
//     }
//     console.log("Acertos:", acertos);
//     if(acertos >= 12){
//         console.log("APROVADO!")
//     }else{
//         console.log("REPROVADO!")
//     }
// }


/**
 * 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
 * 1- soma dos elementos;
 * 2- produto dos elementos;
 * 3- média dos elementos;
 * 4- ordene os elementos em ordem crescente;
 * 5- mostre o vetor.
*/

// const prompt = require("prompt-sync")();
// let vetor = [25, 18, 26, 74, 39, 68];
// let opcao = parseInt(prompt(`Digite o numero da operacao (1-5): `));
// function calculadora (vetor, opcao){
//     switch(opcao){
//         case 1:
//             let soma = vetor.reduce((acumulador, elemento) => acumulador + elemento, 0);
//             console.log("A soma dos elementos do vetor é:", soma);
//             break;
//         case 2:
//             let produto = vetor.reduce((acumulador, elemento) => acumulador * elemento, 1);
//             console.log("O produto dos elementos do vetor é:", produto);
//             break;
//         case 3:
//             let soma2 = vetor.reduce((acumulador, elemento) => acumulador + elemento, 0);
//             console.log("O produto dos elementos do vetor é:", (soma2 / vetor.length).toFixed(2));
//             break;
//         case 4:
//             let vetorOrdenado = vetor.sort();
//             console.log("O vetor ordenado é:", vetorOrdenado);
//             break;
//         case 5:
//             console.log("O vetor é:", vetor);
//             break;
//         default:
//             console.log("Escolha uma opção de 1 a 5!");
//             break;
//     }
// }
// calculadora(vetor, opcao);


/**
 * 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

// let vetorA = [];
// for(let i = 0; i < 100; i++){
//     vetorA[i] = Math.floor(Math.random() * 100 - 50);
// };
// console.log("Vetor A:", vetorA);
// let vetorB = [];
// for(let j = 0; j < vetorA.length; j++){
//     if(vetorA[j] > 0){
//         vetorB.push(vetorA[j]);
//     }
// };
// console.log("Vetor B:", vetorB);


/**
 * 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
 */

// let vetorResposta = [25, 31, 36, 44, 49];
// for(let i = 0; i < 50; i++){
//     let apostador = []
//     for(let j = 0; j < 5; j++){
//         let numeroRandom = Math.floor(Math.random() * 50 + 10);
//         if(!apostador.includes(numeroRandom)){
//             apostador.push(numeroRandom);
//         } else {j--};
        
//     };
//     apostador.sort();
//     console.log(apostador)

//     let acertos = 0;
//     for (let k = 0; k < 5; k++) {
//         if (apostador.includes(vetorResposta[k])) {
//             acertos++;
//         }
//     }
//     console.log("Apostador número:", i+1);
//     console.log("Acertos: ", acertos);
//     if(acertos == 5){console.log("GANHADOR")};
// }