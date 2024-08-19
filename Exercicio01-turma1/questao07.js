// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let macas = parseInt(prompt("Digite o número de maças compradas: "));
let tot;

if (macas < 12){
    tot = macas * 0.3
} else {
    tot = macas * 0.25
}
console.log(`O valor total de ${macas} maças foi: R$: ${tot.toFixed(2)} reais.`)