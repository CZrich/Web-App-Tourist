import React from 'react'

export default function InputFechaServicio({id,name,label,register,errors,type}) {
  return (
    <div className='flex flex-col m-4 gap-2'>
        
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
                
                className='text-xl caret-blue-700 rounded-lg  w-[400px] h-[60px]  border-b-4 border-b-indigo-900 '
                />
            {
                errors && <span className='text-red-600'> {errors?.message}</span>
            }



    </div>
  )
}
