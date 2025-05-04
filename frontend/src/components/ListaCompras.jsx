import { useEffect, useState } from 'react'

function ListaCompras() {
  const [compras, setCompras] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/compras`)
        const data = await res.json()
        setCompras(data)
      } catch (err) {
        setError('Error al cargar las compras 🛑')
      } finally {
        setLoading(false)
      }
    }

    fetchCompras()
  }, [])

  if (loading) return <p className="text-center mt-8">Cargando compras...</p>
  if (error) return <p className="text-red-500 text-center mt-8">{error}</p>

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">📋 Lista de Compras</h2>
      {compras.length === 0 ? (
        <p className="text-gray-600">No hay compras registradas.</p>
      ) : (
        <ul className="space-y-2">
          {compras.map((compra) => (
            <li
              key={compra.id}
              className="border p-3 rounded flex justify-between items-center hover:bg-gray-50"
            >
              <div>
                <p className="font-medium">{compra.descripcion}</p>
                <p className="text-sm text-gray-500">
                  {new Date(compra.fecha).toLocaleDateString()} | {compra.categoria}
                </p>
              </div>
              <span className="text-red-700 bg-yellow-100 font-bold">${compra.monto.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaCompras
