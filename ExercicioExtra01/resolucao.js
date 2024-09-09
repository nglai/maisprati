const prompt = require("prompt-sync")();

const questao = prompt("Escolha o número da questao que quer executar (1-10): ");


// 1. Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma mensagem apropriada para cada caso.
function questao1 () {
    const num = Number(prompt("Digite um número: "));
    if(num > 0){
        console.log("O número informado é positivo");
    } else if (num < 0) {
        console.log("O número informado é negativo");
    } else if (num === 0) {
        console.log("O número informado é zero");
    } else {
        console.log("Não é um número.");
    }
}

// 2. Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.
function questao2 () {
    const ano = Number(prompt("Digite um ano: "));
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log(`O ano ${ano} é bissexto!`);
    } else {
        console.log(`O ano ${ano} não é bissexto!`);
    }
}

// 3. Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.
function questao3 () {
    const nota1 = Number(prompt("Digite a primeira nota (0-100): "));
    const nota2 = Number(prompt("Digite a segunda nota (0-100): "));
    const nota3 = Number(prompt("Digite a terceira nota (0-100): "));
    let media = (nota1 + nota2 + nota3)/3;
    console.log(`A média foi ${media.toFixed(2)}.`);
    if (media >= 90) {
        console.log("Foi uma nota A!")
    } else if (media >= 60) {
        console.log("Foi uma nota B!")
    } else if (media >= 40) {
        console.log("Foi uma nota C!")
    } else if (media >= 20) {
        console.log("Foi uma nota D!")
    } else if (media >= 10) {
        console.log("Foi uma nota E!")
    } else {
        console.log("Foi uma nota F!")
    }
}

// 4. Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.
function questao4 () {
    let num = parseInt(prompt("Digite um número: "))
    if (num % 2 == 0){
        console.log("O número é par!")
    } else {
        console.log("O número é ímpar!")
    }
}

/*5. Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
Infantil A: 5 - 7 anos
Infantil B: 8 - 10 anos
Juvenil A: 11 - 13 anos
Juvenil B: 14 - 17 anos
Adulto: 18 anos ou mais*/
function questao5 () {
    let idade = Number(prompt("Digite a idade: "))
    if(idade >= 5 && idade <= 7){
        console.log("Infantil A")
    } else if (idade >= 8 && idade <= 10){
        console.log("Infantil B")
    } else if (idade >= 11 && idade <= 13){
        console.log("Juvenil A")
    } else if (idade >= 14 && idade <= 17){
        console.log("Juvenil B")
    } else if (idade >= 18){
        console.log("Adulto")
    } else {
        console.log("Não é uma idade ou é menor que 5 anos")
    }
}

/*6. Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 = Domingo, 2 = Segunda-feira, etc.)*/
function questao6 () {
    let n = parseInt(prompt("Digite um número de 1 a 7: "))
    let dia;
    switch (n) {
        case 1:
            dia = "Domingo"
            break;
        case 2:
            dia = "Segunda-feira"
            break;
        case 3:
            dia = "Terça-feira"
            break;
        case 4:
            dia = "Quarta-feira"
            break;
        case 5:
            dia = "Quinta-feira"
            break;
        case 6:
            dia = "Sexta-feira"
            break;
        case 7:
            dia = "Sábado"
            break;
        default:
            console.log("Erro! Digite o número certo!")
            break;
    }
    if(dia != null){
        console.log(`O número ${n} corresponde ao dia ${dia}!`
        )
    }
}

/*7. Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.*/
function questao7 () {
    let n1 = Number(prompt("Digite o 1 número: "))
    let n2 = Number(prompt("Digite o 2 número: "))
    let operacao = prompt("Digite a operação "+
        "+, -, *, /: ")
    let resultado;
    switch (operacao) {
        case "+":
            resultado = n1 + n2
            break;
        case "-":
            resultado = n1 - n2
            break;
        case "*":
            resultado = n1 * n2
            break;
        case "/":
            resultado = n1 / n2
            break;
        default:
            console.log("Digite uma operacao válida!")
            break;
    }
    if(resultado != null){
        console.log(`O resultado foi: `+
            `${resultado.toFixed(2)}`
        )
    }
}

/*8. Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)*/
function questao8 () {
    let n = Number(prompt("Digite um número de 1 a 4: "))
    let estacao
    switch (n) {
        case 1:
            estacao = "Primavera"
            break;
        case 2:
            estacao = "Verão"
            break;
        case 3:
            estacao = "Outono"
            break;
        case 4:
            estacao = "Inverno"
            break;
        default:
            console.log("Digite um número certo (1-4).")
            break;
    }
    if(estacao != null){
        console.log(`O número ${n} corresponde a estação ${estacao}!`)
    }
}

// 9. Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
// Criança: 0 - 12 anos
// Adolescente: 13 - 17 anos
// Adulto: 18 - 59 anos
// Idoso: 60 anos ou mais
// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.
function questao9 () {
    const ano = Number(prompt("Digite uma idade: "));
    let faixa;
    if (ano < 13) {
        faixa = "crianca";
    } else if (ano < 18) {
        faixa = "adolescente";
    } else if (ano < 60) {
        faixa = "adulto";
    } else if (ano >= 60) {
        faixa = "idoso";
    } else {
        console.log("Digite uma idade válida.")
    }
    switch (faixa) {
        case "crianca":
            console.log("Criança.");
            break;
        case "adolescente":
            console.log("Adolescente.");
            break;
        case "adulto":
            console.log("Adulto.");
            break;
        case "idoso":
            console.log("Idoso.");
            break;
    }
}

/*10. Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
if/else para determinar a categoria:
            Abaixo do peso: IMC < 18.5
            Peso normal: IMC 18.5 - 24.9
            Sobrepeso: IMC 25 - 29.9
            Obesidade grau I: IMC 30 - 34.9
            Obesidade grau II: IMC 35 - 39.9
            Obesidade grau III: IMC >= 40
Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²). */
function questao10 () {
    let peso = parseFloat(prompt("Digite seu peso em Kg: "))
    let altura = parseFloat(prompt("Digite sua altura em metros: "))
    let imc = peso / (altura * altura)
    if (imc < 18.5){
        console.log("Abaixo do peso.")
    } else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal.")
    } else if (imc >= 25 && imc < 30){
        console.log("Sobrepeso.")
    } else if (imc >= 30 && imc <= 35){
        console.log("Obesidade grau I.")
    } else if (imc >= 35 && imc <= 40){
        console.log("Obesidade grau II.")
    } else if (imc >= 40){
        console.log("Obesidade grau III.")
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
    default:
        console.log("Essa questão não existe, tente de novo.")
        break;
}