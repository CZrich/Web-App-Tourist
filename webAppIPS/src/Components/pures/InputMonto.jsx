import React from 'react'

export default function InputMonto({id,label,name,errors,placeholder,register,type,required,readOnly}) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} readOnly={readOnly}  {...register(name,
      
      {
         required:{required}

      })} 
      className=' text-xl caret-blue-700 rounded-lg  w-[400px] h-[60px]  border-b-4 border-b-indigo-900  '
      />
      {
        errors && <span > {errors?.message}</span>

      }


    </div>
  )
}
