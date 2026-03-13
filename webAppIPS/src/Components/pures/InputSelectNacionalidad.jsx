export default function InputSelectNacionalidad({ value, label, id, name, register }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-bold text-slate-700 ml-1">
        {label}
      </label>
      
      <select 
        id={id} 
        name={name} 
        defaultValue={value} 
        {...register(name)}
        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 focus:border-indigo-500 outline-none transition-all cursor-pointer shadow-sm appearance-none"
      >
        <option value="" disabled>Seleccione un país...</option>
        <option value="PE">Perú</option>
        <option value="AR">Argentina</option>
        <option value="CO">Colombia</option>
        <option value="MX">México</option>
        <option value="ES">España</option>
        <option value="US">Estados Unidos</option>
        <option value="CL">Chile</option>
        {/* ... el resto de tus opciones ... */}
        <option value="AF">Afganistán</option>
        {/* Asegúrate de mantener la lista completa que ya tenías */}
      </select>
    </div>
  )
}