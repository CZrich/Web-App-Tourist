import React from 'react'

export default function InputMonto({id,label,name,errors,placeholder,register,type,required,readOnly}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} readOnly={readOnly}  {...register(name,
      
      {
         required:{required}

      })} 
      className=' flex flex-col text-xl caret-blue-700 rounded-lg h-[60px] m-2 border-4 border-b-indigo-500 '
      />
      {
        errors && <span > {errors?.message}</span>

      }


    </div>
  )
}
