import React from 'react';

export default function CardPaqueteTuristico({ paquete }) {
  return (
    <div className='bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all hover:shadow-lg hover:scale-[1.02]'>
      
      {/* Grid de imágenes: usamos aspect-square y object-cover para que siempre cuadren */}
      <div className='grid grid-cols-2 gap-1'>
        {paquete.servicios.slice(0, 4).map((item) => (
          <div key={item.id} className="aspect-square overflow-hidden">
            <img 
              src={`http://127.0.0.1:2024/api/servicios/${item.id}/imagen`} 
              alt={item.nombre} 
              className='w-full h-full object-cover' 
            />
          </div>
        ))}
      </div>
     
      <div className='p-5 flex flex-col flex-grow'>
        <h3 className='text-lg font-bold text-slate-800 mb-3'>Servicios Incluidos</h3>
        
        <ul className='space-y-1 mb-6 flex-grow'>
          {paquete.servicios.map((item) => (
            <li key={item.id} className='text-sm text-slate-500 font-medium flex items-center'>
              <span className="mr-2 text-indigo-500">•</span> {item.nombre}
            </li>
          ))}
        </ul>

        {/* Precio destacado al final */}
        <div className='mt-auto pt-4 border-t border-slate-100 flex justify-between items-center'>
          <span className='text-slate-500 font-medium'>Precio total:</span>
          <span className='text-xl font-bold text-indigo-600'>${paquete.paqCos}</span>
        </div>
      </div>
    </div>
  );
}