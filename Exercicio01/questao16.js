// Usando while
// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.


// O Crivo de Eratóstenes é uma ferramenta que possibilita verificar se números maiores são primos.
// Consiste em criar uma tabela com números de 2 até o número desejado (o número 1 não é primo).
// Em seguida, realizamos os seguintes passos:
// Excluímos todos os demais pares da tabela (múltiplos de 2).
// Excluímos os números múltiplos de 3.
// Excluímos os números terminados em 0 ou 5 (critério de divisibilidade por 5).
// Verificamos e excluímos os múltiplos de 7.
// O processo continua até obtermos os números primos desejados.

const prompt = require("prompt-sync")();

let qnt = 0;
let n = 100

while (qnt < 50) {
    if (!(n%2 == 0) && !(n%3 == 0) && !(n%5 == 0) && !(n%7 == 0) && !(n%9 == 0) && !(n%11 == 0) && !(n%13 == 0) && !(n%17 == 0) && !(n%19 == 0)){
        qnt += 1; 
        console.log(`O ${qnt} número primo é ${n}`)
    }
    n += 1;
}

