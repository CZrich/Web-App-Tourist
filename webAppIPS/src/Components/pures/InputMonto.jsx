export default function InputMonto({id, label, name, errors, placeholder, register, type, required, readOnly}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      
      <div className="relative flex items-center">
        {/* Símbolo de moneda fijo */}
        <span className="absolute left-4 text-slate-500 font-bold select-none">
          $
        </span>

        <input 
          type={type} 
          id={id} 
          placeholder={placeholder || "0.00"} 
          readOnly={readOnly}
          {...register(name, {
            required: required ? "El monto es obligatorio" : false,
            min: {
              value: 0,
              message: "El monto no puede ser negativo"
            },
            pattern: {
              value: /^[0-9]+(\.[0-9]{1,2})?$/,
              message: "Use formato decimal (ej: 100.50)"
            }
          })}
          className={`
            w-full pl-8 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-slate-700 font-medium
            ${readOnly ? "bg-slate-100 cursor-not-allowed border-slate-200" : "bg-white"}
            ${errors 
              ? "border-rose-400 bg-rose-50 focus:border-rose-500" 
              : "border-slate-200 focus:border-indigo-500 shadow-sm"}
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