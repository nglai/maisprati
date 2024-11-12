import { useState } from 'react'
import './TabsNavegaveis.css'

function SobreNos() {
  return (
    <div className='sobreNosTabsNavegaveis'>
      <h2>SOBRE NÓS</h2>
      <p>Somos uma empresa de tecnologia apaixonada por criar soluções digitais inovadoras e personalizadas. Acreditamos que a tecnologia tem o poder de transformar negócios e a vida das pessoas. Nossa equipe de talentosos desenvolvedores trabalha incansavelmente para entregar projetos de alta qualidade, utilizando as mais recentes tecnologias e metodologias ágeis. Nosso objetivo é ser o parceiro de tecnologia de confiança para nossos clientes, ajudando-os a alcançar seus objetivos de negócio.</p>
    </div>
  )
}

function Contato() {
  return (
    <div className='contatoTabsNavegaveis'>
      <h2>ENTRE EM CONTATO</h2>
      <p>Deseja falar conosco? Preencha o formulário abaixo e entre em contato conosco.</p>
      <form className='formularioTabsNavegaveis'>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input 
            type="text"
            placeholder='Nome'   
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="email"
            placeholder='Email'   
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem: </label>
          <textarea
            rows={5}
            cols={30}
            type="text"
            placeholder='Digite sua mensagem aqui'   
          />
        </div>
        <button className='formTabBtn'>Enviar</button>
      </form>
    </div>
  )
}

function TabsNavegaveis() {
  const [indexTabAtiva, setIndexTabAtiva] = useState(0)

  const conteudo = ["Sobre nós", "Entre em contato"]

  return (
    <div className='principalTabsNavegaveis'>
      <h1>Componentes com Tabs Navegáveis</h1>

      <div>
        <menu className='menuTabsNavegaveis'>
          {conteudo.map((tab, index) => (
            <button 
              key={index}
              className={indexTabAtiva === index ? "active" : ""}
              onClick={() => setIndexTabAtiva(index)}
            >
              {tab}
            </button>
          ))}
        </menu>

        <div className='conteudoTabsNavegaveis'>
          {indexTabAtiva === 0 && <SobreNos />}
          {indexTabAtiva === 1 && <Contato />}
        </div>

      </div>

    </div>
  )
}

export default TabsNavegaveis
