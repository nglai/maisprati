// Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
// 1 - Sul
// 2 - Norte
// 3 - Leste
// 4 - oeste
// 5 ou 6 - nordeste
// 7 ,8 ou 9 - sudeste
// 10 até 20 - centro-oeste
// 25 a 50 - Nordeste
// Fora dos intervalos - produto importado

const prompt = require("prompt-sync")();

let n = Number(prompt("Digite o código de origem: "));

if( n == 1){
    console.log("Sul");
} else if (n == 2){
    console.log("Norte");
} else if (n == 3){
    console.log("Leste");
} else if (n == 4){
    console.log("Oeste");
} else if (n == 5 || n == 6){
    console.log("Nordeste");
} else if (n == 7 || n == 8 || n == 9){
    console.log("Sudeste");
} else if (n > 9 && n < 21) {
    console.log("Centro-Oeste");
} else if (n > 24 && n < 51) {
    console.log("Nordeste");
} else {
    console.log("Produto importado");
}