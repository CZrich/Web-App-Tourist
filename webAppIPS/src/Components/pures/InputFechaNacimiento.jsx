export default function InputFechaNacimiento({ label, errors, type, id, name, register }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} <span className="text-rose-500">*</span>
      </label>
      
      <div className="relative flex items-center">
        {/* Icono de Calendario */}
        <span className="absolute left-4 text-slate-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>

        <input 
          type={type} 
          name={name} 
          id={id} 
          {...register(name, {
            required: "La fecha es obligatoria",
            validate: (value) => {
              if (!value) return true;
              const birthDate = new Date(value);
              const today = new Date();
              let age = today.getFullYear() - birthDate.getFullYear();
              const monthDiff = today.getMonth() - birthDate.getMonth();
              
              // Ajuste preciso por si aún no ha cumplido años este año
              if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
              }

              return age >= 18 || "Debes ser mayor de 18 años";
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