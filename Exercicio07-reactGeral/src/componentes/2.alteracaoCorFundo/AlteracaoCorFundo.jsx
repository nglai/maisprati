import { useEffect, useState } from 'react'
import './AlteracaoCorFundo.css'

function AlteracaoCorFundo() {
  const [cor, setCor] = useState("white")

  //Traz valores aleatórios para formar uma cor rgb
  let rgb = window.crypto.getRandomValues(new Uint8Array(3)).reduce((acc, val) => acc + val.toString(16), "#")

  //Muda a cor
  function mudaCor () {
    setCor(rgb)
  }

  //Muda a cor de fundo quando o valor da cor é alterado
  useEffect (() => {
    const divPrincipal = document.querySelector('.principalMudaCor')
    if (divPrincipal) {
      divPrincipal.style.backgroundColor = cor
    }
  }, [cor])

  return (
    <div className='principalMudaCor'>
      <h1>Alteração de Cor de Fundo</h1>
      <p>Cor: {cor}</p>
      <button className='btn' onClick={mudaCor}>
        Alterar cor
      </button>
    </div>
  )
}

export default AlteracaoCorFundo
