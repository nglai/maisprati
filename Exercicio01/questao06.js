// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Digite o valor do primeiro lado: "));
let b = parseFloat(prompt("Digite o valor do segundo lado: "));
let c = parseFloat(prompt("Digite o valor do terceiro lado: "));

if (a < (b + c) && b < (a + c) && c < (a + b)){
    console.log(`Os lados ${a}, ${b} e ${c} formam um triangulo.`);
    if (a == b && b == c) {
        console.log("E é um triangulo equilátero.");
    } else if (a != b && b != c){
        console.log("E é um triangulo escaleno.");
    } else if (a == b || a == c || b == c) {
        console.log("E é um triangulo isóceles.");
    }
} else {
    console.log(`Os lados ${a}, ${b} e ${c} não formam um triangulo.`);
}