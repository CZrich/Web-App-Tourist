export default function InputEmail({ label, type, id, errors, register, name }) {
  // Regex corregido: Sin comillas y como objeto literal de JS
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono de Email */}
        <span className="absolute left-4 text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>

        <input 
          type={type} 
          id={id} 
          placeholder="ejemplo@correo.com" 
          {...register(name, {
            required: "El correo es obligatorio",
            pattern: {
              value: emailRegex,
              message: "Ingrese un formato de correo válido"
            }
          })}
          className={`
            w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-slate-700
            ${errors 
              ? "border-rose-400 bg-rose-50 focus:border-rose-500" 
              : "border-slate-200 bg-white focus:border-indigo-500 shadow-sm"}
          `}
        />
      </div>
      
      {errors && (
        <span className="text-xs font-semibold text-rose-600 ml-1 animate-in fade-in slide-in-from-top-1">
          {errors.message}
        </span>
      )}
    </div>
  )
}