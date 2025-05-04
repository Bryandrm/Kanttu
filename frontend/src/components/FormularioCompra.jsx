import { useState } from 'react'

function FormularioCompra({ onCompraCreada }) {
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [metodoRegistro, setMetodoRegistro] = useState('manual')
  const [mensaje, setMensaje] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!descripcion || !monto) {
      setMensaje('🛑 Debes ingresar descripción y monto')
      return
    }

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
          className="w-full p-2 border rounded"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Monto"
          className="w-full p-2 border rounded"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <input
          type="text"
          placeholder="Categoría"
          className="w-full p-2 border rounded"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

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
