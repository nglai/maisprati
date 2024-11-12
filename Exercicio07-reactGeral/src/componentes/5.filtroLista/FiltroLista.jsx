import { useState } from 'react'
import './FiltroLista.css'

function FiltroLista() {
    const nomes = ["Maria", "José", "Ana"]

    const [filtro, setFiltro] = useState('')

    //Pega o texto do InputText
    const handleInputChange = (event) => {
        setFiltro(event.target.value)
    }

    // Filtra os nomes pelo input do filtro e transforma as letras em minusculo
    const filteredNames = filtro === '' ? nomes : nomes.filter((nome) => nome.toLowerCase().includes(filtro.toLowerCase()))

    return (
        <div className='principalListaTarefas'>
            <h1>Filtro de Lista</h1>
            <div className='filtroNome'>
                <input 
                    type="text"
                    value={filtro} 
                    onChange={handleInputChange}
                    placeholder='Digite o nome para busca'   
                />
            </div>
            <ul className='tabelaNome'>
            {filteredNames.map((nome, index) => (
                <li key={index}>
                    <span>{nome}</span>
                </li>
            ))}
            </ul>
      </div>
  )
}

export default FiltroLista
