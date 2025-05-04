import { useState } from 'react'

function FormularioCompra({ onCompraCreada }) {
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [metodoRegistro, setMetodoRegistro] = useState('manual')
  const [mensaje, setMensaje] = useState(null)
  const [errores, setErrores] = useState({})


  const handleSubmit = async (e) => {
    e.preventDefault()
    const nuevosErrores = {}

    if (!descripcion.trim()) {
      nuevosErrores.descripcion = 'La descripción es obligatoria'
    }
  
    if (!monto || isNaN(monto) || parseFloat(monto) <= 0) {
      nuevosErrores.monto = 'Ingresa un monto válido'
    }

    if (!categoria.trim() ) {
      nuevosErrores.categoria = 'Ingresa una categoría válida'
    }
  
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
  
    setErrores({})

    const nuevaCompra = {
      descripcion,
      monto: parseFloat(monto),
      categoria,
      metodoRegistro,
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/compras`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaCompra),
      })

      if (!res.ok) throw new Error('Error al guardar la compra')

      setDescripcion('')
      setMonto('')
      setCategoria('')
      setMetodoRegistro('manual')
      setMensaje('✅ Compra registrada correctamente')

      if (onCompraCreada) onCompraCreada()

    } catch (error) {
      setMensaje('❌ Hubo un problema al guardar')
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">➕ Registrar Compra</h2>

      {mensaje && (
        <div className="mb-4 text-sm text-center text-blue-600">
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Descripción"
          className={`w-full p-2 border rounded ${
            errores.descripcion ? 'border-red-500' : ''
          }`}        
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        {errores.descripcion && (
          <p className="text-sm text-red-500 mt-1">{errores.descripcion}</p>
        )}

        <input
          type="number"
          step="0.01"
          placeholder="Monto"
          className={`w-full p-2 border rounded ${
            errores.descripcion ? 'border-red-500' : ''
          }`}        
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        {errores.monto && (
          <p className="text-sm text-red-500 mt-1">{errores.monto}</p>
        )}

        <input
          type="text"
          placeholder="Categoría"
          className={`w-full p-2 border rounded ${
            errores.categoria ? 'border-red-500' : ''
          }`}
        
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        {errores.categoria && (
          <p className="text-sm text-red-500 mt-1">{errores.categoria}</p>
        )}

        <select
          className="w-full p-2 border rounded"
          value={metodoRegistro}
          onChange={(e) => setMetodoRegistro(e.target.value)}
        >
          <option value="manual">Manual</option>
          <option value="escaneo">Escaneo</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar Compra
        </button>
      </form>
    </div>
  )
}

export default FormularioCompra
