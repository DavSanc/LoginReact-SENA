import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState ('')
  const [clave, setClave] = useState ('')

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
    
  }
  
  return (
    <>
    <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/> 
    <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
    <button>Ingresar</button>
    {usuario}
    {clave}
    </>
  )
}

export default App
