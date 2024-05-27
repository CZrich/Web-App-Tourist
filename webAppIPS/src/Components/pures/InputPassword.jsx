import React from 'react'

export default function InputPassword({label,type,name,id,placeholder,register,errors}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} {...register(name,
                {
                    required: true,
                    minLength: {
                        value: 6,
                        message: " debe tener minimo 6 caracteres."


                    }


                })}
                className=' text-xl caret-blue-800 rounded-lg h-[60px] m-2  border-4 border-b-indigo-500 '
            />

            {

                errors && <span className='text-red-600'> {errors.message}</span>
            }

        </div>
    )
}
