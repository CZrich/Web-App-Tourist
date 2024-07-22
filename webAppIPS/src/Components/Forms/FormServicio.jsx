import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import InputTextArea from '../pures/InputTextArea';
import InputCadena from '../pures/InputCadena';
import InputMonto from '../pures/InputMonto';
import InputFechaServicio from '../pures/InputFechaServicio';
import TablaServicios from '../tablas/TablaServicios';
import { postServicioTuristico, updateServicioTuristico } from '../../Services/servicios.turistico';
import { toast ,Toaster} from "react-hot-toast"
export default function FormServicio() {
    const parametro = useParams();
    const navigator =useNavigate();
    const { reset, register, handleSubmit, setValue, formState: { errors } } = useForm();
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
                console.log("lo que se actualiza",formData);
                const da=formData.values();
                
                await updateServicioTuristico(parametro.id, formData);
                reset();
                toast.success("servicio actualizado")
                navigator('/administrar/servicios');
                       
            } else {
                console.log("esto", formData);
                await postServicioTuristico(formData);
                reset();
                toast.success('Producto Creado')
                navigator('/administrar/servicios');
                console.log("servicio creado");
            }
            //navega('/listaProductos');
        } catch (error) {
            console.error("Error al crear el servicio:", error);
        }

        //navega('/listaProductos');
    });
    return (
        <div className='flex flex-col justify-center items-center m-4 h-[100%]' >FormServicio
            <form onSubmit={cargar} className='w-[50%] flex flex-col justify-center items-center bg-stone-200' >



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
                <div className='flex flex-col m-4 gap-2'>
                    <label htmlFor="imagen">Subir Imagen</label>
                    <input
                        type="file"
                        id="imagen"
                        {...register("imagen", {
                            required: "Subir imagen es obligatorio",
                            validate: (fileList) => {
                                if (fileList && fileList[0]) {
                                    const file = fileList[0];
                                    const allowedFormats = ['image/jpg','image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                                    if (allowedFormats.includes(file.type)) {
                                        return true;
                                    } else {
                                        return "Por favor, ingrese solo imágenes (JPG,JPEG, PNG, GIF o WebP)";
                                    }
                                }
                                return "Por favor, seleccione un archivo";
                            }
                        })}
                    className='text-xl  w-[400px] h-[60px] '
                    />
                    {errors.imagen && <span>{errors.imagen?.message}</span>}
                </div>

                {/*<input type="text" value={"A"}
                    id='estado' {...register("estado")}
                >

                </input>*/
}

                <div className='flex  w-full justify-center m-4  items-center '>

                    <button type="submit"

                        className='w-[50%] bg-rose-500 pt-4 pb-4 text-white text-xm rounded-lg hover:bg-rose-700'
                    >

                      {parametro.id?"Actualizar":"Crear"}  Servicio

                    </button>
                </div>


            </form>
            <TablaServicios setValue={setValue}/>
        </div>
    )
}
