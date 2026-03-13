
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import InputTextArea from '../pures/InputTextArea';
import InputCadena from '../pures/InputCadena';
import InputMonto from '../pures/InputMonto';
import InputFechaServicio from '../pures/InputFechaServicio';
import TablaServicios from '../tablas/TablaServicios';
import { useState, useCallback,useEffect} from "react";
import { toast } from "react-hot-toast"
import { getServiciosTuristico, postServicioTuristico, updateServicioTuristico } from '../../Services/servicios.turistico';

export default function FormServicio() {
    const [servicios, setServicios] = useState([]); // Estado elevado
    const parametro = useParams();
    const navigator = useNavigate();
    const { reset, register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Función para refrescar la lista
    const fetchServicios = useCallback(async () => {
        try {
            const res = await getServiciosTuristico();
            setServicios(res.data);
        } catch (error) {
            console.error("Error al cargar servicios", error);
        }
    }, []);

    useEffect(() => {
        fetchServicios();
    }, [fetchServicios]);

    const cargar = handleSubmit(async data => {
        const formData = new FormData();
        // 1. Asegura que el estado esté presente (si el formulario no tiene un input de estado)
    formData.append("estado", data.estado || "A"); 
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("fecha", data.fecha); // Asegúrate que el formato sea YYYY-MM-DD
    formData.append("destino", data.destino);
    formData.append("costo", data.costo);

    // 2. Manejo especial de la imagen
    if (data.imagen && data.imagen.length > 0) {
        formData.append("imagen", data.imagen[0]);
    }

    // DEBUG: Verifica en consola qué contiene el FormData antes de enviarlo
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
        try {
            if (parametro.id) {
                await updateServicioTuristico(parametro.id, formData);
                toast.success("Servicio actualizado");
            } else {
                await postServicioTuristico(formData);
                toast.success('Servicio Creado');
            }
            reset();
            fetchServicios(); // RECARGA LOS DATOS SIN REFRESCAR
            navigator('/administrar/servicios');
        } catch (error) {
            toast.error("Error en la operación");
        }
    });

        return (
        <div className='w-full space-y-8 animate-fade-in'>
            <div className='bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-200 border border-slate-100'>
                <header className="mb-8">
                    <h2 className='text-2xl font-black text-slate-800 flex items-center gap-2'>
                        <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
                        {parametro.id ? "Actualizar Servicio" : "Nuevo Registro de Servicio"}
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">Completa los campos para gestionar el catálogo turístico.</p>
                </header>

                <form onSubmit={cargar} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6'>
                    
                    {/* Fila 1 */}
                    <div className="flex flex-col">
                        <InputCadena id="nombre" label="Nombre del Servicio" name="nombre" register={register} errors={errors.nombre} />
                    </div>
                    <div className="flex flex-col">
                        <InputCadena id="destino" label="Destino Turístico" name="destino" register={register} errors={errors.destino} required />
                    </div>
                    <div className="flex flex-col">
                        <InputMonto id="costo" label="Precio Neto (USD)" name="costo" register={register} errors={errors.costo} required />
                    </div>

                    {/* Fila 2 */}
                    <div className="flex flex-col">
                        <InputFechaServicio id="fecha" label="Fecha de Salida" name="fecha" register={register} errors={errors.fecha} />
                    </div>

                    {/* Fila 3 - Ocupa todo el ancho */}
                    <div className='md:col-span-2 lg:col-span-3'>
                        <InputTextArea id="descripcion" label="Descripción del Itinerario" name="descripcion" register={register} errors={errors.descripcion} required />
                    </div>

                    {/* Fila 4 - Imagen con estilo moderno */}
                    <div className='md:col-span-2 lg:col-span-2 flex flex-col gap-2'>
                        <label className='text-sm font-bold text-slate-700 ml-1'>Imagen de Portada</label>
                        <div className="relative group">
                            <input 
                                type="file" 
                                {...register("imagen")} 
                                className='w-full p-3 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 transition-all cursor-pointer' 
                            />
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className='md:col-span-2 lg:col-span-1 flex items-end'>
                        <button 
                            type="submit" 
                            className='w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95'
                        >
                            {parametro.id ? "Guardar Cambios" : "Crear Servicio"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Sección de la Tabla */}
            <div className='bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden'>
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-700">Inventario de Servicios</h3>
                </div>
                <div className="p-2">
                    <TablaServicios servicios={servicios} refresh={fetchServicios} setValue={setValue} />
                </div>
            </div>
        </div>
    );
    
}