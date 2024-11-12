import "./RequisicaoDados.css"
import React, { useState, useEffect } from 'react'

function RequisicaoDados () {

    const [posts, setPosts] = useState([])
    const [isCarregando, setIsCarregando] = useState(false)

    //Ao carregar a tela, faz o fetch uma vez e seta a resposta em posts
    useEffect(() => {
        const fetchData = async () => {
            setIsCarregando(true)
            await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Erro ao buscar dados", error))
            setIsCarregando(false)
        };
    
        fetchData()
    }, [])
    
    //Recarrega a pagina e faz o fetch novamente
    function handleRecarrega () {
        fetchData()
    }

    return (
        <div className="principalRequisicaoDados">
            <h1>Aplicação de Requisição de Dados Simples</h1>

            {isCarregando ? (<p>Carregando página...</p>) : (
                <div>
                    <button className="requisicaoDadosBtn" onClick={handleRecarrega}>Recarregar</button>
                    <ul className="requisicaoDadosLista">
                        {posts.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <span>{post.body}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default RequisicaoDados