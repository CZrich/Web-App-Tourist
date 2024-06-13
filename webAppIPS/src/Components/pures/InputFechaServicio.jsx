import React from 'react'

export default function InputFechaServicio({id,name,label,register,errors,type}) {
  return (
    <div>
        
        <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id}     {...register(name,
                {
                    required: true,
                    validate: (data) => {
                        const dataPer = new Date(data);
                        const currentYear = new Date();
                        if (currentYear.getFullYear() <= dataPer.getFullYear() && currentYear.getDay()<= dataPer.getDay() ) {
                            return true;

                        } else {

                            return "debe ser una fecha valida"
                        }


                    }
                })} 
                
                className='w-full max-w-64  text-base'
                />
            {
                errors && <span className='text-red-600'> {errors?.message}</span>
            }



    </div>
  )
}
