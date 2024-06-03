import React from 'react'

export default function InputCel({label,type,id,name,register,errors}) {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name}{...register(name,{

            required:true,
            minLength:{
                value:9,
                message:"debe tener 9 números",

            },
            pattern:{
                value:"/^\d+$/",
                message:"ingrese solo numeros",
            },
        })}
        className=' text-xl caret-blue-700 rounded-lg h-[60px] m-2 border-4 border-b-indigo-500 '
        />
        {
            errors && <span>{errors?.message}</span>
        }



    </div>
  )
}
