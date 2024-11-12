import { useState } from 'react'
import './ContadorSimples.css'

function ContadorSimples() {
  const [count, setCount] = useState(0)

  // Incrementa o valor de count
  function incrementa () {
    setCount(count + 1)
  }

  // Decrementa o valor de count
  function decrementa () {
    if(count <= 0){
      alert("Contador não pode ser negativo!")
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className='principalContador'>
      <h1>Contador Simples</h1>
      <h2>Contagem em: {count}</h2>
      <div className='botoes'>
        <button className='btn1' onClick={incrementa}>
          Incrementar
        </button>
        <button className='btn2' onClick={decrementa}>
          Decrementar
        </button>
      </div>
    </div>
  )
}

export default ContadorSimples
