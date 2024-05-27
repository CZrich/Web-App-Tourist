import React from 'react'
import { useForm } from "react-hook-form";
import InputEmail from '../pures/InputEmail';
import InputPassword from '../pures/InputPassword';
import InputSelectNacionalidad from '../pures/InputSelectNacionalidad';
import InputCel from '../pures/InputCel';
import InputDNI from '../pures/InputDNI';

export default function RegisterForm() {
  const { watch, register, reset, handleSubmit, formState: { errors } } = useForm();
  const mandar = (data) => {
    console.log(data);
    reset();
  }
  return (
    <div className='flex justify-center border-2 items-center '>

      <form onSubmit={handleSubmit(mandar)} 
       className='flex flex-col gep-4  bg-indigo-500 m-2 rounded-lg w-[900px] h-[800px] items-center'
      >
        <div className='flex flex-col gap-2 m-4'>
          <label htmlFor="nombre">Nombres</label>
          <input type="text"  placeholder='  Pulga...' id="nombre"{...register("nombre",
            {
              required: "nombre invalido",
              pattern: "/^[a-zA-Z]+$/",
              minLength: {
                value: 2,
                message: "debe tener mas de dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "no puede tener mas de 20 caracteres",
              }

            }

          )} 
          className=' rounded-lg  w-[400px] h-[60px]'
          />
          {errors.nombre && <span>{errors.nombre?.message}</span>}
        </div>

        <div className='flex flex-col gap-2 m-4'>
          <label htmlFor="apellidoP">Apellidos Parteno</label>
          <input type="text"  placeholder="   Fernandez..." id="apellidoP" {...register("apellidoP",
            {

              required: "apellido invalido",
              pattern: "/^[a-zA-Z]+$/",
              minLength: {
                value: 2,
                message: "debe tener mas de dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "no puede tener mas de 20 caracteres",
              }



            })} 
             className='rounded-lg  w-[400px] h-[60px]'
            />
            {errors.apellidoP && <span>{errors.apellidoP.message}</span>}

        </div>

        <div className='flex flex-col gap-2 m-4'>
        <label htmlFor="apellidoM">Apellidos Parteno</label>
          <input type="text" id="apellidoM" {...register("apellidoM",
            {

              required: "apellido invalido",
              pattern: "/^[a-zA-Z]+$/",
              minLength: {
                value: 2,
                message: "debe tener mas de dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "no puede tener mas de 20 caracteres",
              }



            })} 
            className='rounded-lg  w-[400px] h-[60px]'
            />
            {errors.apellidoM && <span>{errors.apellidoM.message}</span>}

        </div>
        

        <div className='flex flex-col gap-2 m-4'>
          <label htmlFor="nacimiento"> Fecha de Nacimiento</label>
          <input type="date" {...register("nacimiento",{
            required:true,
            validate: (data)=>{
              
               const dataPer=new Date(data);
              const   currentYear=new Date();
               if(currentYear.getFullYear()-dataPer.getFullYear()>=18){
                   return true;
                 
               }else{

                return "debe ser mayor de 18 años"
               }

            }


          })} 
          className='rounded-lg  w-[400px] h-[60px]'
          />
          {errors.nacimiento && <span>{errors.nacimiento?.message}</span>}
        </div>
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
          label={"Email"}
          type={"email"}
          id={"email"}
          errors={errors.email}
          register={register}
          name={"email"}
        />
        <InputPassword
         label={"Password"}
         type={"password"}
         id={"password"}
         name={"password"}
         placeholder={"password"}
         register={register}
         errors={errors.password}
        
        />
       <div>
          <label htmlFor="confirmPassword">Confirmar Password</label>
          <input type="password" id="confirmPassword" placeholder='password...'{...register("confirmPassword",{

              required:true,
              minLength:{
                value:6,
                message:"minimo 6 caracteres",
              },
              validate:(data)=>{
                 if(data===watch("password")){
                  return true;
                 }else{
                  return "las contraseñas no coinciden";
                 }
              }
          })} />
          {
             errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>
          }


       </div>




        <div>
           <button type="submit"
            className='bg-red-500 rounded-lg p-4 hover:bg-rose-400'
           >
            Registrarse
            
          </button>
        </div>

      </form>



    </div>
  )
}
