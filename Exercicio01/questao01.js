// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

let temperaturaC;
do {
    temperaturaC = prompt("Digite a temperatura em celcius: ");
} while (isNaN(temperaturaC))
let temperaturaF = temperaturaC * 1.8 + 32;
console.log("A temperatura em graus Celsius", temperaturaC, ", corresponde a", temperaturaF.toFixed(2), "Fahrenheit.");