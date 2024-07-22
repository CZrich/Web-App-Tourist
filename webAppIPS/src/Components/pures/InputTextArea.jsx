import React from 'react'

export default function InputTextArea({ id, name, register, label, errors, required }) {
  return (
    <div className='flex flex-col w-[50%]  m-4 gap-2 '>
      <label htmlFor={id}>{label}</label>
      <textarea name={name} id={id} placeholder='  Añadir descipcion...' {...register(name,

        {
          required: { required },
          minLength: {
            value: 2,
            message: "debe tener mas de 2 caracteres",
          },
          maxLength: {
            value: 255,
            message: "no puede tener mas de 255 caracteres"
          }



        })}
        className='w-[auto] overflow-y-auto h-[80px] resize-none   border-b-4 border-b-indigo-900 '
        >


      </textarea>
      {
        errors && <span> {errors?.message}</span>
      }

    </div>
  )
}
