import React from 'react'
import {useForm} from "react-hook-form"
import InputEmail from '../pures/InputEmail';
import InputFechaNacimiento from '../pures/InputFechaNacimiento';
import InputCadena from '../pures/InputCadena';
import InputCel from '../pures/InputCel';
import InputDNI from '../pures/InputDNI';
import InputSelectNacionalidad from '../pures/InputSelectNacionalidad';
import InputCargo from '../pures/InputCargo';
import InputMonto from '../pures/InputMonto';
export default function RegistroEmpleados() {
    const {register,setValue,formState:{errors},handleSubmit,reset} =useForm();
    const mandar=(data)=>{
        console.log(data);
      reset()
    }
  return (
    <div className='flex justify-center'>RegistroEmpleados

        <form onSubmit={handleSubmit(mandar)} className=' m-5 h-[800px] w-[700px] bg-rose-300' >
            
            <div className='flex flex-row'>
            <InputCadena
            
            required={true}                       
            type={"text"}
            name={"nombres"}
            id={"nombres"}  
            label={"Nombres"}
            errors={errors.nombres}
            register={register}                       
                                
                                
            />

            <InputCadena
            
            required={true}                       
            type={"text"}
            name={"apellidos"}
            id={"apellidos"}  
            label={"Apellidos"}
            errors={errors.apellidos}
            register={register}                       
                                
                                
            />
          

            </div>
           
          
           <InputFechaNacimiento 
           label={"Fecha de Nacieminto"}
           id={"nacimiento"}
           name={"nacimiento"}
           errors={errors.nacimiento}
           register={register}
           type={"date"}

           />
                  <InputSelectNacionalidad
          value={"PE"}
         label={"Seleccione su  Pais"}
         id={"pais"}
         name={"pais"}
         register={register}
         
        />
        <InputDNI
        label={"Ingrese su DNI: "}
        type={"number"}
        id={"dni"}
        name={"dni"}
        register={register}
        errors={errors.dni}
        />
        <InputCel
        label={"Ingrese numero de contacto:"}
         type={"number"}
         id={"numeroCel"}
         name={"numeroCel"}
         register={register}
         errors={errors.numeroCel}


          />
          
           
            
            <InputEmail
            label={"email"}
            type={"email"}
            id={"email"}
            name={"email"}
            errors={errors.email}
            register={register}
            />

            <InputCargo
             value={"colab"}
             label={"Cargo"}
             register={register}
             id={"cargo"}
             name={"cargo"}
            />
           
           <InputMonto
            type={"number"}
            label={"Sueldo"}
            register={register}
            id={"sueldo"}
            name={"sueldo"}
            placeholder={"40000"}
            required={true}
            readOnly={false}
           />




         <div className='flex justify-center m-4'>

            <button type="submit" 
            
            className='bg-rose-500 p-4 text-white text-xm rounded-lg hover:bg-rose-700'
            > 
            
            Guardar
            
            </button>
         </div>

        </form>


    </div>
  )
}
