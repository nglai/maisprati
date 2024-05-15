/**
 * 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
*/

// let matrizA = [[5, 8, 5, 7, 2], [9, 7, 2, 6, 7], [8, 0, 7, 2, 7]];
// let matrizB = [[5, 7, 1, 7, 9], [4, 8, 1, 3, 7], [4, 7, 2, 0, 1]];
// let matrizP = [[], [], []];
// for(let i = 0; i < matrizA.length; i++){
//     for(let j = 0; j < matrizA[i].length; j++){
//         matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
//     }
// }
// console.log(matrizP);


/**
 * 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.
*/

// let matriz = [];
// for(let i = 0; i < 6; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 6; j++){
//         matriz[i][j] = Math.floor((Math.random() * 10) + 1);
//     };
// };
// console.log(matriz);
// function multiplicaMatriz (matriz, valor){
//     let vetor = []
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             vetor.push(matriz[i][j] * valor);
//         };
//     };
//     console.log(vetor);
// }
// multiplicaMatriz(matriz, 2);


/**
 * 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
 * a) a soma dos elementos acima da diagonal principal;
 * b) a soma dos elementos abaixo da diagonal principal;
*/

// let matriz = [];
// for(let i = 0; i < 10; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 10; j++){
//         matriz[i][j] = Math.floor((Math.random() * 10) + 1);
//     };
// };
// console.log(matriz);
// function calculaSomas(matriz){
//     let somaAcima = 0;
//     let somaAbaixo = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if(j > i){
//                 somaAcima += matriz[i][j];
//             } else if(i > j){
//                 somaAbaixo += matriz[i][j];
//             };
//         };
//     };
//     console.log(`A soma dos elementos acima é: ${somaAcima} e a soma dos elementos abaixo é: ${somaAbaixo}.`);
// }
// calculaSomas(matriz);


/**
 * 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
 * a) da linha 4 de M;
 * b) da coluna 2 de M;
 * c) da diagonal principal;
 * d) todos os elementos da matriz M.
 * Escrever essas somas e a matriz.
*/

// let matriz = [];
// for(let i = 0; i < 5; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 5; j++){
//         matriz[i][j] = Math.floor((Math.random() * 10) + 1);
//     };
// };
// console.log(matriz);
// function somas(matriz){
//     let somaLinha4 = 0;
//     let somaColuna2 = 0;
//     let somaDiagonal = 0;
//     let somaTotal = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if(i == 3){somaLinha4 += matriz[i][j]};
//             if(j == 1){somaColuna2 += matriz[i][j]};
//             if(i == j){somaDiagonal += matriz[i][j]};
//             somaTotal += matriz[i][j];
//         };
//     };
//     console.log("Soma da linha 4: " + somaLinha4);
//     console.log("Soma da coluna 2: " + somaColuna2);
//     console.log("Soma da diagonal: " + somaDiagonal);
//     console.log("Soma total: " + somaTotal); 
// }
// somas(matriz);

/**
 * 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.
*/

// let matriz = [];
// for(let i = 0; i < 5; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 5; j++){
//         matriz[i][j] = Math.floor((Math.random() * 10) + 1);
//     };
// };
// console.log(matriz);
// function somas (matriz) {
//     let sl = [];
//     let sc = [0,0,0,0,0];
//     for(let i = 0; i < matriz.length; i++){
//         let somaTemp = 0;
//         for(let j = 0; j < matriz[i].length; j++){
//             somaTemp += matriz[i][j];
//             sc[j] += matriz[i][j];
//         };
//         sl.push(somaTemp);
//     };
//     console.log(`A soma das linhas foi: ${sl} e a soma das colunas foi: ${sc}.`)
// }
// somas(matriz);