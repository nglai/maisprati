// Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
let media = (nota1 + nota2) / 2;
console.log(`A média foi : ${media}`);
if (media >= 6)
    console.log("PARABÉNS! Você foi aprovado");