const prompt = require("prompt-sync")();

/**
 * 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

// let peso;
// function pesoIdeal (alt, sexo) {
//     if (sexo == "h"){
//         return peso = 72.7 * alt - 58;
//     } else{
//         return peso = 62.1 * alt - 44.7;
//     }
// }
// let alt = parseFloat(prompt("Digite a altura: "));
// let sexo;
// do {
//     sexo = prompt("Digite o sexo: m (mulher) ou h (homem): ");
// } while (sexo != "m" && sexo != "M" && sexo != "h" && sexo != "H");
// pesoIdeal(alt, sexo);
// console.log(`O peso ideal é ${peso.toFixed(2)}.`)


/**
 * 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

// function classificador (dados) {
//     let totalPessoas = 0;
//     let totalSalarios = 0;
//     let totalFilhos = 0;
//     let maiorSalario = 0;
//     let salarioAte350 = 0;
//     totalPessoas = dados.length;
//     dados.forEach((item) => {
//         totalSalarios += item.salario;
//         if (item.salario > maiorSalario){
//             maiorSalario = item.salario;
//         }
//         if (item.salario <= 350){
//             salarioAte350++;
//         }
//     });
//     dados.forEach((item) => {totalFilhos += item.filhos});
//     console.log(` 
//     Resultado da pesquisa:
//     Média de salário da população: ${(totalSalarios/totalPessoas).toFixed(2)},
//     Média do número de filhos: ${totalFilhos/totalPessoas},
//     Maior salário: ${maiorSalario},
//     Percentual de pessoas com salário até 350 reais: ${((salarioAte350 * 100) / totalPessoas).toFixed(2)}%.
//     `)
// }
// let pesquisa = [
//     { salario: 550, filhos: 2 },
//     { salario: 310, filhos: 1 },
//     { salario: 790, filhos: 3 },
//     { salario: 984, filhos: 2 },
//     { salario: 1500, filhos: 3 },
//     { salario: 290, filhos: 1 }
// ]
// classificador(pesquisa);
    

/**
 * 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. Matriz 7x7.
*/

// let matriz = [];
// for(let i = 0; i < 7; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 7; j++){
//         matriz[i][j] = i === j ? 1 : 0;
//     }
// }
// let mi = "";
// matriz.forEach((item)=>{mi += item + "\n"});
// console.log("Matriz identidade: \n" + mi);


/**
 * 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. Matriz 6x8.
*/

// //Criacao da matriz 6x8 com número de -10 a 10
// let matriz = [];
// for(let i = 0; i < 6; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 8; j++){
//         matriz[i][j] = Math.floor((Math.random() * 21) - 10);
//     }
// }
// //Algoritmo para contagem de elementos negativos em cada linha
// let vetorc = []
// for(let i = 0; i < matriz.length; i++){
//     let count = 0;
//     for(let j = 0; j < matriz[i].length; j++){
//         matriz[i][j] < 0 ? count++ : false;
//     }
//     vetorc.push(count);
// }
// //Algoritmo para mostrar no console arrumado
// let matrizArrumada = "";
// matriz.forEach((item)=>{matrizArrumada += item + "\n"});
// console.log("Matriz arrumada: \n" + matrizArrumada);
// console.log("Vetor com elementos negativos da linha: \n" + vetorc);


/**
 * 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

//Criaçao da matriz 15x20 com numeros de 1 a 100
// let matriz = [];
// for(let i = 0; i < 15; i++){
//     matriz[i] = [];
//     for(let j = 0; j < 20; j++){
//         matriz[i][j] = Math.floor((Math.random() * 100) + 1);
//     };
// };
// //Criacao do array soma com 20 posiçoes iniciadas com 0
// let soma = [];
// for(let i = 0; i < 20; i++){soma[i] = 0};
// //Algoritmo que soma cada coluna separadamente
// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         soma[j] += matriz[i][j];
//     };
// };
// //Algoritmo para mostrar no console arrumado
// let matrizArrumada = "";
// matriz.forEach((item)=>{matrizArrumada += item + "\n"});
// console.log("Matriz arrumada 15x20: \n" + matrizArrumada);
// console.log("Soma de cada coluna: \n" + soma);