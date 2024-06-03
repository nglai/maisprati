/**
 * 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
*/

// let vendas = [
//     { vendedor: 'Tamires', valor: 1000 },
//     { vendedor: 'Maria', valor: 1500 },
//     { vendedor: 'Pedro', valor: 800 },
//     { vendedor: 'Maria', valor: 750 },
//     { vendedor: 'Pedro', valor: 690 },
// ]
// let total = {};
// function calculaVendas (vendas){
//     for(let venda of vendas){
//         console.log(venda.vendedor)
//         if(total[venda.vendedor]){
//             total[venda.vendedor] += venda.valor;
//         }else{
//             total[venda.vendedor] = venda.valor;
//         }
//     }
//     console.log(total);
// }
// calculaVendas(vendas);


/**
 * 47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.
*/

// let objetoOriginal = {a: 1, b: 2, c: 3};
// function funcao (param) {
//     return param * 2;
// }
// function transformadora (objeto, funcao) {
//     let novoObjeto = new Object();
//     for(let item in objeto){
//         novoObjeto[item] = funcao(objeto[item])
//     }
//     return novoObjeto;
// }
// let result = transformadora(objetoOriginal, funcao);
// console.log("Novo objeto transformado:", result);


/**
 * 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
*/

// let inventarioLojaA = { farinha: 10, leite: 5, arroz: 7, frango: 6, salsicha: 8 };
// let inventarioLojaB = { arroz: 8, feijao: 12, macarrao: 4, frango: 4 };
// function combinado (a, b) {
//     let inventarioCombinado = {...a};
//     console.log(a)
//     for(let item in b){
//         console.log(item)
//         if(inventarioCombinado[item]){
//             inventarioCombinado[item] += b[item]
//         } else {
//             inventarioCombinado[item] = b[item]
//         }
//     }
//     console.log(inventarioCombinado);
// }
// combinado(inventarioLojaA, inventarioLojaB);


/**
 * 49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

// let arrayObj = [
//     {id: 1, valor: 125, data: "24/02/2012", categoria: "Vestuario"},
//     {id: 2, valor: 250, data: "25/02/2012", categoria: "Alimentacao"},
//     {id: 3, valor: 175, data: "26/02/2012", categoria: "Alimentacao"},
//     {id: 4, valor: 100, data: "27/02/2012", categoria: "Vestuario"},
//     {id: 5, valor: 150, data: "28/02/2012", categoria: "Transporte"}
// ]

// function novoObjeto (array){
//     let objeto = new Object();
//     for(let item of array){
//         if(objeto[item.categoria]){
//             objeto[item.categoria].transacoes.push(item);
//             objeto[item.categoria].total += item.valor;
//         } else {
//             objeto[item.categoria] = {transacoes: [item], total: item.valor}
//         }
//     }

//     for(let o in objeto){
//         console.log(objeto[o])
//     }
// }
// novoObjeto(arrayObj);