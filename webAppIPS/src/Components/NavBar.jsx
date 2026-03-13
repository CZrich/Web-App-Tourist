import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/ContextoAuth';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, logout } = useAuth();
  const { role } = authState;

  const closeMenu = () => setIsOpen(false);

  // Función para cerrar sesión
  const handleLogout = () => {
    logout();
    closeMenu();
    window.location.href = '/login'; 
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="bg-indigo-600 p-2 rounded-xl">
              <img src="assets/icons/icons8-alpes-64.png" alt="logo" className='w-6 h-6' />
            </div>
            <span className="text-xl font-bold tracking-tight">Acme Travel</span>
          </Link>

          {/* Menú Desktop (Visible en md en adelante) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-indigo-400 transition-colors font-medium">Home</Link>
            <Link to="servicios" className="hover:text-indigo-400 transition-colors font-medium">Servicios</Link>
            <Link to="paquetes" className="hover:text-indigo-400 transition-colors font-medium">Paquetes</Link>
            
            {/* Dashboard en Escritorio */}
            {(role === "admin" || role === "empleado") && (
              <Link to="administrar" className="hover:text-indigo-400 transition-colors font-medium">Dashboard</Link>
            )}
          </nav>

          {/* Botones Auth Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {!role ? (
              <>
                <Link to="login" className="text-slate-300 hover:text-white transition">Login</Link>
                <Link to="registrarse" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all active:scale-95">Registrarse</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-xl transition">Logout</button>
            )}
          </div>

          {/* Hamburguesa móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil (Toggle) */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 p-6 flex flex-col gap-4">
          <Link to="/" className="text-lg hover:text-indigo-400" onClick={closeMenu}>Home</Link>
          <Link to="servicios" className="text-lg hover:text-indigo-400" onClick={closeMenu}>Servicios</Link>
          <Link to="paquetes" className="text-lg hover:text-indigo-400" onClick={closeMenu}>Paquetes</Link>
          
          {/* Dashboard en Móvil - CORREGIDO */}
          {(role === "admin" || role === "empleado") && (
            <Link to="administrar" className="text-lg hover:text-indigo-400 font-bold" onClick={closeMenu}>Dashboard</Link>
          )}

          {!role ? (
            <>
              <Link to="login" className="text-lg hover:text-indigo-400" onClick={closeMenu}>Login</Link>
              <Link to="registrarse" className="bg-indigo-600 text-center py-3 rounded-xl font-bold" onClick={closeMenu}>Registrarse</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-slate-700 text-center py-3 rounded-xl">Logout</button>
          )}
        </div>
      )}
    </header>
  );
}