import './index.css'

function Home() {
    return (
      <div className='principalHome'>
        <h1>ATIVIDADE 7</h1>
        <nav className='navegacaoHome'>
          <ul>
            <li>
              <a href={"/contadorSimples"}>1. Contador Simples</a>
            </li>
            <li>
              <a href={"/alteracaoCorFundo"}>2. Alteração de Cor de Fundo</a>
            </li>
            <li>
              <a href={"/listaTarefas"}>3. Lista de Tarefas</a>
            </li>
            <li>
              <a href={"/temporizador"}>4. Temporizador com useEffect</a>
            </li>
            <li>
              <a href={"/filtroLista"}>5. Filtro de Lista</a>
            </li>
            <li>
              <a href={"/formularioSimples"}>6. Formulário de Registro Simples</a>
            </li>
            <li>
              <a href={"/requisicaoDados"}>7. Aplicação de Requisição de Dados Simples</a>
            </li>
            <li>
              <a href={"/galeriaImagens"}>8. Galeria de Imagens com Visualização Detalhada</a>
            </li>
            <li>
              <a href={"/timer"}>9. Timer com Intervalo e Alerta</a>
            </li>
            <li>
              <a href={"/tabsNavegaveis"}>10. Componentes com Tabs Navegáveis</a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Home