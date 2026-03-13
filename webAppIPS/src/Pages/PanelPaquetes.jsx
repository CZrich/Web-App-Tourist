import React from 'react'
import ListaPaquetes from '../Components/ListaPaquetes'

export default function PanelPaquetes() {
  return (
    // Eliminamos h-[100vh] para que el contenedor crezca según el contenido
    // Usamos p-6 para dar "aire" al panel, evitando que esté pegado a los bordes
    <div className='flex flex-col min-h-screen bg-slate-50'>
      
      {/* Encabezado del Panel */}
      <div className="px-6 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-slate-800">Panel de Paquetes</h1>
        <p className="text-slate-500 text-sm">Gestiona y visualiza tus paquetes turísticos disponibles.</p>
      </div>

      {/* Contenedor de la lista */}
      <div className='flex-1 p-6'>
        <ListaPaquetes />
      </div>
      
    </div>
  )
}