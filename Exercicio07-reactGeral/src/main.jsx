import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'
import Home from './Home'
import ContadorSimples from './componentes/1.contadorSimples/ContadorSimples'
import AlteracaoCorFundo from './componentes/2.alteracaoCorFundo/AlteracaoCorFundo'
import ListaTarefas from './componentes/3.listaTarefas/ListaTarefas'
import Temporizador from './componentes/4.temporizador/Temporizador'
import FiltroLista from './componentes/5.filtroLista/FiltroLista'
import FormularioSimples from './componentes/6.formularioSimples/FormularioSimples'
import Mensagem from './componentes/6.formularioSimples/Mensagem'
import RequisicaoDados from './componentes/7.RequisicaoDados/RequisicaoDados'
import GaleriaImagens from './componentes/8.galeriaImagens/GaleriaImagens'
import Timer from './componentes/9.timer/Timer'
import TabsNavegaveis from './componentes/10.tabsNavegaveis/TabsNavegaveis'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/contadorSimples", 
    element: <ContadorSimples />,
  },
  {
    path: "/alteracaoCorFundo", 
    element: <AlteracaoCorFundo />,
  },
  {
    path: "/listaTarefas", 
    element: <ListaTarefas />,
  },
  {
    path: "/temporizador", 
    element: <Temporizador />,
  },
  {
    path: "/filtroLista", 
    element: <FiltroLista />,
  },
  {
    path: "/formularioSimples", 
    element: <FormularioSimples />,
  },
  {
    path: "/mensagem", 
    element: <Mensagem />,
  },
  {
    path: "/requisicaoDados", 
    element: <RequisicaoDados />,
  },
  {
    path: "/galeriaImagens", 
    element: <GaleriaImagens />,
  },
  {
    path: "/timer", 
    element: <Timer />,
  },
  {
    path: "/tabsNavegaveis", 
    element: <TabsNavegaveis />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
