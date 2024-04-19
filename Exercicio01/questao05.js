// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
let media = (nota1 + nota2) / 2;
console.log(`A média foi : ${media}`)
let msg = (media >= 6) ? console.log("PARABÉNS! Você foi aprovado") : console.log("Você foi REPROVADO! Estude mais");