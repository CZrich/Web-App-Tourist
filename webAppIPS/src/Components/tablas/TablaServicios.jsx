import React from 'react';
import { useEffect, useState } from 'react';
import { getServiciosTuristico ,getServicioPorId,activarServicio,inactivarServicio} from '../../Services/servicios.turistico.js';
import { Link,useNavigate,useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast'
export default function TablaServicios({ servicios, refresh, setValue }) {
  const navigator = useNavigate();

  const handleAccion = async (id, funcion, mensaje) => {
    try {
      await funcion(id);
      toast.success(mensaje);
      refresh(); 
    } catch (error) {
      toast.error("Error al procesar la solicitud");
    }
  };

  return (
    <div className="w-full">
      {/* Contenedor con scroll horizontal para tablas muy anchas en tablets */}
      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Detalles del Servicio</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vista Previa</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Estado</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {servicios.map((servicio) => (
              <tr key={servicio.id} className="hover:bg-indigo-50/40 transition-all group">
                {/* Nombre y Destino */}
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-indigo-700 transition-colors">
                      {servicio.nombre}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {servicio.destino}
                    </span>
                  </div>
                </td>

                {/* Imagen con Ring Style */}
                <td className="px-6 py-4">
                  <div className="relative w-12 h-12">
                    <img 
                      src={`http://127.0.0.1:2024/api/servicios/${servicio.id}/imagen`} 
                      alt="preview" 
                      className="w-full h-full object-cover rounded-lg shadow-inner ring-2 ring-slate-100 group-hover:ring-indigo-300 transition-all"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=No+Image'}
                    />
                  </div>
                </td>

                {/* Precio con formato */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-slate-700">
                    ${servicio.costo?.toLocaleString()}
                  </span>
                </td>

                {/* Badge de Estado */}
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-tight ${
                    servicio.estado === 'A' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-rose-100 text-rose-700'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${servicio.estado === 'A' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    {servicio.estado === 'A' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>

                {/* Botones con Iconos/Texto */}
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => {
                        setValue('nombre', servicio.nombre);
                        setValue('descripcion', servicio.descripcion);
                        setValue('destino', servicio.destino);
                        setValue('costo', servicio.costo);
                        setValue('fecha', servicio.fecha);
                        navigator(`/administrar/servicios/${servicio.id}`);
                      }}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-bold flex items-center gap-1 transition-colors"
                    >
                      Editar
                    </button>
                    
                    <button 
                      onClick={() => handleAccion(
                        servicio.id, 
                        servicio.estado === 'A' ? inactivarServicio : activarServicio,
                        `Servicio ${servicio.estado === 'A' ? 'desactivado' : 'activado'}`
                      )}
                      className={`text-sm font-bold transition-colors ${
                        servicio.estado === 'A' 
                        ? 'text-rose-500 hover:text-rose-700' 
                        : 'text-emerald-500 hover:text-emerald-700'
                      }`}
                    >
                      {servicio.estado === 'A' ? 'Desactivar' : 'Activar'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Mensaje si no hay datos */}
        {servicios.length === 0 && (
          <div className="text-center py-12 bg-slate-50">
            <p className="text-slate-400 text-sm italic">No hay servicios registrados actualmente.</p>
          </div>
        )}
      </div>
    </div>
  );
}
