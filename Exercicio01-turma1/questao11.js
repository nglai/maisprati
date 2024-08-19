// Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

const prompt = require("prompt-sync")();

while (true) {
    let n = Number(prompt("Digite um número: "));
    if( n <= 0) break; 
    if (n%2 == 0){
        console.log("O número é par")
    } else {
        console.log("O número é impar")
    } 
}