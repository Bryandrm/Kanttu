import { useEffect, useState } from 'react'

function ListaCompras({ compras, loading }) {
  if (loading) return <p className="text-center mt-8">Cargando compras...</p>
  if (!compras.length) return <p className="text-center mt-8">No hay compras registradas.</p>

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">📋 Lista de Compras</h2>
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
            <span className="text-green-600 font-bold">${compra.monto.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaCompras
