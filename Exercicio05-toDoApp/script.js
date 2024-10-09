class Task {
    constructor (idUnico, titulo, data, descricao) {
        this.idUnico = idUnico
        this.titulo = titulo
        this.data = data
        // this.dia = dia
        // this.mes = mes
        // this.ano = ano
        this.descricao = descricao
        this.concluido = false
    }

    validateData () {
        for (let key in this){
            if(this[key] === undefined || this[key] === ""){
                console.error(`O campo ${key} é obrigatório.`)
                return false
            }
        }
        return true
    }
}

class Database {

    constructor () {
        this.initDatabase()
    }

    initDatabase () {
        const id = localStorage.getItem("id")

        if(id === null){
            localStorage.setItem("id", 0)
        }
    }

    loadTasks () {
        let tasks = []
        let id = localStorage.getItem("id")

        for (let i = 1; i <= id; i++) {
            try {
                let task = JSON.parse(localStorage.getItem(i))
                tasks.push(task)
            } catch (error) {
                console.error(`Erro ao carregar a tarefa com id ${id}`)
            }
            
        }
        return tasks
    }

    createTask (task) {
        let id = this.getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem("id", id.toString())
    }

    removeTask (id) {
        localStorage.removeItem(id)
    }

    updateCheckboxTask(id, checkado){
        try {
            let task = JSON.parse(localStorage.getItem(id))
            task.concluido = checkado
            localStorage.setItem(id, JSON.stringify(task));
        } catch (error) {
            console.error("Não foi possivel fazer o update da task.")
        }
    }

    editTask(id, titulo, data, descricao){
        try {
            let task = JSON.parse(localStorage.getItem(id))
            console.log(task)
            task.titulo = titulo
            task.data = data
            task.descricao = descricao
            localStorage.setItem(id, JSON.stringify(task));
            loadTasks()
        } catch (error) {
            console.error("Não foi possivel fazer o update da task.")
        }
    }

    getNextId () {
        let currentId = localStorage.getItem("id")
        return parseInt(currentId) + 1
    }
}

const database = new Database()

function registrarTask () {
    let titulo = document.getElementById("titulo").value
    let data = document.getElementById("data").value
    let descricao = document.getElementById("descricao").value

    let task = new Task(database.getNextId(), titulo, data, descricao)

    if(task.validateData()){
        database.createTask(task)
        alert("Tarefa criada com sucesso!")
    } else {
        alert("Preencha todos os campos!")
    }
}

function loadTasks (tasks = database.loadTasks()) {
    // <tr>
    //     <td>Titulo</td>
    //     <td>Data</td>
    //     <td>Descricao</td>
    //     <td><input type="checkbox" id="concluido" name="concluido"></td>
    //     <td>
    //         <button type="button" class="btn btn-info">Editar</button>
    //         <button type="button" class="btn btn-danger">Deletar</button>
    //     </td>
    // </tr>

    let listTasks = document.getElementById("listTasks")
    listTasks.innerHTML = ""
    let idAtual;

    tasks.forEach(task => {
        try {
            const tr = document.createElement("tr")
    
            tr.insertCell(0).innerHTML = task.titulo
            tr.insertCell(1).innerHTML = task.data
            tr.insertCell(2).innerHTML = task.descricao
    
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.classList.add("form-check-input")
            if(task.concluido){
                checkbox.checked = true
            }
            checkbox.onchange = () => {
                if(checkbox.checked){
                    database.updateCheckboxTask(task.idUnico, true)
                } else {
                    database.updateCheckboxTask(task.idUnico, false)
                }
            }
            tr.insertCell(3).append(checkbox)
    
            let td = document.createElement("td")
            td.classList.add("d-flex", "justify-content-evenly")
    
            //Botao de editar
            let btnEditar = document.createElement('button')
            btnEditar.classList.add("btn", "btn-info")
            btnEditar.innerHTML = "Editar"
            btnEditar.setAttribute("data-bs-toggle", "modal")
            btnEditar.setAttribute("data-bs-target", "#editarModal");
            btnEditar.addEventListener("click", () => {
                let modal = document.getElementById("modal-corpo")

                let tituloLabel = document.createElement("label")
                tituloLabel.setAttribute("for", "titulo")
                tituloLabel.textContent = "Título: "
                tituloLabel.classList.add("mb-2")
                let tituloInput =  document.createElement("input")
                tituloInput.type = "text"
                tituloInput.setAttribute("id", "tituloEdit")
                tituloInput.setAttribute("name", "titulo")
                tituloInput.classList.add("mb-3")
                tituloInput.value = task.titulo

                let dataLabel = document.createElement("label")
                dataLabel.setAttribute("for", "data")
                dataLabel.textContent = "Data: "
                dataLabel.classList.add("mb-2")
                let dataInput =  document.createElement("input")
                dataInput.type = "text"
                dataInput.setAttribute("id", "dataEdit")
                dataInput.setAttribute("name", "data")
                dataInput.classList.add("mb-3")
                dataInput.value = task.data

                let descLabel = document.createElement("label")
                descLabel.setAttribute("for", "descricao")
                descLabel.textContent = "Descrição: "
                descLabel.classList.add("mb-2")
                let descInput =  document.createElement("textarea")
                descInput.classList.add("form-control")
                descInput.setAttribute("id", "descricaoEdit")
                descInput.setAttribute("rows", "4")
                descInput.value = task.descricao

                modal.append(tituloLabel)
                modal.append(tituloInput)
                modal.append(dataLabel)
                modal.append(dataInput)
                modal.append(descLabel)
                modal.append(descInput)

                idAtual = task.idUnico
            })
            td.append(btnEditar)

            //Botao de concluir edicao dentro do modal
            let btnSalvarModal = document.getElementById("salvar-modal")
            btnSalvarModal.onclick = () => {
                let tituloEdit = document.getElementById("tituloEdit").value
                let dataEdit = document.getElementById("dataEdit").value
                let descEdit = document.getElementById("descricaoEdit").value
                database.editTask(idAtual, tituloEdit, dataEdit, descEdit)
                $('#editarModal').modal('hide')
                let modal = document.getElementById("modal-corpo")
                modal.innerHTML = ""
            }

            //Botao de deletar
            let btnDeletar = document.createElement('button')
            btnDeletar.classList.add("btn", "btn-danger")
            btnDeletar.innerHTML = "Deletar"
            btnDeletar.onclick = () => {
                if(confirm('Você tem certeza que quer excluir está tarefa?')){
                    database.removeTask(task.idUnico)
                    loadTasks()
                }
            }
            td.append(btnDeletar)
    
            tr.insertCell(4).append(td)
    
            listTasks.append(tr)

            
        } catch (error) {
            console.error("Erro ao trazer as tasks.")
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
})

function limparModal () {
    let modal = document.getElementById("modal-corpo")
    modal.innerHTML = ""
}