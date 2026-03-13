import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../context/ContextoAuth";

export default function AsideBar() {
  const { authState } = useAuth();
  const { role } = authState;
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  // Aseguramos que el contenedor tenga fondo blanco sólido para que los iconos no se pierdan
  return (
    <>
      {/* SIDEBAR PC (Igual que antes) */}
      <nav className='hidden md:flex flex-col md:w-20 lg:w-64 bg-white h-screen p-4 gap-y-3 border-r border-slate-200'>
        {/* ... (Tu código de desktop ya está bien) ... */}
      </nav>

      {/* MÓVIL: Menú inferior fijo */}
      <nav className='md:hidden fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 flex justify-around items-center p-3 z-[100] shadow-2xl'>
        {(role === "admin" || role === "empleado") && (
          <>
            <Link to="servicios" className={`flex flex-col items-center gap-1 ${isActive('servicios') ? 'text-indigo-400' : 'text-slate-400'}`}>
                {/* Aumentamos tamaño y añadimos filtro para que resalten */}
                <img src='/assets/icons/icons8-servicios-64.png' className='w-7 h-7 filter brightness-200' alt="Servicios" />
                <span className="text-[10px] font-bold">Servicios</span>
            </Link>
            
            <Link to="paquetes" className={`flex flex-col items-center gap-1 ${isActive('paquetes') ? 'text-indigo-400' : 'text-slate-400'}`}>
                <img src="/assets/icons/paquetes.png" className='w-7 h-7 filter brightness-200' alt="Paquetes" />
                <span className="text-[10px] font-bold">Paquetes</span>
            </Link>
            
            {role === "admin" && (
              <Link to="empleados" className={`flex flex-col items-center gap-1 ${isActive('empleados') ? 'text-indigo-400' : 'text-slate-400'}`}>
                <img src="/assets/icons/empleados50.png" className='w-7 h-7 filter brightness-200' alt="Personal" />
                <span className="text-[10px] font-bold">Personal</span>
              </Link>
            )}
          </>
        )}
      </nav>
    </>
  );
}