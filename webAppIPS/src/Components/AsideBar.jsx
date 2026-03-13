
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../context/ContextoAuth";

export default function AsideBar() {
  const { authState } = useAuth();
  const { role } = authState;
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  // Estilos base para los links de escritorio
  const baseLink = "flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-slate-600 hover:bg-indigo-600 hover:text-white font-medium";
  const activeLink = "bg-indigo-600 text-white shadow-lg shadow-indigo-200";

  return (
    <>
      {/* SIDEBAR PC / TABLET */}
      <nav className='hidden md:flex flex-col md:w-20 lg:w-64 bg-white h-screen p-4 gap-y-3 border-r border-slate-200'>
        <div className="hidden lg:block px-2 pt-4 pb-6">
            <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Panel de Gestión</h2>
        </div>
        
        {(role === "admin" || role === "empleado") && (
          <>
            <Link to="servicios" className={`${baseLink} ${isActive('servicios') ? activeLink : ''}`}>
              <img src='/assets/icons/icons8-servicios-64.png' className="w-6 h-6 object-contain" alt="Servicios" />
              <span className="hidden lg:inline">Servicios</span>
            </Link>
            
            <Link to="paquetes" className={`${baseLink} ${isActive('paquetes') ? activeLink : ''}`}>
              <img src="/assets/icons/paquetes.png" className="w-6 h-6 object-contain" alt="Paquetes" />
              <span className="hidden lg:inline">Paquetes</span>
            </Link>
            
            {role === "admin" && (
              <Link to="empleados" className={`${baseLink} ${isActive('empleados') ? activeLink : ''}`}>
                <img src="/assets/icons/empleados50.png" className="w-6 h-6 object-contain" alt="Empleados" />
                <span className="hidden lg:inline">Empleados</span>
              </Link>
            )}
            
            {role === "admin" && (
              <Link to="clientes" className={`${baseLink} ${isActive('clientes') ? activeLink : ''}`}>
                <img src="/assets/icons/icons8-usuario-64.png" className="w-6 h-6 object-contain" alt="Clientes" />
                <span className="hidden lg:inline">Clientes</span>
              </Link>
            )}
          </>
        )}
      </nav>

      {/* MÓVIL: Menú inferior fijo (Tabs) */}
      <nav className='md:hidden fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 flex justify-around items-center p-3 z-[100] shadow-2xl'>
        {(role === "admin" || role === "empleado") && (
          <>
            <Link to="servicios" className={`flex flex-col items-center gap-1 ${isActive('servicios') ? 'text-indigo-400' : 'text-slate-400'}`}>
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