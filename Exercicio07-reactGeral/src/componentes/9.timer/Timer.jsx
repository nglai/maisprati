import { useState, useEffect } from 'react'
import './Timer.css'

function Timer() {
  const [segundos, setSegundos] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // Inicia a contagem regressiva quando isRunning é true
  useEffect(() => {
    let intervalo
    if (isRunning) {
      if(segundos > 0){
        intervalo = setInterval(() => {
          setSegundos(segundos - 1)
        }, 1000)
      } else {
        alert("O tempo acabou!")
        setIsRunning(false)
        return () => clearInterval(intervalo)
      }
    }
    return () => clearInterval(intervalo)
  }, [segundos, isRunning])

  //Inicia a contagem
  function iniciaContagem () {
    setIsRunning(true)
  }

  //Pausa a contagem
  function pausaContagem () {
    setIsRunning(false)
  }

  //Reinicia a contagem
  function reiniciaContagem () {
    setIsRunning(false)
    setSegundos(0)
  }

  // Formata o tempo em minutos e segundos
  function formataTempo (tempo) {
    let minutos = Math.floor(tempo/60)
    let segundos = tempo % 60
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
  }

  return (
    <div className='principalTimer'>
      <h1>Timer com Intervalo e Alerta</h1>
      <div className='painelTimer'>
        <input
          type="number"
          value={segundos}
          onChange={(e) => setSegundos(parseInt(e.target.value))}
        />
        <button onClick={iniciaContagem}>Iniciar</button>
        <button onClick={pausaContagem}>Pausar</button>
        <button onClick={reiniciaContagem}>Reiniciar</button>
        <p>Tempo restante: {formataTempo(segundos)}</p>
      </div>
    </div>
  )
}

export default Timer
