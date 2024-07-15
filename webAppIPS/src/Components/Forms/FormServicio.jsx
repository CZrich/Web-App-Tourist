import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import InputTextArea from '../pures/InputTextArea';
import InputCadena from '../pures/InputCadena';
import InputMonto from '../pures/InputMonto';
import InputFechaServicio from '../pures/InputFechaServicio';
import { postServicioTuristico } from '../../Services/servicios.turistico';
export default function FormServicio() {
    const parametro = useParams();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const cargar = handleSubmit(async data => {
        console.log(data);
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key === 'imagen') {
                formData.append(key, data[key][0]); // Asegúrate de que sea el primer archivo
            } else {
                formData.append(key, data[key]);
            }
        });
        //formData.append("estado","A");

        try {
            if (parametro.id) {
                await ActualizarProducto(parametro.id, formData);
                // toast.success('Producto actualizado')
            } else {
                console.log("esto",formData);
                await postServicioTuristico(formData);
                // toast.success('Producto Creado')
                console.log("servicio creado");
            }
            //navega('/listaProductos');
        } catch (error) {
            console.error("Error al crear el servicio:", error);
        }

        //navega('/listaProductos');
    });
    return (
        <div>FormServicio
            <form onSubmit={cargar} >

                {/*
                <InputMonto
                    readOnly={false}
                    required={true}
                    register={register}
                    id={"codServi"}
                    name={"cogidoServi"}
                    errors={errors.codigoServi}
                    type={"number"}
                    placeholder={"codigo.."}
                /> */}

                <InputCadena
                    id={"nombreServi"}
                    label={"Nombre Servicio"}
                    type={"text"}
                    name={"nombre"}
                    register={register}
                    errors={errors.nombre}


                />

                <InputTextArea

                    id={"descripcion"}
                    label={"Descripcion"}
                    name={"descripcion"}
                    register={register}
                    errors={errors.descripcion}
                    required={true}
                />

                <InputCadena

                    id={"destinoServi"}
                    label={"Destino"}
                    register={register}
                    required={true}
                    name={"destino"}
                    errors={errors.destino}

                />

                <InputFechaServicio
                    id={"fecha"}
                    label={"Fecha Servicio"}
                    register={register}
                    errors={errors.fecha}
                    type={"date"}
                    name={"fecha"}
                />

                <InputMonto
                    type={"number"}
                    label={"Costo $"}
                    register={register}
                    id={"costoServi"}
                    name={"costo"}
                    placeholder={"40000"}
                    required={true}
                    readOnly={false}
                    errors={errors.costo}
                />
                <div className='flex  flex-col'>
                    <label htmlFor="imagen">subir Imagen</label>
                    <input type="file" id="imagen" {...register("imagen", {

                        required: "subir imagen",

                    })} />
                    {
                        errors.imagen && <span>{errors.imagen?.message}</span>
                    }

                </div>

                <input  type="text" value={"A"}
                 id='estado' {...register("estado")}
                >

                </input>
        

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
