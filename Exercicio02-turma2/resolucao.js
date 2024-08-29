const prompt = require("prompt-sync")();

const questao = prompt("Escolha o número da questao que quer executar (1-15): ");

// 1. Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.
function questao1 () {
    let carro = {
        marca: "VolksWagen",
        modelo: "Up",
        ano: 2015,
        cor: "Prata"
    }

    for (let prop in carro) {
        console.log(prop + ":" + carro[prop])
    }
}

// 2. Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
function questao2 () {
    let livro = {
        titulo: "Código Limpo",
        autor: "Robert C. M.",
        anoPublicacao: 2011,
        genero: "Software - desenvolvimento"
    }
    for (let prop in livro) {
        if (!(prop == "editora")) {
           livro.editora = "Casa do livro" 
        }
    }
    console.log(livro);
}

// 3. Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.
function questao3 () {
    let produto = {
        estoque: 150,
        vendidos: 200,
        devolvidos: 15
    }
    novoObjeto(produto, 100);
}
function novoObjeto (objeto, valor) {
    let novoObj = new Object();
    for (const prop in objeto) {
        if(objeto[prop] > valor){
            novoObj[prop] = objeto[prop];
        }
    }
    console.log(novoObj);
}

// Com for of: 4. Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
function questao4 () {
    let pessoa1 = pessoaFactory("João", 20, "Salvador");
    let pessoa2 = pessoaFactory("Maria", 25, "Rio de Janeiro");
    let pessoa3 = pessoaFactory("José", 32, "São Paulo");
    let pessoas = [pessoa1, pessoa2, pessoa3];
    for (const pessoa of pessoas) {
        console.log(pessoa);
    }
    
}
function pessoaFactory (nome, idade, cidade) {
    let obj = {nome, idade, cidade}
    return obj;
}

// Com for of: 5. Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.
function questao5 () {
    let aluno1 = alunoFactory("João", 10, 8.5);
    let aluno2 = alunoFactory("Maria", 7, 7);
    let aluno3 = alunoFactory("José", 8.7, 6);
    let alunos = [aluno1, aluno2, aluno3];
    for (const aluno of alunos) {
        let soma = 0;
        soma += aluno["nota1"];
        soma += aluno["nota2"];
        console.log(`A média de ${aluno["nome"]} foi ${(soma/2).toFixed(2)}`)
    }
}
function alunoFactory (nome, nota1, nota2) {
    let obj = {nome, nota1, nota2}
    return obj;
}

// Com for of: 6. Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.
function questao6 () {
    let funcionario1 = funcionarioFactory("João", "Desenvolvedor", 4500);
    let funcionario2 = funcionarioFactory("Maria", "QA", 3000);
    let funcionario3 = funcionarioFactory("José", "PO", 7120);
    let funcionarios = [funcionario1, funcionario2, funcionario3];
    for(let funcionario of funcionarios){
        if(funcionario["salario"] > 5000){
            console.log(funcionario)
        }
    }
}
function funcionarioFactory (nome, cargo, salario) {
    let obj = {nome, cargo, salario}
    return obj;
}

// Com forEach: 7. Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.
function questao7 () {
    let produto1 = produtoFactory("Garrafa", 15.30, 10);
    let produto2 = produtoFactory("Copo", 4.90, 10);
    let produto3 = produtoFactory("Monitor", 750, 10);
    let produtos = [produto1, produto2, produto3];
    produtos.forEach(produto => {
        let novoPreco = produto.preco - (produto.preco * (produto.desconto / 100))
        produto.precoComDesconto = novoPreco;
        console.log(produto)
    });
}
function produtoFactory (nome, preco, desconto) {
    let obj = {nome, preco, desconto}
    return obj;
}

// Com forEach: 8. Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
function questao8 () {
    let filme1 = filmeFactory("O Poderoso Chefão", "Francis Ford Coppola", 1972);
    let filme2 = filmeFactory("O Senhor dos Anéis: A Sociedade do Anel", "Peter Jackson", 2001);
    let filme3 = filmeFactory("Pulp Fiction", "Quentin Tarantino", 1994);
    let filmes = [filme1, filme2, filme3];
    let novaListaFilmes = new Array();
    filmes.forEach(filme => novaListaFilmes.push(filme.titulo));
    console.log("Lista de filmes apenas com os títulos: ");
    console.table(novaListaFilmes);
}
function filmeFactory (titulo, diretor, anoLancamento) {
    let obj = {titulo, diretor, anoLancamento}
    return obj;
}

// Com forEach: 9. Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
function questao9 () {
    let cliente1 = clienteFactory("João", 48, "Salvador");
    let cliente2 = clienteFactory("Maria", 78, "Rio de Janeiro");
    let cliente3 = clienteFactory("José", 24, "São Paulo");
    let clientes = [cliente1, cliente2, cliente3];
    let contador = 0;
    clientes.forEach(cliente => {
        if(cliente.idade > 30){
            contador += 1;
        }
    });
    console.log(`${contador} cliente possuem mais de 30 anos.`)
}
function clienteFactory (nome, idade, cidade) {
    let obj = {nome, idade, cidade}
    return obj;
}

// 10. Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
function questao10 () {
    let venda1 = vendaFactory("Camisa", 15, 15.90);
    let venda2 = vendaFactory("Calça", 25, 70);
    let venda3 = vendaFactory("Celular", 5, 4500);
    let vendas = [venda1, venda2, venda3];
    let total = 0;
    vendas.forEach(venda => total += venda.quantidade * venda.valor);
    console.log(`O valor total das ${vendas.length} vendas foi de ${total.toFixed(2)} reais.`);
}
function vendaFactory (produto, quantidade, valor) {
    let obj = {produto, quantidade, valor}
    return obj;
}

// 11. Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
function questao11 () {
    let pedido1 = pedidosFactory("Ana", "Travesseiro", 2);
    let pedido2 = pedidosFactory("Pedro", "Copo", 6);
    let pedido3 = pedidosFactory("Ana", "Fronha", 2);
    let pedido4 = pedidosFactory("Pedro", "Prato", 12);
    let pedido5 = pedidosFactory("José", "Talheres", 32);
    let novoObj = new Object();
    let pedidos = [pedido1, pedido2, pedido3, pedido4, pedido5];
    pedidos.forEach(pedido => {
        if(!novoObj[pedido.cliente]){
            novoObj[pedido.cliente] = pedido.quantidade;
        } else {
            novoObj[pedido.cliente] += pedido.quantidade;
        }
    })
    console.log(novoObj)    
}
function pedidosFactory (cliente, produto, quantidade) {
    let obj = {cliente, produto, quantidade}
    return obj;
}

// 12. Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
function questao12 () {
    let estoque1 = estoqueFactory("Calça", 40, 25);
    let estoque2 = estoqueFactory("Camisa", 24, 40);
    let estoque3 = estoqueFactory("Boné", 8, 12);
    let estoques = [estoque1, estoque2, estoque3];
    estoques.forEach(estoque => {
        if (estoque.quantidade < estoque.minimo) {
            estoque.quantidade *= 2
        }
    });
    console.table(estoques);
}
function estoqueFactory (produto, quantidade, minimo) {
    let obj = {produto, quantidade, minimo}
    return obj;
}

// 13. Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.
function questao13 () {
    let item1 = itemFactory("Arroz", 4, 4.59);
    let item2 = itemFactory("Picanha", 5, 89.50);
    let item3 = itemFactory("Farofa", 2, 2.65);
    let items = [item1, item2, item3];
    let valorTotal = 0;
    items.forEach(item => valorTotal += item.precoUnitario * item.quantidade);
    console.log(`O total dos ${items.length} items do carrinho foi: ${valorTotal.toFixed(2)} reais.`)
}
function itemFactory (nome, quantidade, precoUnitario) {
    let obj = {nome, quantidade, precoUnitario}
    return obj;
}

// 14. Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.
function questao14 () {
    let departamento1 = departamentoFactory("Rh", ["Alexandra", "Maria", "Carla"]);
    let departamento2 = departamentoFactory("Financeiro", ["Mário", "Adriana", "Fábio"]);
    let departamento3 = departamentoFactory("Desenvolvimento", ["José", "Maria", "Júnio", "Sandy"]);
    let departamentos = [departamento1, departamento2, departamento3];
    for (let departamento of departamentos){ //{ nome: 'Rh', listaFuncionarios: [ 'Alexandra, Maria, Carla' ] }
        for (let dep in departamento.listaFuncionarios){ //nome listaFuncionarios
            console.log(`Departamento: ${departamento.nome} - Funcionário(a): ${departamento.listaFuncionarios[dep]}`)
        }
    }
}
function departamentoFactory (nome, listaFuncionarios) {
    let obj = {nome, listaFuncionarios}
    return obj;
}

// 15. Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.
function questao15 () {
    let transacao1 = transacaoFactory("entrada", 15);
    let transacao2 = transacaoFactory("entrada", 47);
    let transacao3 = transacaoFactory("entrada", 69);
    let transacao4 = transacaoFactory("saida", 45);
    let transacao5 = transacaoFactory("entrada", 2);
    let transacao6 = transacaoFactory("saida", 70);
    let total = 0;
    let transacoes = [transacao1, transacao2, transacao3, transacao4, transacao5, transacao6];
    transacoes.forEach(item => {
        if(item.tipo == "entrada") {
            total += item.valor;
        } else {
            total -= item.valor;
        }
    })
    console.log(`O saldo final foi de ${total.toFixed(2)} reais.`);
}
function transacaoFactory (tipo, valor) {
    let obj = {tipo, valor}
    return obj;
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