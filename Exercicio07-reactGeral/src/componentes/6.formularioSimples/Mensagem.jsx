import { useLocation } from "react-router-dom"
import './Mensagem.css'

function Mensagem() {
    const location = useLocation()
    const { mensagem } = location.state
    console.log(mensagem)
    return (
      <div className="principalMensagem">
        <h1>Boas-vindas!</h1>
        {mensagem && <p>{mensagem}</p>}
      </div>
    );
}

export default Mensagem