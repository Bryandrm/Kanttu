import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListaCompras from './components/ListaCompras'
import FormularioCompra from './components/FormularioCompra'
import './App.css'

function App() {
  const [compras, setCompras] = useState([])
  const [loading, setLoading] = useState(true)

  const cargarCompras = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/compras`)
      const data = await res.json()
      setCompras(data)
    } catch (err) {
      console.error('Error al cargar compras:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargarCompras()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <FormularioCompra onCompraCreada={cargarCompras} />
      <ListaCompras compras={compras} loading={loading} />
    </div>
  )
}

export default App
