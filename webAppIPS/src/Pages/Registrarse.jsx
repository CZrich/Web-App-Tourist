import React from 'react'
import RegisterForm from '../Components/Forms/RegisterFrom'

export default function Registrarse() {
  return (
    // min-h-screen asegura que el fondo ocupe al menos la pantalla completa
    // bg-slate-50 mantiene la paleta limpia que estamos usando en todo el sistema
    <div className='min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4'>
      
      {/* Opcional: Un pequeño link para volver al login */}
      <div className="w-full max-w-4xl mb-6 text-left">
         <button 
            onClick={() => window.history.back()} 
            className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-2"
         >
            &larr; Volver al inicio
         </button>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="w-full">
         <RegisterForm />
      </div>

    </div>
  )
}