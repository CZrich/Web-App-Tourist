import React from 'react'

export default function InputTextArea({ id, name, register, label, errors, required }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea name={name} id={id} {...register(name,

        {
          required: { required },
          minLength: {
            value: 2,
            message: "debe tener mas de 2 caracteres",
          },
          maxLength: {
            value: 50,
            message: "no puede tener mas de 20 caracteres"
          }



        })}>


      </textarea>
      {
        errors && <span> {errors?.message}</span>
      }

    </div>
  )
}
