import React from 'react'

import { useEffect,useState } from 'react';
import CardServicioTuristico from './Cards/CardServicioTuristico';
import { GetServiciosTuristico } from '../Services/servicios.turistico';
import { json } from 'react-router-dom';
export default function ListaServicios() {
  const [sevicios,setServicios]=useState(null);
   useEffect(()=>{
    async function cargarServicio(){
      const res=  await GetServiciosTuristico();
       
        console.log(res.data.servicios);
         //return data;
        // setServicios(res.data);
         setServicios(res.data.servicios);
      
       }
  
    
      
     cargarServicio();

   },[]);
  return (
    <div className=' flex flex-wrap gap-4 m-2  bg-rose-500 '>
        { sevicios?.map((data)=>(
     
     <CardServicioTuristico key={data.id} servicio={data}
       className="bg-slate-950 p-4"
      />
        ))
        
         
        }

    </div>
  )
}
