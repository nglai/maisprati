// Usando while
// Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

// media ponderada  = n * peso / n

const prompt = require("prompt-sync")();

let npeso = 0;
let qnt = 0;
let somaN = 0;

while (true) {
    let n = Number(prompt("Digite um número ou 0 para sair: "))
    if (n == 0) break;
    let peso = Number(prompt("Digite um número peso: "))
    qnt += 1;
    somaN += n;
    npeso += n*peso; 
}

console.log(`A média ponderada do(s) ${qnt} número(s) foi ${npeso/somaN}.`);