const prompt = require("prompt-sync")();

const questao = prompt("Escolha o número da questao que quer executar (1-10): ");


/*1. Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo. */
function questao1 () {
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

/*2. Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
Dica: Um número primo só é divisível por 1 e por ele mesmo. */
function questao2 () {
    let num = Number(prompt("Digite um número inteiro maior que 1: "))
    if (num <= 1) {
        console.log("O número deve ser maior que 1.");
        return;
    }
    
    let divisores = 0;
    const raizQuadrada = Math.sqrt(num);

    for (let i = 2; i <= raizQuadrada; i++) {
        if (num % i === 0) {
            divisores++;
            break;
        }
    }

    if (divisores === 0) {
    console.log("O número", num, "é primo!");
    } else {
    console.log("O número", num, "não é primo!");
    }
}

/*3. Escreva um programa que use um loop for para imprimir um triângulo de números.
Dica: Utilize dois loops for, um dentro do outro. */
function questao3 () {
    const altura = parseInt(prompt("Digite a altura do triângulo: "));
    for (let i = 1; i <= altura; i++) {
        let linha = "";
        for (let j = 1; j <= i; j++) {
            linha += j + " ";
        }
        console.log(linha);
    }
}

/*4. Com While: Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n. */
function questao4 () {
    
}
 /*5. Com While: Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
Dica: Use operações de módulo e divisão para extrair os dígitos. */
function questao5 () {
    
}

/*6. Com While: Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.*/
function questao6 () {
    
}

/*7. Com Do While: Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
Dica: Use operações de divisão para reduzir o número até que ele seja zero.
 */
function questao7 () {
    
}

/*8. Com Do While: Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
Dica: Use operações de módulo para extrair os dígitos e depois some-os. */
function questao8 () {
    
}

/*9. Com Do While: Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
Dica: Utilize dois loops, um dentro do outro. */
function questao9 () {
    
}

/*10. Com Do While: Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais. */
function questao10 () {
    
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
    default:
        console.log("Essa questão não existe, tente de novo.")
        break;
}