/**
 * 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/

// let pessoa = {
//     nome: "Linda",
//     idade: 50
// };
// console.log(`Idade: ${pessoa.idade}.`);
// pessoa.email = "linda@gmail.com";
// for(let p in pessoa){console.log(`${p}: ${pessoa[p]}`)};


/**
 * 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/

// let dados = {
//     numero: 29,
//     string: "exercicio 02",
//     arraysNum: [0, 1, 2, 3, 4, 5],
//     arraysStrin: ["a", "b", "c", "d", "e"]
// };
// function novoObjeto (obj){
//     let novoDado = new Object();
//     for(let i in obj){
//         if(typeof(obj[i]) === "object"){
//             novoDado[i] = obj[i];
//         }
//     }
//     console.log("Novo Objeto com arrays: ");
//     for(let d in novoDado){console.log(`${d}: ${novoDado[d]}`)}; 
// }
// novoObjeto(dados);


/**
 * 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.
*/

// let obj1 = { um: 'a', dois: 'b', tres: 'c' };
// let obj2 = { um: 'd', quatro: 'e', nove: 'f' };
// function junta (obj1, obj2) {
//     let obj3 = {...obj1, ...obj2};
//     console.log(obj3)
// }
// junta(obj1, obj2);


/**
 * 44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
*/

// let objeto = {
//     nome: "Isabela",
//     idade: 25,
//     sexo: "Feminino",
//     email: "isa@gmail.com",
//     empregada: true,
//     cpf: 21154864789
// }
// function contaString (objeto){
//     let contador = 0;
//     for(let i in objeto){
//         if(typeof(objeto[i]) === "string"){
//             contador++
//         }
//     }
//     console.log("Propriedades do tipo string:", contador);  
// }
// contaString(objeto);


/**
 * 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
*/

// let array = ["a", "b", "e", "c", "a", "d", "e", "d", "c", "c", "a", "e", "b", "c", "b", "e", "d", "a", "a", "e"];
// let objeto = {};
// for(let i of array){
//     if(objeto[i]){
//         objeto[i]++
//     }else{
//         objeto[i] = 1;
//     }
// };
// console.log(objeto);