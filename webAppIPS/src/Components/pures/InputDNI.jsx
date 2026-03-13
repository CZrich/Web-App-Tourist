export default function InputDNI({ label, type, id, name, register, errors }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono de Documento/ID */}
        <span className="absolute left-4 text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 1 4 3" />
          </svg>
        </span>

        <input 
          type={type} 
          id={id} 
          placeholder="Ej: 45963214"
          {...register(name, {
            required: "El DNI es obligatorio",
            minLength: {
              value: 8,
              message: "El DNI debe tener 8 dígitos",
            },
            maxLength: {
              value: 8,
              message: "El DNI no puede tener más de 8 dígitos",
            },
            pattern: {
              value: /^[0-9]+$/, // Regex puro para validar solo números
              message: "El DNI solo contiene números",
            },
          })}
          className={`
            w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-slate-700 text-lg
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