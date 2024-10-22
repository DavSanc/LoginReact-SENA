import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState ('')
  const [clave, setClave] = useState ('')
  const [textoAvoz, setTextoAvoz] = useState ('')
  const [vozATexto, setVozATexto] = useState ('')

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
    
  }
  function ingresar() {
    if (usuario == 'admin' && clave == 'admin'){
      alert('Ingresaste')
    }else{
      alert('Usuario o clave incorrecto')
    }
  }

  function cambiarTexto(evento) {
    setTextoAvoz(evento.target.value)
    
  }

  function convertirTextoAvoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAvoz)
    synth.speak(utterThis) 
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = function(event) {
      setVozATexto(event.results[0][0].transcript)
    }
    
  }
  return (
    <>
    <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/> 
    <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
    <button onClick={ingresar}>Ingresar</button>

    <br />
    <h3>Conversor de texto a voz</h3>
    <input type="text" name="" id="textoAvoz" value={textoAvoz} onChange={cambiarTexto}/>
    <button onClick={convertirTextoAvoz}>Convertir</button>

    <h3>Conversor de voz a texto</h3>
    <button onClick={grabarVozATexto}>Grabar</button>
    {vozATexto}
   
    </>
  )
}

export default App
