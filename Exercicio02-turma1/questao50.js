/**
 * 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
 * 1. Estrutura de Dados:
 * Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
 * Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.
 * 2. Funcionalidades:
 * Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
 * Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
 * Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
 * Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
 * Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
 * 3. Regras de Negócio:
 * Um hotel só pode aceitar reservas se houver quartos disponíveis.
 * As reservas devem ser identificadas por um ID único e associadas a um único hotel.
 * 4. Desafios Adicionais (Opcionais):
 * Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
 * Gerar relatórios de ocupação para um hotel.
 * Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.
*/
let hoteis = [
    {id: 1, nome: "Bala", cidade: "Rio de Janeiro", quartosTotais: 10, quartosDisponiveis: 5},
    {id: 2, nome: "Comercio", cidade: "Sao Paulo", quartosTotais: 15, quartosDisponiveis: 7},
    {id: 3, nome: "Muralha", cidade: "Fortaleza", quartosTotais: 20, quartosDisponiveis: 9},
    {id: 4, nome: "Correria", cidade: "Sao Paulo", quartosTotais: 25, quartosDisponiveis: 12},
    {id: 5, nome: "Estatua", cidade: "Rio de Janeiro", quartosTotais: 30, quartosDisponiveis: 15},
]
let reservas = [];

function adicionaHotel (id, nome, cidade, quartosTotais, quartosDisponiveis) {
    let novoHotel = {id, nome, cidade, quartosTotais, quartosDisponiveis}
    hoteis.push(novoHotel);
    console.log(hoteis);
}

function buscaHoteisPorCidade (cidade) {
    for (let hotel of hoteis){
        if(hotel.cidade == cidade){
           console.log(hotel) 
        }
    }
}

function fazerReserva (nomeDoHotel, nomeCliente) {
    for (let hotel of hoteis){
        if(hotel.nome == nomeDoHotel && hotel.quartosDisponiveis > 0){
            hotel.quartosDisponiveis--

            console.log('Reserva feita com sucesso!');

            let ultimoId = 0;
            for(let reserva of reservas){
                if(reserva.idReserva > ultimoId){ultimoId = reserva.idReserva} 
            }
            let reserva = {idReserva: ultimoId+1, idHotel: hotel.id, nomeCliente}
            reservas.push(reserva);
            console.log(reserva);

        } else if (hotel.nome == nomeDoHotel && hotel.quartosDisponiveis == 0) {
            console.log('Não há quartos disponíveis.');
        }
    }
}

function cancelarReserva (id) {
    let idHotel;
    for(let reserva of reservas){
        if(reserva["idReserva"] == id){idHotel = reserva["idHotel"];}
    }
    for(let hotel of hoteis){
        if(hotel.id == idHotel){
            hotel.quartosDisponiveis++;
        };
    }
    let reservaIndex = reservas.findIndex(item => item.idReserva == id);
    reservas.splice(reservaIndex, 1);
    console.log("Reserva cancelada com sucesso!")
}

function listaReservas () {
    let listaTudo = []
    for(let reserva of reservas){
        for(let hotel of hoteis){
            if(hotel.id == reserva.idHotel){
                let reservaComHotel = {idReserva: reserva.idReserva, hotel: hotel, nomeCliente: reserva.nomeCliente}
                listaTudo.push(reservaComHotel)     
            } 
        }
    }
    console.log(listaTudo);
}

// adicionaHotel(6, "Tubarao", "Recife", 35, 18);
// buscaHoteisPorCidade("Rio de Janeiro");
fazerReserva("Bala", "Ana");
fazerReserva("Correria", "Bruno");
// cancelarReserva(1);
listaReservas();

// console.log("Hoteis", hoteis);
// console.log("Reservas", reservas);