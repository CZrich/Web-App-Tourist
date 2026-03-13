import React from 'react'
import ListaPaquetes from '../Components/ListaPaquetes'

export default function PaquetesTuristicos() {
  return (
    // Usamos min-h-screen para asegurar que el fondo cubra toda la pantalla
    // Agregamos un padding consistente para separar del AsideBar
    <div className='min-h-screen bg-slate-50 p-6 md:p-8'>
      
      {/* HEADER DE ACCIÓN: Fundamental para que el usuario sepa qué hacer */}
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-800">Paquetes Turísticos</h1>
            <p className="text-slate-500 mt-1">Gestiona tus paquetes, precios y destinos desde aquí.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95">
            + Nuevo Paquete
        </button>
      </div>

      {/* CONTENIDO: La lista de paquetes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <ListaPaquetes />
      </div>
      
    </div>
  )
}