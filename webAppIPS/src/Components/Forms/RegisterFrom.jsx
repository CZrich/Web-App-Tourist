import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputEmail from '../pures/InputEmail';
import InputPassword from '../pures/InputPassword';
import InputSelectNacionalidad from '../pures/InputSelectNacionalidad';
import InputCel from '../pures/InputCel';
import InputDNI from '../pures/InputDNI';
import InputCadena from '../pures/InputCadena';
import InputFechaNacimiento from '../pures/InputFechaNacimiento';
import { registerUser } from '../../auth/register';

export default function RegisterForm() {
  const navigate = useNavigate();
  const { watch, register, handleSubmit, formState: { errors } } = useForm();

  const mandar = handleSubmit(async (data) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-50 p-4'>
      <form onSubmit={mandar} className='bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-4xl border border-slate-100'>
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Registro de Usuario</h2>
        
        {/* Grid de 2 columnas para escritorio, 1 para móvil */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          <InputCadena id={"nombre"} label={"Nombres"} type={"text"} name={"nombre"} register={register} errors={errors.nombre} />
          <InputCadena id={"apellidoP"} label={"Apellido Paterno"} type={"text"} name={"apellidoPaterno"} register={register} errors={errors.apellidoPaterno} />
          <InputCadena id={"apellidoM"} label={"Apellido Materno"} type={"text"} name={"apellidoMaterno"} register={register} errors={errors.apellidoMaterno} />
          
          <InputCel label={"Número de celular:"} type={"number"} id={"numeroCel"} name={"celular"} register={register} errors={errors.celular} />
          
          <InputCadena id={"direccion"} label={"Dirección"} type={"text"} name={"direccion"} register={register} errors={errors.direccion} />
          <InputDNI label={"DNI:"} type={"number"} id={"dni"} name={"dni"} register={register} errors={errors.dni} />

          <InputSelectNacionalidad label={"País"} id={"pais"} name={"nacionalidad"} register={register} />
          <InputFechaNacimiento label={"Fecha de Nacimiento"} id={"nacimiento"} name={"fechaNacimiento"} register={register} type={"date"} />
        </div>

        <div className="mt-6">
            <InputEmail label={"Email"} type={"email"} id={"email"} errors={errors.email} register={register} name={"email"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <InputPassword label={"Contraseña"} id={"password"} name={"password"} register={register} errors={errors.password} />
            
            <div className='flex flex-col'>
              <label className="text-sm font-semibold text-slate-600 mb-1">Confirmar Contraseña</label>
              <input type="password" {...register("confirmPassword", { 
                  validate: (v) => v === watch("password") || "Las contraseñas no coinciden" 
              })} className="w-full p-3 rounded-xl border border-slate-200 focus:border-indigo-500 transition-all outline-none" />
              {errors.confirmPassword && <span className='text-red-500 text-xs'>{errors.confirmPassword.message}</span>}
            </div>
        </div>

        <button type="submit" className='mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95'>
          Registrarse ahora
        </button>
      </form>
    </div>
  );
}