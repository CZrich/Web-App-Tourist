export default function InputTextArea({ id, name, register, label, errors, required }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label 
        htmlFor={id} 
        className="text-sm font-bold text-slate-700 ml-1"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      
      <textarea 
        id={id}
        {...register(name, {
          required: required ? "La descripción es necesaria" : false,
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
          maxLength: { value: 255, message: "Máximo 255 caracteres" }
        })}
        placeholder="Escribe los detalles aquí..."
        className={`
          w-full px-4 py-3 rounded-xl border-2 transition-all outline-none text-slate-700 min-h-[120px] resize-y
          ${errors 
            ? "border-rose-400 bg-rose-50 focus:border-rose-500" 
            : "border-slate-200 bg-white focus:border-indigo-500 shadow-sm"}
        `}
      />
      
      {errors && (
        <span className="text-xs font-semibold text-rose-600 ml-1 animate-in fade-in slide-in-from-top-1">
          {errors.message}
        </span>
      )}
    </div>
  )
}