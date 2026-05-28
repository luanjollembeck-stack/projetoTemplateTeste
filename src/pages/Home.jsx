import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function Home() {
  const { usuario, anoDaCopa, jogadorDoDia, setJogadorDoDia } = useContext(GlobalContext)
  const navigate = useNavigate()
  function mudarJogador(){
    let novoJogador = prompt("Quem vai ser?")
    setJogadorDoDia(novoJogador)
  }

  return (
    <div className='container-home'>
      <Navbar />
      <h1>Copa do mundo</h1>
      <p>Usuário: {usuario}</p>
      <p>Copa Do mundo {anoDaCopa} </p>
    
      <div>
        <h2>Hoje vamos conhecer o {jogadorDoDia}</h2>
        <button onClick={mudarJogador}>⏹️</button>
      </div>
    </div>
  )
}

export default Home