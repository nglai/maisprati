// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let n1;
let n2;

do {
    console.log("Digite dois número diferentes.");
    n1 = Number(prompt("Digite o primeiro número: "));
    n2 = Number(prompt("Digite o segundo número: "));
} while (n1 === n2)

if (n1 > n2) {
    console.log(`O número ${n1} é maior que ${n2}`);
} else {
    console.log(`O número ${n2} é maior que ${n1}`);
}