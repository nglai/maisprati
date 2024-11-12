import { useState, useEffect } from 'react'
import './Temporizador.css'

function Temporizador() {
  const [segundos, setSegundos] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  //Temporizador já começa a contar ao carregar o componente
  useEffect(() => {
    let intervalo

    if (isRunning) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1)
      }, 1000)
    }

    return () => clearInterval(intervalo)
  }, [isRunning])

  //inicia o contador
  const handleStart = () => {
    setIsRunning(true)
  };

  //pausa o contador
  const handlePause = () => {
    setIsRunning(false)
  };

  //reseta o contador
  const handleReset = () => {
    setIsRunning(false)
    setSegundos(0);
  };

  return (
    <div className='principalTemporizador'>
      <h1>Temporizador com useEffect</h1>
      <p>Segundos: {segundos}</p>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handlePause}>Pausar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  )

}

export default Temporizador
