import React from 'react'
import ListaServicios from '../Components/ListaServicios'

export default function ServiciosTuristicos() {
  return (
    // Usamos min-h-screen para que ocupe toda la pantalla
    // Agregamos bg-slate-50 para que el fondo sea uniforme en todo el sistema
    <div className='min-h-screen bg-slate-50 p-6 md:p-8'>
      
      {/* HEADER DE ACCIÓN */}
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-800">Servicios Turísticos</h1>
            <p className="text-slate-500 mt-1">Gestiona los servicios disponibles para tus clientes.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95">
            + Nuevo Servicio
        </button>
      </div>

      {/* CONTENEDOR DE LA LISTA */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <ListaServicios />
      </div>
      
    </div>
  )
}