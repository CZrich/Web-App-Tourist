import React from 'react'

const regex=" /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
export default function InputEmail({label,type,id,errors,register,name}) {
    //const{ register,formState:{errors}} =useForm();
  return (
    <div className='flex flex-col'>
        <label htmlFor='email' >{label}</label>
                    <input type={type} id={id} placeholder='example@gmail.com' name={name} {...register(name,
                        {
                            required: true,
                            pattern: {regex},
                                

                        })}
                        className=' text-xl caret-blue-700 rounded-lg h-[50px] w-[150px]m-2 border-4 border-b-indigo-500 '
                    />
                    {
                        errors && <span className='text-red-600'> {errors?.message}</span>
                    }

    </div>
  )
}
