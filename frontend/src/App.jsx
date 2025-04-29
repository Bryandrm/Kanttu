import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then(response => response.text())
      .then(data => setMensaje(data))
      .catch(error => setMensaje('Error al conectar con el backend 🚨'))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-2xl font-semibold text-center">
      {mensaje}
    </div>
  )
}

export default App