import { useState } from 'react'
import './FormularioSimples.css'
import { useNavigate } from "react-router-dom"

function FormularioSimples() {
  const navigate = useNavigate()

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagemError, setMensagemError] = useState("")

  let mensagem

  const handleSubmit = (event) => {
    event.preventDefault() // Impede o recarregamento da página

    // verifica se todos os campos estão preenchidos
    if (!nome || !email || !senha) {
      setMensagemError('Por favor, preencha todos os campos.')
      return
    }

    // Se passar, exibe a mensagem de boas-vindas
    mensagem = `Bem-vindo, ${nome}! Seu email é ${email}. Sua senha é ${senha}!`
    
    navigate("/mensagem", { state: { mensagem: mensagem} })

    // Limpa os campos após o envio
    setNome('')
    setEmail('')
    setSenha('')

  };

  return (
    <div className='principalFormularioSimples'>
      <h1>Formulario de Registro Simples</h1>
      {mensagemError && <p>{mensagemError}</p> }
      <form className='formularioSimples' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input 
            type="text"
            value={nome}
            onChange={e => {setNome(e.target.value)}}
            placeholder='Nome'   
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="email"
            value={email} 
            onChange={e => {setEmail(e.target.value)}}
            placeholder='Email'   
          />
        </div>
        <div>
          <label htmlFor="senha">Senha: </label>
          <input 
            type="password"
            value={senha} 
            onChange={e => {setSenha(e.target.value)}}
            placeholder='Senha'   
          />
        </div>
        <button className='formBtn' onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}

export default FormularioSimples
