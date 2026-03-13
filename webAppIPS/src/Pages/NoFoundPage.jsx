import React from 'react';
import { Link } from "react-router-dom";

export default function NoFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
      
      {/* Icono grande o número de error */}
      <div className="text-9xl font-extrabold text-indigo-600 mb-4 opacity-20">404</div>
      
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Página no encontrada</h1>
      <p className="text-slate-500 mb-8 max-w-sm">
        Parece que la página que estás buscando no existe o ha sido movida.
      </p>

      {/* Botón de acción */}
      <Link 
        to="/" 
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95"
      >
        Regresar al inicio
      </Link>

    </div>
  );
}