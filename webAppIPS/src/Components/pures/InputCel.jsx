export default function InputCel({ label, type, id, name, register, errors }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono decorativo de celular */}
        <span className="absolute left-4 text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </span>

        <input 
          type={type} 
          id={id} 
          placeholder="967 854 563"
          {...register(name, {
            required: "El número es obligatorio",
            minLength: {
              value: 9,
              message: "Debe tener exactamente 9 dígitos",
            },
            maxLength: {
              value: 9,
              message: "No puede exceder los 9 dígitos",
            },
            pattern: {
              value: /^[0-9]+$/, // Corregido: Sin comillas para que sea un objeto Regex real
              message: "Ingrese solo números",
            },
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