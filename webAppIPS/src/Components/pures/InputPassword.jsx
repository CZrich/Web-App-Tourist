import { useState } from 'react';

export default function InputPassword({ label, type: initialType, name, id, placeholder, register, errors }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono de Seguridad */}
        <span className="absolute left-4 text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </span>

        <input 
          type={showPassword ? "text" : initialType} 
          id={id} 
          placeholder={placeholder || "••••••••"} 
          {...register(name, {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "Mínimo 6 caracteres"
            }
          })}
          className={`
            w-full pl-12 pr-12 py-3 rounded-xl border-2 transition-all outline-none text-slate-700
            ${errors 
              ? "border-rose-400 bg-rose-50 focus:border-rose-500" 
              : "border-slate-200 bg-white focus:border-indigo-500 shadow-sm"}
          `}
        />

        {/* Botón para mostrar/ocultar */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 text-slate-400 hover:text-indigo-600 transition-colors"
        >
          {showPassword ? "Ocultar" : "Ver"}
        </button>
      </div>

      {errors && (
        <span className="text-xs font-semibold text-rose-600 ml-1 animate-in fade-in slide-in-from-top-1">
          {errors.message}
        </span>
      )}
    </div>
  )
}