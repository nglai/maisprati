// Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N

const prompt = require("prompt-sync")();

for (let i = 0; i < 5; i++){
    let n = parseInt(prompt("Digite um número: "))
    for (let x = 1; x <= n ; x++){
        console.log(`${x} x ${n} = ${x*n}`)
    }
}