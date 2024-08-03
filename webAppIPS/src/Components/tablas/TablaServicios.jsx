import React from 'react';
import { useEffect, useState } from 'react';
import { getServiciosTuristico ,getServicioPorId,activarServicio,inactivarServicio} from '../../Services/servicios.turistico.js';
import { Link,useNavigate,useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast'
export default function TablaServicios({setValue}) {
  const [servicios, setServicios] = useState([]);
  const [urlImg, setImageUrl] = useState('');
  const parametro=useParams();

  const navigator=useNavigate();

  useEffect(() => {
    const serv = async () => {
      const res = await getServiciosTuristico();
      setServicios(res.data);
    }
    serv();
  }, [])
  return (
    <div className='m-4'>
      TablaServicios
      <table className='w-[auto] text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400'>
        <thead className='text-xs text-gray-900 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400'>
          <tr className=''>
            <th scope='col' className='px-6 py-3'>Nombre</th>
            <th scope='col' className='px-6 py-3'>Descripcion</th>
            <th scope='col' className='px-6 py-3'>Destino</th>
            <th scope='col' className='px-6 py-3'>imagen</th>
            <th scope='col' className='px-6 py-3'>Fecha </th>
            <th scope='col' className='px-6 py-3'>Precio</th>
            <th scope='col' className='px-6 py-3'>Estado</th>
   
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3'></th>

          </tr>



        </thead>
        <tbody>
          {servicios?.map((servicio) => (

            <tr key={servicio.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td className='px-6 py-3'>{servicio.nombre}</td>
              <td className='px-6 py-3'>{servicio.descripcion}</td>
              <td className='px-6 py-3'>{servicio.destino}</td>
              <td className='px-6 py-3'>
                {
                  <img src={`http://127.0.0.1:2024/api/servicios/${servicio.id}/imagen`} alt={servicio.nombre} className='w-[40px]'></img>
                }
              </td>
              <td className='px-6 py-3'>{servicio.fecha}</td>
              <td className='px-6 py-3'>{servicio.costo}</td>
              <td className='px-6 py-3'>{servicio.estado}</td>

              <td className='px-6 py-3'>
              {
                 servicio.estado=="A"?
                 ( <button className='bg-rose-800  p-2 rounded-lg text-white' onClick={async () => {
                  navigator(`/administrar/servicios/${servicio.id}`)
                // const respuesta = window.confirm('esta seguro');
                // if (respuesta) {
                   await inactivarServicio(parametro.id);
                   console.log("se eliminaria el producto");
                  toast.success('Producto Eliminado')
                  // navega('/listaProductos')
                   navigator(`/administrar/servicios`);
                // }
               }}
               >
                 Eliminar
               </button>)  
               :(
                <button className='bg-blue-800  p-2 rounded-lg text-white' onClick={async () => {
                  navigator(`/administrar/servicios/${servicio.id}`)
                 //const respuesta = window.confirm('esta seguro');
                // if (respuesta) {
                  await activarServicio(parametro.id);
                   console.log("se eliminaria el producto");
                  toast.success('Producto Eliminado')
                  navigator(`/administrar/servicios`);
                 // // navega('/listaProductos')
                // }
               }}>
                 Activar
               </button>


               )             
                }

               
              </td>
              <td className='px-6 py-3'>
               
                <button  className='bg-green-600 p-2 rounded-lg text-white' onClick={()=>{
                   navigator(`/administrar/servicios/${servicio.id}`);

                
                   async function loadServicio(){
                    const res=await getServicioPorId(parametro.id)
                         console.log(res.data);
                         setValue('nombre',res.data.nombre)
                         setValue('descripcion',res.data.descripcion)
                         setValue("destino",res.data.destino)
                         setValue("fecha",res.data.fecha)
                         setValue('costo',res.data.costo)
                         setValue("imagen",res.data.imagen)
                         setValue('estado',res.data.estado)
                    }
                    loadServicio();

               
                         
                    
            
                 

                }}>
                  Editar
                  
              </button>
                 {/*<Link to={`/administrar/servicios/${servicio.id}`} className='bg-green-600 p-2 rounded-lg text-white'>
                  Editar
                </Link>*/}
              </td>
            </tr>
          ))
          }

        </tbody>




      </table>



    </div>
  )
}
