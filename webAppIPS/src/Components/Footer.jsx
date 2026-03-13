import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
             <img src="assets/icons/icons8-alpes-64.png" alt="logo" className='w-6 h-6' />
          </div>
          <span className="text-xl font-bold text-white">Acme Travel</span>
        </div>
        
       

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Acme Travel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}