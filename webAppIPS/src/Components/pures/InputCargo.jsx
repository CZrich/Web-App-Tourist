import React from 'react'

export default function InputCargo({label,register,id,name,value}) {
  return (
    <div >
        <label htmlFor={id}>{label}</label>
         <select id={id}  defaultValue={value} name={name} {...register(name)}
         className=' text-lg h-[20px] w-[200px]'
         >
                <option value="admin">Administrador</option>
                <option value="colab">Colaborador</option>
                <option value="ventas">Agente Ventas</option>


         </select>

    </div>
  )
}
