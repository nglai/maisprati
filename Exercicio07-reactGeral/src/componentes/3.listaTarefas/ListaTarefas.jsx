import { useState } from 'react'
import './ListaTarefas.css'

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([])

    const [novaTarefa, setNovaTarefa] = useState('')

    const [filtro, setFiltro] = useState('todos')

    //Pega o texto do InputText
    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value)
    }

    // Adiciona uma tarefa a lista de tarefas se o inputText tiver valor
    const handleAddTask = () => {
        if(novaTarefa.trim() === ''){
            return
        }

    setTarefas([...tarefas, {text: novaTarefa, completed: false}])
    setNovaTarefa('')
    }

    // Remove a task da lista
    const handleRemoveTask = (index) => {
    const updatedTasks = tarefas.filter((_, i) => i !== index)
    setTarefas(updatedTasks)
    }

    // Marca a tarefa com o completed:true
    const handleCompleteTask = (index) => {
        const updatedTasks = tarefas.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTarefas(updatedTasks)
    };

    // Limpa as tarefas com o completed:true
    const handleClearCompletedTasks = () => {
        const updatedTasks = tarefas.filter((task) => !task.completed)
        setTarefas(updatedTasks)
    };

    // Filtra as tasks
    const filteredTasks = filtro === 'todos' ? tarefas : tarefas.filter((task) => !task.completed)

    return (
        <div className='principalListaTarefas'>
            <h1>Lista de Tarefas</h1>
            <div className='addTask'>
                <input 
                    type="text"
                    value={novaTarefa} 
                    onChange={handleInputChange}
                    placeholder='Digite uma nova tarefa'   
                />
                <button onClick={handleAddTask}>Adicionar Tarefa</button>
            </div>
            <div className='filtro'>
                <p>Selecione o filtro: </p>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="todos">Todas</option>
                <option value="pendentes">Pendentes</option>
                </select>
            </div>

            <ul className='tabela'>
                {filteredTasks.map((tarefa, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: tarefa.completed ? 'line-through' : 'none' }}>{tarefa.text}</span>
                        <button onClick={() => handleCompleteTask(index)}>Concluído</button>
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>

            <button className='botaoConcluir' onClick={handleClearCompletedTasks}>Limpar Tarefas Concluídas</button>
        </div>
    )
}

export default ListaTarefas
