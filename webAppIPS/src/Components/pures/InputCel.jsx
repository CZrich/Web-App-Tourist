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
        })}/>
        {
            errors && <span>{errors?.message}</span>
        }



    </div>
  )
}
