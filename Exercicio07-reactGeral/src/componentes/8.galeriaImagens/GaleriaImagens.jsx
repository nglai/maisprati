import "./GaleriaImagens.css"
import React, { useState} from 'react'
import anime1 from "./assets/anime1.png"
import anime2 from "./assets/anime2.jpg"
import anime3 from "./assets/anime3.jpg"

function GaleriaImagens () {

    const [imagemSelecionada, setImagemSelecionada] = useState(null)
    const [indexImagemSelecionada, setIndexImagemSelecionada] = useState(0)

    //Array das imagens
    const imagens = [
      anime1,
      anime2,
      anime3,
    ];
  
    // Abre a imagem selecionada no modal
    function handleAbreImagem (index) {
        setImagemSelecionada(imagens[index])
        setIndexImagemSelecionada(index)
    }

    // Fecha a imagem selecionada no modal
    function handleFechaImagem () {
        setImagemSelecionada(null)
    }

    // Exibe a imagem anterior no modal
    function handleImagemAnterior () {
        const novoIndex = indexImagemSelecionada === 0 ? imagens.length - 1 : indexImagemSelecionada - 1;
        setImagemSelecionada(imagens[novoIndex])
        setIndexImagemSelecionada(novoIndex)
    }
    
    // Exibe a próxima imagem no modal
    function handleProximaImagem () {
        const novoIndex = indexImagemSelecionada === imagens.length - 1 ? 0 : indexImagemSelecionada + 1;
        setImagemSelecionada(imagens[novoIndex])
        setIndexImagemSelecionada(novoIndex)
    }

    return (
        <div className="principalGaleriaImagens">
            <h1>Galeria de Imagens com Visualização Detalhada</h1>

            <div className="galeriaImagensList">
                {imagens.map((imagem, index) => (
                    <img
                        key={index}
                        src={imagem}
                        alt={`Imagem ${index + 1}`}
                        onClick={() => handleAbreImagem(index)}
                    />
                ))}
            </div>

            {imagemSelecionada && (
                <div className="galeriaImagensModal">
                    <button onClick={handleImagemAnterior}>&lt;</button>
                    <img src={imagemSelecionada} alt="Imagem Ampliada" />
                    <button onClick={handleProximaImagem}>&gt;</button>
                    <span className="close" onClick={handleFechaImagem}>&times;</span>
                </div>
            )}
            
        </div>
    )
}

export default GaleriaImagens