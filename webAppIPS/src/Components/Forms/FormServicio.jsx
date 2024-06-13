import React from 'react'
import { useForm } from 'react-hook-form'
import InputTextArea from '../pures/InputTextArea';
import InputCadena from '../pures/InputCadena';
import InputMonto from '../pures/InputMonto';
import InputFechaServicio from '../pures/InputFechaServicio';
export default function FormServicio() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const send = (data) => {
        console.log(data);
    }
    return (
        <div>FormServicio
            <form onSubmit={handleSubmit(send)} >


                <InputMonto
                    readOnly={false}
                    required={true}
                    register={register}
                    id={"codServi"}
                    name={"cogidoServi"}
                    errors={errors.codigoServi}
                    type={"number"}
                    placeholder={"codigo.."}
                />

                <InputCadena
                    id={"nombreServi"}
                    label={"Nombre Servicio"}
                    type={"text"}
                    name={"nombreServi"}
                    register={register}
                    errors={errors.nombreServi}


                />

                <InputTextArea

                    id={"descripcion"}
                    label={"Descripcion"}
                    name={"descripcionServi"}
                    register={register}
                    errors={errors.descripcionServi}
                    required={true}
                />

                <InputCadena

                    id={"destinoServi"}
                    label={"Destino"}
                    register={register}
                    required={true}
                    name={"destinoServi"}
                    errors={errors.destinoServi}

                />

                <InputFechaServicio
                    id={"fechaServi"}
                    label={"Fecha Servicio"}
                    register={register}
                    errors={errors.fechaServi}
                    type={"date"}
                    name={"fechaServi"}
                />

                <InputMonto
                    type={"number"}
                    label={"Costo $"}
                    register={register}
                    id={"costoServi"}
                    name={"costoServi"}
                    placeholder={"40000"}
                    required={true}
                    readOnly={false}
                />
                <div className='flex  w-full justify-center m-4  items-center '>

                    <button type="submit"

                        className='w-full  bg-rose-500 pt-4 pb-4 text-white text-xm rounded-lg hover:bg-rose-700'
                    >

                        Guardar

                    </button>
                </div>


            </form>
        </div>
    )
}
