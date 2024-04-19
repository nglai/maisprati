// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require("prompt-sync")();

let qtdEleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
let brancos = parseInt(prompt("Digite a quantidade de votos brancos:"));
let nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let validos = parseInt(prompt("Digite a quantidade de votos validos: "));

let percBrancos = (brancos * 100) / qtdEleitores;
let percNulos = (nulos * 100) / qtdEleitores;
let percvalidos = (validos * 100) / qtdEleitores;

console.log(`O percentual de votos brancos é: ${percBrancos}, o de nulos é: ${percNulos} e o de validos é: ${percvalidos}`);