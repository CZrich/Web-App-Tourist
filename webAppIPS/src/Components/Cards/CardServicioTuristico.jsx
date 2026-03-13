import React from 'react';

export default function CardServicioTuristico({ servicio }) {
  const imageUrl = `http://127.0.0.1:2024/api/servicios/${servicio.id}/imagen`;

  return (
    // 1. Eliminamos m-4 (causa problemas en grids). El espaciado lo maneja el padre con 'gap'.
    // 2. Usamos 'flex flex-col h-full' para que todas las tarjetas tengan la misma altura.
    <div className='flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]'>
      
      {/* 3. Contenedor de imagen con aspect-video para que todas tengan el mismo tamaño */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
        <img 
          src={imageUrl} 
          alt={servicio.nombre} 
          className='w-full h-full object-cover' 
        />
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className='p-5 flex flex-col flex-grow'>
        <h3 className='text-lg font-bold text-slate-800 line-clamp-1'>{servicio.nombre}</h3>
        <p className="text-slate-500 text-sm mt-2 flex-grow line-clamp-2">{servicio.descripcion}</p>
        
        {/* Footer de la tarjeta: Siempre alineado abajo */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-100 text-center">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Destino</p>
            <p className="text-sm font-semibold text-slate-700 truncate">{servicio.destino}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Fecha</p>
            <p className="text-sm font-semibold text-slate-700">{servicio.fecha}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Precio</p>
            <p className="text-sm font-bold text-indigo-600">$ {servicio.costo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}