const prompt = require("prompt-sync")();

const questao = prompt("Escolha o número da questao que quer executar (1-15): ");

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
function questao1 () {
    let num = parseInt(prompt("Digite um número inteiro: "));
    if (num % 2 == 0){
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar");
    }
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
function questao2 () {
    let idade = parseInt(prompt("Digite a idade: "));
    if (idade < 12) {
        console.log("É uma criança.");
    } else if (idade < 18) {
        console.log("É um adolescente.");
    } else if (idade < 60) {
        console.log("É um adulto")
    } else {
        console.log("É um idoso.")
    }
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
function questao3 () {
    let nota = parseInt(prompt("Digite a nota (0-10): "));
    if (nota < 4) {
        console.log("Reprovado.");
    } else if (nota < 7) {
        console.log("Recuperação.");
    } else if (nota <= 10) {
        console.log("Aprovado.")
    } else {
        console.log("Não é uma nota válida.")
    }
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
function questao4 () {
    console.log("Escolha uma opção:");
    console.log("1. Logar");
    console.log("2. Cadastrar");
    console.log("3. Sair");
    const opcao = parseInt(prompt("Escolha a opcão: "));
    switch (opcao) {
        case 1:
            console.log("Você está logado!");
            break;
        case 2:
            console.log("Você se cadastrou!");
            break;
        case 3:
            console.log("Você saiu!");
            break;
        default:
            console.log("Opção inválida.")
            break;
    }
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
function questao5 () {
    const peso = parseFloat(prompt("Digite seu peso em kg: "));
    const altura = parseFloat(prompt("Digite sua altura em metros: "));
    const imc = peso / (altura * altura);
    console.log("Seu IMC é:", imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Você está com o peso normal.");
    } else if (imc >= 25 && imc < 30) {
        console.log("Você está com sobrepeso.");
    } else {
        console.log("Você está com obesidade.");
    }
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
function questao6 () {
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
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
function questao7 () {
    let macas = parseInt(prompt("Digite o número de maças compradas: "));
    let tot;
    if (macas < 12){
        tot = macas * 0.3
    } else {
        tot = macas * 0.25
    }
    console.log(`O valor total de ${macas} maças foi: R$: ${tot.toFixed(2)} reais.`)
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
function questao8 () {
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
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
function questao9 () {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
function questao10 () {
    let n = Number(prompt("Digite um número: "));
    for (let i = 0; i < 10; i++) {
        console.log(n)
    }
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
function questao11 () {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        let num = Number(prompt("Digite o " + (i+1) + " número: "))
        soma += num
    }
    console.log("A soma dos 5 números é: " + soma);
}

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
function questao12 () {
    let num = parseInt(prompt("Digite o número (1 - 10) que você quer ver a tabuada: "))
    for (let i = 1; i < 11; i++){
        console.log(`${i} x ${num} = ${i*num}`);
    }
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
function questao13 () {
    let qnt = 0;
    let soma = 0;
    while (true) {
        let n = Number(prompt("Digite um número ou 0 para sair: "))
        if (n == 0) break;
        qnt += 1;
        soma += n;
    }
    console.log(`A média aritmética do(s) ${qnt} número(s) foi ${(soma/qnt).toFixed(2)}.`);
}

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
function questao14 () {
    let num = Number(prompt("Digite um número para calcular o fatorial: "))
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${num} é ${fatorial}.`);
}

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
function questao15 () {
    let a = 0;
    let b = 1;
    let ab;
    for (let i = 0; i < 10; i++) {
      console.log(a); 
      ab = a + b;
      a = b;
      b = ab;
    }
}

switch (questao) {
    case "1":
        questao1();
        break;
    case "2":
        questao2();
        break;
    case "3":
        questao3();
        break;
    case "4":
        questao4();
        break;
    case "5":
        questao5();
        break;
    case "6":
        questao6();
        break;
    case "7":
        questao7();
        break;
    case "8":
        questao8();
        break;
    case "9":
        questao9();
        break;
    case "10":
        questao10();
        break;
    case "11":
        questao11();
        break;
    case "12":
        questao12();
        break;
    case "13":
        questao13();
        break;
    case "14":
        questao14();
        break;
    case "15":
        questao15();
        break;
    default:
        console.log("Essa questão não existe, tente de novo.")
        break;
}