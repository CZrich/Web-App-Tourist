import React from 'react'

export default function InputCargo({label,register,id,name,value}) {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
         <select id={id}  defaultValue={value} name={name} {...register(name)}
         className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
         >
                <option value="admin">Administrador</option>
                <option value="colab">Colaborador</option>
                <option value="ventas">Agente Ventas</option>


         </select>

    </div>
  )
}
