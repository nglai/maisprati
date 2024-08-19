const prompt = require("prompt-sync")();

/**
 * 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

// let vetor = [];
// for(let i = 0; i < 20; i++){
//     vetor[i] = Math.floor(Math.random() * 100);
// }
// console.log("Vetor original", vetor);
// let vetor2 = vetor.sort((a, b) => a - b);
// console.log("Vetor ordenado", vetor2);


/**
 * 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
*/

// let nome = [];
// let idade = [];
// for (let i = 0; i < 9; i++){
//     nome[i] = prompt(`Digite o nome da ${i+1} pessoa: `);
//     idade[i] = parseInt(prompt(`Digite a idade de ${nome[i]}: `));
// };
// console.log("Pessoas menores de idade: ");
// idade.forEach((item, index) => {
//     if (item < 18){
//         console.log(`${nome[index]} - ${item} ano(s).`);
//     }
// });


/**
 * 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.
*/

// function dadosDoFuncionario () {
//     let nome = prompt("Digite o nome: ");
//     let cargo = prompt("Digite o cargo: ");
//     let salario = parseFloat(prompt("Digite o salário: "));
//     return {nome, cargo, salario};
// }
// let funcionario = dadosDoFuncionario();
// console.log("Registro do funcionário: ");
// console.log(
// `Nome: ${funcionario.nome},
// Cargo: ${funcionario.cargo},
// Salario: ${funcionario.salario}.`)


/**
 * 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
*/

// let horarios = [];
// function validacao (hora, minutos, segundos) {
//     if(hora < 0 || hora > 24 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59){
//         console.log("Hora ou Minutos ou Segundos inválido.");
//         return false;
//     }
//     let horario = `${hora.toString().padStart(2,"0")}:${minutos.toString().padStart(2,"0")}:${segundos.toString().padStart(2,"0")}`;
//     horarios.push(horario);
//     return true;
// }
// let i = 0;
// while (i < 5){
//     let hora = parseInt(prompt(`${i+1} - Digite a hora (0 - 23): `));
//     let minutos = parseInt(prompt(`${i+1} - Digite os minutos (0 - 59): `));
//     let segundos = parseInt(prompt(`${i+1} - Digite os segundos (0 - 59): `));
//     if (validacao(hora, minutos, segundos)){
//         i++;
//     }
// }
// console.log("Horários válidos: ", horarios);


/**
 * 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
 * Matrícula:
 * Nome:
 * Salário bruto:
 * Dedução INSS:
 * Salário líquido:
 * (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).
*/

// function processador (matricula, nome, salarioBruto) {
//     let inss = (salarioBruto * 0.12).toFixed(2);
//     return {
//         matricula,
//         nome,
//         "salário bruto": salarioBruto,
//         "dedução INSS": inss,
//         "salário liquído": (salarioBruto - inss).toFixed(2)
//     }
// }
// let matricula = parseInt(prompt("Digite o número da matrícula: "));
// let nome = prompt("Digite o nome: ");
// let salario = parseFloat(prompt("Digite o salário: "));
// console.log(processador(matricula, nome, salario));