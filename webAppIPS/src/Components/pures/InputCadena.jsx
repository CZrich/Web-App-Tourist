import React from 'react'

export default function InputCadena({required,label,type,errors,register,id,name}) {
  return (

    <div   className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} {...register(name,
      {
        required:{required},
        
        minLength:{
            value:2,
            message:"debe tener mas de 2 caracteres",
        },
        maxLength:{
            value:20,
            message:"no puede tener mas de 20 caracteres"
        }


      })}
      className=' text-xl caret-blue-700 rounded-lg h-[60px] m-2 border-4 border-b-indigo-500 '
      />
      
      {
         errors && <span>{errors?.message}</span>
      }
     
      
    </div>
  )
}
