import React from 'react'

import { useEffect,useState } from 'react';
import CardServicioTuristico from './CardServicioTuristico';
import { GetServiciosTuristico } from '../Services/servicios.turistico';
export default function ListaServicios() {
  const [sevi,setServicios]=useState(null);
   useEffect(()=>{
    async function cargarServicio(){
      const res=  await GetServiciosTuristico();
      console.log(res.data.results);
      setServicios(res.data.results);
    }
      
       
    cargarServicio();

   },[]);
  return (
    <div className=' flex flex-wrap gap-4 m-2 justify-center '>
        { sevi?.map((data)=>(

      <CardServicioTuristico key={data.id} servicio={data}
       className="bg-slate-950 p-4"
      />
        ))
        
         
        }

    </div>
  )
}
