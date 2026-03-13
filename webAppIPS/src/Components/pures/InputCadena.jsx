export default function InputCadena({required, label, placeholder, type, errors, register, id, name}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        {...register(name, {
          required: required ? "Este campo es obligatorio" : false,
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
          maxLength: { value: 60, message: "Máximo 60 caracteres" }
        })}
        className={`
          w-full px-4 py-3 rounded-xl border-2 transition-all outline-none text-slate-700
          ${errors 
            ? "border-rose-400 bg-rose-50 focus:border-rose-500" 
            : "border-slate-200 bg-white focus:border-indigo-500 shadow-sm"}
        `}
      />
      
      {errors && (
        <span className="text-xs font-semibold text-rose-600 ml-1 animate-pulse">
          {errors.message}
        </span>
      )}
    </div>
  )
}