export default function InputFechaServicio({ id, name, label, register, errors, type }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono de Calendario de Eventos */}
        <span className="absolute left-4 text-slate-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>

        <input 
          type={type} 
          name={name} 
          id={id} 
          {...register(name, {
            required: "La fecha del servicio es obligatoria",
            validate: (value) => {
              if (!value) return true;
              
              const fechaSeleccionada = new Date(value);
              const hoy = new Date();
              // Resetear horas para comparar solo días
              hoy.setHours(0, 0, 0, 0);
              fechaSeleccionada.setHours(0, 0, 0, 0);

              return fechaSeleccionada >= hoy || "No puedes elegir una fecha pasada";
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