// Usando while
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let total = 0;
let qnt = 0;


while (true) {
    let n = Number(prompt("Digite um número ou 0 para sair: "))
    if (n == 0) break;
    total += n;
    qnt += 1;
}

console.log(`A média dos ${qnt} número(s) foi ${total/qnt}.`);